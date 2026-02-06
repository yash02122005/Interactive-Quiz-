# 🧠 QuizMaster | Interactive Knowledge Challenge

![Version](https://img.shields.io/badge/version-2.1.0-blue.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

**QuizMaster** is a premium, full-featured web application designed for high-engagement learning. Built with a "gamified" logic, it offers a dynamic testing environment across multiple categories, complete with real-time scoring, performance analytics, and immersive visual effects.

[**Start Quiz**](#) | [**View Categories**](#) | [**Report Bug**](#)

---

## ✨ Core Features

* **🗂️ Multi-Category Database:** Over 100+ curated questions spanning General Knowledge, Science, History, Geography, Technology, and Sports.
* **⚙️ Customizable Sessions:** Users can tailor their experience by selecting question counts, difficulty levels, and timer constraints.
* **📊 Performance Analytics:** Post-quiz breakdown featuring visual charts and statistical tracking (accuracy, speed, and streaks).
* **🔄 Advanced Review System:** A dedicated review screen allowing users to analyze correct answers and learn from mistakes.
* **🎮 Gamified UI:** Features like score streaks, confetti celebrations, and pulse animations for an immersive experience.
* **📱 Ultra-Responsive:** Modern glassmorphism design optimized for both desktop precision and mobile touch-targets.

---

## 🛠️ Technical Insights & Error Resolution

Developing **QuizMaster** involved solving several logic-heavy challenges to ensure a professional and bug-free user flow:

1.  **State Synchronization:**
    * *Observation:* Managing transitions between the Welcome, Quiz, and Results screens often led to "zombie" timers or double-score bugs.
    * *Solution:* Implemented a centralized `QuizApp.state` object that is reset via a strict `resetState()` method, ensuring all variables are cleared before a new session starts.

2.  **Randomization & Logic Errors:**
    * *Observation:* Simply picking random indices often led to duplicate questions in a single session.
    * *Solution:* Integrated a **Fisher-Yates Shuffle Algorithm** within `questions.js` to ensure a unique and randomized array of questions every time.

3.  **Timer & UI Bottlenecks:**
    * *Observation:* High-frequency DOM updates for the countdown timer could cause minor lag on lower-end devices.
    * *Solution:* Optimized the timer logic using `requestAnimationFrame` style thinking within a `setInterval` hook, updating only the necessary progress-bar elements to save on rendering costs.

4.  **Data Scalability:**
    * *Observation:* Hardcoding questions into the main script made the code unmaintainable.
    * *Solution:* Architected a modular data structure in `questions.js`, allowing for easy scaling of new categories and difficulty tiers without touching the core `script.js` engine.

---

## 🚀 Technical Stack

* **Structure:** Semantic HTML5 with a modular component-based layout.
* **Styling:** Advanced CSS3 utilizing Flexbox, Grid, and Custom Properties for theming.
* **Logic:** Vanilla JavaScript (ES6+) following a Controller-State design pattern.
* **Assets:** Font Awesome 6.4 (Icons) & Google Fonts (Poppins/Montserrat).

---

## 📥 Installation

1.  **Clone the Repo:**
    ```bash
    git clone [https://github.com/yourusername/quizmaster-pro.git](https://github.com/yourusername/quizmaster-pro.git)
    ```
2.  **Launch:**
    Open `index.html` in any modern web browser. 
    *Note: Ensure `questions.js`, `script.js`, and `style.css` are in the same directory.*

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

**Developed with 💡 by [Yash]**
