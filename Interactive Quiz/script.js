// Main Application Controller
const QuizApp = {
    // DOM Elements
    elements: {
        welcomeScreen: document.getElementById('welcomeScreen'),
        quizScreen: document.getElementById('quizScreen'),
        resultsScreen: document.getElementById('resultsScreen'),
        reviewScreen: document.getElementById('reviewScreen'),
        categoryGrid: document.getElementById('categoryGrid'),
        startBtn: document.getElementById('startBtn'),
        backBtn: document.getElementById('backBtn'),
        nextBtn: document.getElementById('nextBtn'),
        hintBtn: document.getElementById('hintBtn'),
        skipBtn: document.getElementById('skipBtn'),
        restartBtn: document.getElementById('restartBtn'),
        newQuizBtn: document.getElementById('newQuizBtn'),
        reviewBtn: document.getElementById('reviewBtn'),
        backFromReviewBtn: document.getElementById('backFromReviewBtn'),
        questionCountSelect: document.getElementById('questionCount'),
        difficultySelect: document.getElementById('difficulty'),
        timerSelect: document.getElementById('timer')
    },

    // Quiz State
    state: {
        currentCategory: null,
        currentQuestions: [],
        currentQuestionIndex: 0,
        selectedOption: null,
        score: 0,
        streak: 0,
        maxStreak: 0,
        timer: null,
        timeLeft: 30,
        totalTime: 0,
        userAnswers: [],
        settings: {
            questionCount: 10,
            difficulty: 'all',
            timer: 30
        }
    },

    // Initialize the application
    init: function() {
        this.setupEventListeners();
        this.renderCategories();
        this.updateStats();
        this.showScreen('welcome');
    },

    // Set up all event listeners
    setupEventListeners: function() {
        // Start button
        this.elements.startBtn.addEventListener('click', () => this.startQuiz());
        
        // Navigation buttons
        this.elements.backBtn.addEventListener('click', () => this.showScreen('welcome'));
        this.elements.restartBtn.addEventListener('click', () => this.restartQuiz());
        this.elements.newQuizBtn.addEventListener('click', () => this.showScreen('welcome'));
        this.elements.reviewBtn.addEventListener('click', () => this.showReviewScreen());
        this.elements.backFromReviewBtn.addEventListener('click', () => this.showScreen('results'));
        
        // Quiz controls
        this.elements.nextBtn.addEventListener('click', () => this.handleNextQuestion());
        this.elements.hintBtn.addEventListener('click', () => this.showHint());
        this.elements.skipBtn.addEventListener('click', () => this.skipQuestion());
        
        // Settings changes
        this.elements.questionCountSelect.addEventListener('change', (e) => {
            this.state.settings.questionCount = parseInt(e.target.value);
        });
        
        this.elements.difficultySelect.addEventListener('change', (e) => {
            this.state.settings.difficulty = e.target.value;
        });
        
        this.elements.timerSelect.addEventListener('change', (e) => {
            this.state.settings.timer = parseInt(e.target.value);
        });
    },

    // Render categories on welcome screen
    renderCategories: function() {
        const categories = quizDatabase.getAllCategories();
        const totalQuestions = quizDatabase.getTotalQuestionCount();
        
        document.getElementById('totalQuestions').textContent = `${totalQuestions}+`;
        
        this.elements.categoryGrid.innerHTML = '';
        
        categories.forEach(category => {
            const questionCount = quizDatabase.getQuestionCountByCategory(category.id);
            
            const categoryCard = document.createElement('div');
            categoryCard.className = 'category-card';
            categoryCard.dataset.category = category.id;
            categoryCard.innerHTML = `
                <i class="${category.icon}"></i>
                <h3>${category.name}</h3>
                <p class="question-count">${questionCount} questions</p>
            `;
            
            categoryCard.addEventListener('click', () => this.selectCategory(category.id));
            this.elements.categoryGrid.appendChild(categoryCard);
        });
    },

    // Select a category
    selectCategory: function(categoryId) {
        // Remove selection from all categories
        document.querySelectorAll('.category-card').forEach(card => {
            card.classList.remove('selected');
        });
        
        // Add selection to clicked category
        const selectedCard = document.querySelector(`[data-category="${categoryId}"]`);
        selectedCard.classList.add('selected');
        
        this.state.currentCategory = categoryId;
        
        // Update start button text with category name
        const category = quizDatabase.getAllCategories().find(c => c.id === categoryId);
        this.elements.startBtn.innerHTML = `<i class="fas fa-play"></i> Start ${category.name} Quiz`;
    },

    // Update statistics on welcome screen
    updateStats: function() {
        document.getElementById('totalCategories').textContent = quizDatabase.getAllCategories().length;
        // In a real app, you would fetch actual stats from a backend
    },

    // Start the quiz
    startQuiz: function() {
        if (!this.state.currentCategory) {
            this.showNotification('Please select a category first!', 'warning');
            return;
        }
        
        // Get selected settings
        const questionCount = this.state.settings.questionCount;
        const difficulty = this.state.settings.difficulty;
        const timer = this.state.settings.timer;
        
        // Get random questions
        this.state.currentQuestions = quizDatabase.getRandomQuestions(
            this.state.currentCategory, 
            questionCount, 
            difficulty
        );
        
        if (this.state.currentQuestions.length === 0) {
            this.showNotification('No questions available for these settings!', 'error');
            return;
        }
        
        // Reset quiz state
        this.state.currentQuestionIndex = 0;
        this.state.score = 0;
        this.state.streak = 0;
        this.state.maxStreak = 0;
        this.state.selectedOption = null;
        this.state.userAnswers = [];
        this.state.timeLeft = timer;
        this.state.totalTime = 0;
        
        // Update UI for quiz start
        const category = quizDatabase.getAllCategories().find(c => c.id === this.state.currentCategory);
        document.getElementById('quizCategory').textContent = category.name;
        document.getElementById('totalQuestionCount').textContent = questionCount;
        document.getElementById('timerDisplay').style.display = timer > 0 ? 'flex' : 'none';
        
        // Start the quiz
        this.showScreen('quiz');
        this.loadQuestion();
        
        // Start timer if enabled
        if (timer > 0) {
            this.startTimer();
        }
    },

    // Load current question
    loadQuestion: function() {
        const question = this.state.currentQuestions[this.state.currentQuestionIndex];
        
        // Update question text
        document.getElementById('questionText').textContent = question.question;
        document.getElementById('questionNumber').textContent = `Question ${this.state.currentQuestionIndex + 1}`;
        
        // Update difficulty badge
        const difficultyBadge = document.getElementById('difficultyBadge');
        difficultyBadge.textContent = question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1);
        difficultyBadge.className = `difficulty-badge ${question.difficulty}`;
        
        // Reset hint
        document.getElementById('questionHint').textContent = 'Click the hint button for help';
        
        // Clear and add options
        const optionsContainer = document.getElementById('optionsContainer');
        optionsContainer.innerHTML = '';
        
        const optionLabels = ['A', 'B', 'C', 'D'];
        
        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.dataset.index = index;
            optionElement.innerHTML = `
                <div class="option-label">${optionLabels[index]}</div>
                <div class="option-text">${option}</div>
            `;
            
            optionElement.addEventListener('click', () => this.selectOption(index));
            optionsContainer.appendChild(optionElement);
        });
        
        // Reset selected option
        this.state.selectedOption = null;
        
        // Update progress
        this.updateProgress();
        
        // Update UI for last question
        if (this.state.currentQuestionIndex === this.state.currentQuestions.length - 1) {
            this.elements.nextBtn.innerHTML = 'Finish Quiz <i class="fas fa-flag-checkered"></i>';
        } else {
            this.elements.nextBtn.innerHTML = 'Next Question <i class="fas fa-arrow-right"></i>';
        }
        
        // Reset timer if enabled
        if (this.state.settings.timer > 0) {
            this.state.timeLeft = this.state.settings.timer;
            document.getElementById('timeLeft').textContent = this.state.timeLeft;
            document.getElementById('timerDisplay').style.color = '';
        }
    },

    // Select an option
    selectOption: function(optionIndex) {
        // Remove selection from all options
        document.querySelectorAll('.option').forEach(opt => {
            opt.classList.remove('selected');
        });
        
        // Add selection to clicked option
        const selectedOption = document.querySelector(`[data-index="${optionIndex}"]`);
        selectedOption.classList.add('selected');
        
        this.state.selectedOption = optionIndex;
    },

    // Show hint for current question
    showHint: function() {
        const question = this.state.currentQuestions[this.state.currentQuestionIndex];
        document.getElementById('questionHint').textContent = question.hint;
    },

    // Skip current question
    skipQuestion: function() {
        // Record skipped question
        this.state.userAnswers.push({
            questionIndex: this.state.currentQuestionIndex,
            selected: null,
            correct: this.state.currentQuestions[this.state.currentQuestionIndex].correct,
            isCorrect: false,
            skipped: true
        });
        
        // Reset streak
        this.state.streak = 0;
        
        // Move to next question or finish
        this.moveToNextQuestion();
    },

    // Handle next question button
    handleNextQuestion: function() {
        if (this.state.selectedOption === null) {
            this.showNotification('Please select an answer!', 'warning');
            return;
        }
        
        const question = this.state.currentQuestions[this.state.currentQuestionIndex];
        const isCorrect = this.state.selectedOption === question.correct;
        
        // Record answer
        this.state.userAnswers.push({
            questionIndex: this.state.currentQuestionIndex,
            selected: this.state.selectedOption,
            correct: question.correct,
            isCorrect: isCorrect,
            skipped: false,
            question: question.question,
            options: question.options,
            explanation: question.explanation
        });
        
        // Update score and streak
        if (isCorrect) {
            this.state.score++;
            this.state.streak++;
            if (this.state.streak > this.state.maxStreak) {
                this.state.maxStreak = this.state.streak;
            }
            this.showNotification('Correct!', 'success');
        } else {
            this.state.streak = 0;
            this.showNotification(`Incorrect. The right answer is: ${question.options[question.correct]}`, 'error');
        }
        
        // Highlight correct/incorrect answers
        this.highlightAnswers();
        
        // Update streak counter
        document.getElementById('streakCount').textContent = this.state.streak;
        
        // Move to next question after a delay
        setTimeout(() => {
            this.moveToNextQuestion();
        }, 1500);
    },

    // Highlight correct and incorrect answers
    highlightAnswers: function() {
        const question = this.state.currentQuestions[this.state.currentQuestionIndex];
        const options = document.querySelectorAll('.option');
        
        options.forEach((option, index) => {
            if (index === question.correct) {
                option.classList.add('correct');
            } else if (index === this.state.selectedOption && index !== question.correct) {
                option.classList.add('incorrect');
            }
        });
    },

    // Move to next question or finish quiz
    moveToNextQuestion: function() {
        if (this.state.currentQuestionIndex < this.state.currentQuestions.length - 1) {
            this.state.currentQuestionIndex++;
            this.loadQuestion();
            
            // Update current question counter
            document.getElementById('currentQuestionCount').textContent = this.state.currentQuestionIndex + 1;
        } else {
            this.finishQuiz();
        }
    },

    // Update progress bar
    updateProgress: function() {
        const progressPercent = ((this.state.currentQuestionIndex + 1) / this.state.currentQuestions.length) * 100;
        document.getElementById('progressFill').style.width = `${progressPercent}%`;
        document.getElementById('progressPercent').textContent = `${Math.round(progressPercent)}%`;
        document.getElementById('currentScore').textContent = this.state.score;
    },

    // Start the timer
    startTimer: function() {
        if (this.state.timer) {
            clearInterval(this.state.timer);
        }
        
        this.state.timer = setInterval(() => {
            this.state.timeLeft--;
            this.state.totalTime++;
            document.getElementById('timeLeft').textContent = this.state.timeLeft;
            
            // Change color when time is running out
            if (this.state.timeLeft <= 10) {
                document.getElementById('timeLeft').style.color = '#ef4444';
                document.getElementById('timerDisplay').style.background = 'rgba(239, 68, 68, 0.2)';
            }
            
            // Auto-submit when time runs out
            if (this.state.timeLeft <= 0) {
                clearInterval(this.state.timer);
                if (this.state.selectedOption === null) {
                    // Auto-select first option
                    const firstOption = document.querySelector('.option');
                    if (firstOption) {
                        firstOption.click();
                    }
                }
                this.handleNextQuestion();
            }
        }, 1000);
    },

    // Finish the quiz and show results
    finishQuiz: function() {
        clearInterval(this.state.timer);
        
        // Calculate statistics
        const totalQuestions = this.state.currentQuestions.length;
        const correctAnswers = this.state.score;
        const incorrectAnswers = this.state.userAnswers.filter(a => !a.isCorrect && !a.skipped).length;
        const skippedQuestions = this.state.userAnswers.filter(a => a.skipped).length;
        const scorePercentage = Math.round((correctAnswers / totalQuestions) * 100);
        
        // Update results screen
        const category = quizDatabase.getAllCategories().find(c => c.id === this.state.currentCategory);
        document.getElementById('categoryResult').textContent = category.name;
        document.getElementById('difficultyResult').textContent = this.state.settings.difficulty === 'all' ? 'Mixed' : this.state.settings.difficulty.charAt(0).toUpperCase() + this.state.settings.difficulty.slice(1);
        document.getElementById('questionsResult').textContent = `${totalQuestions} Questions`;
        
        // Update score display
        document.getElementById('correctAnswers').textContent = correctAnswers;
        document.getElementById('totalAnswers').textContent = totalQuestions;
        document.getElementById('scorePercentage').textContent = `${scorePercentage}%`;
        
        // Update score circle animation
        const circle = document.querySelector('.score-progress');
        const circumference = 2 * Math.PI * 90;
        const offset = circumference - (scorePercentage / 100) * circumference;
        circle.style.strokeDashoffset = offset;
        
        // Update stats
        document.getElementById('correctStat').textContent = correctAnswers;
        document.getElementById('incorrectStat').textContent = incorrectAnswers;
        document.getElementById('skippedStat').textContent = skippedQuestions;
        document.getElementById('streakStat').textContent = this.state.maxStreak;
        
        // Update score message based on performance
        let scoreMessage = '';
        if (scorePercentage >= 90) {
            scoreMessage = 'Outstanding! You are a true expert!';
        } else if (scorePercentage >= 75) {
            scoreMessage = 'Excellent work! You have great knowledge.';
        } else if (scorePercentage >= 60) {
            scoreMessage = 'Good job! You have a solid understanding.';
        } else if (scorePercentage >= 40) {
            scoreMessage = 'Not bad! Keep learning to improve.';
        } else {
            scoreMessage = 'Keep practicing! Review the material and try again.';
        }
        document.getElementById('scoreMessage').textContent = scoreMessage;
        
        // Generate performance breakdown
        this.generatePerformanceChart();
        
        // Show results screen
        this.showScreen('results');
        
        // Show confetti for excellent scores
        if (scorePercentage >= 80) {
            this.createConfetti();
        }
    },

    // Generate performance chart
    generatePerformanceChart: function() {
        const performanceChart = document.getElementById('performanceChart');
        performanceChart.innerHTML = '';
        
        // Count questions by difficulty
        const difficultyCounts = { easy: 0, medium: 0, hard: 0 };
        const correctByDifficulty = { easy: 0, medium: 0, hard: 0 };
        
        this.state.currentQuestions.forEach((question, index) => {
            const answer = this.state.userAnswers[index];
            difficultyCounts[question.difficulty]++;
            if (answer && answer.isCorrect) {
                correctByDifficulty[question.difficulty]++;
            }
        });
        
        // Create bars for each difficulty
        ['easy', 'medium', 'hard'].forEach(difficulty => {
            if (difficultyCounts[difficulty] > 0) {
                const percentage = difficultyCounts[difficulty] > 0 ? 
                    Math.round((correctByDifficulty[difficulty] / difficultyCounts[difficulty]) * 100) : 0;
                
                const bar = document.createElement('div');
                bar.className = 'performance-bar';
                bar.innerHTML = `
                    <div class="bar-label">${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}</div>
                    <div class="bar-container">
                        <div class="bar-fill ${difficulty}" style="width: ${percentage}%"></div>
                    </div>
                    <div class="bar-value">${percentage}%</div>
                `;
                performanceChart.appendChild(bar);
            }
        });
    },

    // Show review screen
    showReviewScreen: function() {
        const reviewContent = document.getElementById('reviewContent');
        reviewContent.innerHTML = '';
        
        this.state.userAnswers.forEach((answer, index) => {
            const question = this.state.currentQuestions[index];
            const optionLabels = ['A', 'B', 'C', 'D'];
            
            const reviewItem = document.createElement('div');
            reviewItem.className = 'review-item';
            reviewItem.innerHTML = `
                <div class="review-question">${index + 1}. ${question.question}</div>
                <div class="review-answers">
                    ${question.options.map((option, optIndex) => {
                        let className = 'review-answer';
                        let icon = '';
                        
                        if (optIndex === question.correct) {
                            className += ' correct';
                            icon = '<i class="fas fa-check-circle"></i>';
                        } else if (optIndex === answer.selected && !answer.isCorrect) {
                            className += ' incorrect';
                            icon = '<i class="fas fa-times-circle"></i>';
                        } else if (optIndex === answer.selected) {
                            className += ' selected';
                            icon = '<i class="fas fa-check"></i>';
                        }
                        
                        return `
                            <div class="${className}">
                                ${icon}
                                <span><strong>${optionLabels[optIndex]}.</strong> ${option}</span>
                                ${optIndex === question.correct ? `<small style="margin-left: auto; color: #94a3b8;">${question.explanation}</small>` : ''}
                            </div>
                        `;
                    }).join('')}
                </div>
            `;
            
            reviewContent.appendChild(reviewItem);
        });
        
        this.showScreen('review');
    },

    // Restart the quiz with same settings
    restartQuiz: function() {
        // Reset quiz state
        this.state.currentQuestionIndex = 0;
        this.state.score = 0;
        this.state.streak = 0;
        this.state.maxStreak = 0;
        this.state.selectedOption = null;
        this.state.userAnswers = [];
        this.state.timeLeft = this.state.settings.timer;
        this.state.totalTime = 0;
        
        // Shuffle questions for new attempt
        this.state.currentQuestions = quizDatabase.shuffleArray([...this.state.currentQuestions]);
        
        // Show quiz screen
        this.showScreen('quiz');
        this.loadQuestion();
        
        // Start timer if enabled
        if (this.state.settings.timer > 0) {
            this.startTimer();
        }
    },

    // Switch between screens
    showScreen: function(screen) {
        // Hide all screens
        this.elements.welcomeScreen.classList.remove('active');
        this.elements.quizScreen.classList.remove('active');
        this.elements.resultsScreen.classList.remove('active');
        this.elements.reviewScreen.classList.remove('active');
        
        // Show selected screen
        switch(screen) {
            case 'welcome':
                this.elements.welcomeScreen.classList.add('active');
                break;
            case 'quiz':
                this.elements.quizScreen.classList.add('active');
                break;
            case 'results':
                this.elements.resultsScreen.classList.add('active');
                break;
            case 'review':
                this.elements.reviewScreen.classList.add('active');
                break;
        }
    },

    // Show notification
    showNotification: function(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : type === 'warning' ? 'exclamation-triangle' : 'info-circle'}"></i>
            <span>${message}</span>
        `;
        
        document.getElementById('notificationContainer').appendChild(notification);
        
        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.remove();
        }, 3000);
    },

    // Create confetti animation
    createConfetti: function() {
        const colors = ['#6366f1', '#ec4899', '#f59e0b', '#10b981', '#8b5cf6', '#3b82f6'];
        
        for (let i = 0; i < 150; i++) {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.width = `${Math.random() * 10 + 5}px`;
            confetti.style.height = confetti.style.width;
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.borderRadius = '50%';
            confetti.style.left = `${Math.random() * 100}vw`;
            confetti.style.top = '-20px';
            confetti.style.zIndex = '9999';
            confetti.style.pointerEvents = 'none';
            
            document.body.appendChild(confetti);
            
            // Animate confetti
            const animation = confetti.animate([
                { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
                { transform: `translateY(${window.innerHeight}px) rotate(${Math.random() * 720}deg)`, opacity: 0 }
            ], {
                duration: Math.random() * 3000 + 2000,
                easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
            });
            
            // Remove confetti after animation
            animation.onfinish = () => confetti.remove();
        }
    }
};

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    QuizApp.init();
});