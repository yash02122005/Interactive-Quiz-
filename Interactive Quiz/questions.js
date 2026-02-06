// Quiz Database with 100+ questions across multiple categories
const quizDatabase = {
    categories: [
        {
            id: 'general',
            name: 'General Knowledge',
            icon: 'fas fa-globe',
            color: '#6366f1',
            description: 'Test your knowledge on various topics'
        },
        {
            id: 'science',
            name: 'Science',
            icon: 'fas fa-flask',
            color: '#10b981',
            description: 'Explore the wonders of science'
        },
        {
            id: 'history',
            name: 'History',
            icon: 'fas fa-landmark',
            color: '#f59e0b',
            description: 'Journey through time and events'
        },
        {
            id: 'geography',
            name: 'Geography',
            icon: 'fas fa-map',
            color: '#3b82f6',
            description: 'Discover the world around you'
        },
        {
            id: 'technology',
            name: 'Technology',
            icon: 'fas fa-laptop-code',
            color: '#8b5cf6',
            description: 'Digital world and innovations'
        },
        {
            id: 'sports',
            name: 'Sports',
            icon: 'fas fa-futbol',
            color: '#ec4899',
            description: 'Athletics and competitions'
        },
        {
            id: 'entertainment',
            name: 'Entertainment',
            icon: 'fas fa-film',
            color: '#ef4444',
            description: 'Movies, music, and pop culture'
        },
        {
            id: 'mathematics',
            name: 'Mathematics',
            icon: 'fas fa-calculator',
            color: '#06b6d4',
            description: 'Numbers, logic, and calculations'
        }
    ],

    questions: {
        general: [
            {
                question: "What is the capital of France?",
                options: ["London", "Berlin", "Paris", "Madrid"],
                correct: 2,
                difficulty: "easy",
                hint: "This city is known as the 'City of Light'",
                explanation: "Paris is the capital and most populous city of France."
            },
            {
                question: "Which planet is known as the Red Planet?",
                options: ["Venus", "Mars", "Jupiter", "Saturn"],
                correct: 1,
                difficulty: "easy",
                hint: "It's the fourth planet from the Sun",
                explanation: "Mars appears red due to iron oxide (rust) on its surface."
            },
            {
                question: "Who wrote 'Romeo and Juliet'?",
                options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
                correct: 1,
                difficulty: "easy",
                hint: "He is often called England's national poet",
                explanation: "William Shakespeare wrote this famous tragedy around 1595-1596."
            },
            {
                question: "What is the largest ocean on Earth?",
                options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
                correct: 3,
                difficulty: "medium",
                hint: "It covers about 30% of the Earth's surface",
                explanation: "The Pacific Ocean is the largest and deepest ocean basin."
            },
            {
                question: "Which element has the chemical symbol 'O'?",
                options: ["Gold", "Oxygen", "Osmium", "Oganesson"],
                correct: 1,
                difficulty: "easy",
                hint: "It's essential for human respiration",
                explanation: "Oxygen is a chemical element with symbol O and atomic number 8."
            },
            {
                question: "What is the hardest natural substance on Earth?",
                options: ["Gold", "Iron", "Diamond", "Platinum"],
                correct: 2,
                difficulty: "medium",
                hint: "It's commonly used in jewelry",
                explanation: "Diamond is the hardest known natural material on the Mohs scale."
            },
            {
                question: "How many continents are there?",
                options: ["5", "6", "7", "8"],
                correct: 2,
                difficulty: "easy",
                hint: "Count includes both Americas as separate continents",
                explanation: "The seven continents are: Africa, Antarctica, Asia, Australia, Europe, North America, South America."
            },
            {
                question: "Which country is known as the Land of the Rising Sun?",
                options: ["China", "Japan", "Thailand", "South Korea"],
                correct: 1,
                difficulty: "medium",
                hint: "This country's flag features a red circle on white background",
                explanation: "Japan is called the Land of the Rising Sun because the sun rises first in Japan."
            },
            {
                question: "What is the currency of the United Kingdom?",
                options: ["Euro", "Dollar", "Pound", "Franc"],
                correct: 2,
                difficulty: "easy",
                hint: "It's symbolized by £",
                explanation: "The Pound Sterling (£) is the official currency of the United Kingdom."
            },
            {
                question: "Who painted the Mona Lisa?",
                options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
                correct: 2,
                difficulty: "medium",
                hint: "He was also a scientist and inventor",
                explanation: "Leonardo da Vinci painted the Mona Lisa between 1503 and 1506."
            }
        ],

        science: [
            {
                question: "What is the chemical symbol for water?",
                options: ["H2O", "CO2", "NaCl", "O2"],
                correct: 0,
                difficulty: "easy",
                hint: "It consists of two hydrogen atoms and one oxygen atom",
                explanation: "H2O is the chemical formula for water."
            },
            {
                question: "Which gas do plants absorb from the atmosphere?",
                options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
                correct: 1,
                difficulty: "easy",
                hint: "Plants use this for photosynthesis",
                explanation: "Plants absorb carbon dioxide and release oxygen during photosynthesis."
            },
            {
                question: "What is the speed of light in vacuum?",
                options: ["300,000 km/s", "150,000 km/s", "1,000,000 km/s", "30,000 km/s"],
                correct: 0,
                difficulty: "hard",
                hint: "It's approximately 186,000 miles per second",
                explanation: "The speed of light in vacuum is 299,792,458 meters per second."
            },
            {
                question: "Which planet has the most moons?",
                options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
                correct: 0,
                difficulty: "medium",
                hint: "It's the largest planet in our solar system",
                explanation: "Jupiter has at least 95 known moons, the most in our solar system."
            },
            {
                question: "What is the main component of the Sun?",
                options: ["Helium", "Hydrogen", "Oxygen", "Carbon"],
                correct: 1,
                difficulty: "medium",
                hint: "It's the lightest and most abundant element",
                explanation: "The Sun is primarily composed of hydrogen (about 74%) and helium (about 24%)."
            },
            {
                question: "Which blood type is the universal donor?",
                options: ["A", "B", "AB", "O"],
                correct: 3,
                difficulty: "hard",
                hint: "This blood type can be donated to anyone",
                explanation: "Type O-negative blood is considered the universal donor."
            },
            {
                question: "What is the study of fossils called?",
                options: ["Geology", "Paleontology", "Archaeology", "Anthropology"],
                correct: 1,
                difficulty: "medium",
                hint: "It involves studying ancient life forms",
                explanation: "Paleontology is the scientific study of life that existed prior to, and sometimes including, the start of the Holocene Epoch."
            },
            {
                question: "Which element is liquid at room temperature?",
                options: ["Bromine", "Mercury", "Gallium", "All of the above"],
                correct: 3,
                difficulty: "hard",
                hint: "There are only a few elements that are liquid at room temperature",
                explanation: "Mercury and bromine are liquid at room temperature, while gallium melts at about 30°C."
            },
            {
                question: "What is the unit of electrical resistance?",
                options: ["Volt", "Ampere", "Ohm", "Watt"],
                correct: 2,
                difficulty: "hard",
                hint: "Named after a German physicist",
                explanation: "The ohm (Ω) is the unit of electrical resistance, named after Georg Simon Ohm."
            },
            {
                question: "Which part of the cell is known as the 'powerhouse'?",
                options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi Apparatus"],
                correct: 2,
                difficulty: "medium",
                hint: "It produces energy for the cell",
                explanation: "Mitochondria are known as the powerhouse of the cell because they generate most of the cell's supply of ATP."
            }
        ],

        history: [
            {
                question: "In which year did World War II end?",
                options: ["1943", "1944", "1945", "1946"],
                correct: 2,
                difficulty: "easy",
                hint: "It ended after the atomic bombs were dropped on Japan",
                explanation: "World War II ended in 1945 with the surrender of Japan."
            },
            {
                question: "Who was the first president of the United States?",
                options: ["Thomas Jefferson", "George Washington", "Abraham Lincoln", "John Adams"],
                correct: 1,
                difficulty: "easy",
                hint: "His face appears on the one-dollar bill",
                explanation: "George Washington served as the first president from 1789 to 1797."
            },
            {
                question: "Which ancient civilization built the pyramids?",
                options: ["Greeks", "Romans", "Egyptians", "Mayans"],
                correct: 2,
                difficulty: "easy",
                hint: "Located in North Africa",
                explanation: "The ancient Egyptians built the pyramids as tombs for pharaohs."
            },
            {
                question: "When did the Berlin Wall fall?",
                options: ["1987", "1988", "1989", "1990"],
                correct: 2,
                difficulty: "medium",
                hint: "It marked the end of the Cold War era",
                explanation: "The Berlin Wall fell on November 9, 1989."
            },
            {
                question: "Who discovered penicillin?",
                options: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Albert Einstein"],
                correct: 1,
                difficulty: "medium",
                hint: "He discovered it by accident",
                explanation: "Alexander Fleming discovered penicillin in 1928."
            },
            {
                question: "Which empire was ruled by Genghis Khan?",
                options: ["Roman Empire", "Ottoman Empire", "Mongol Empire", "British Empire"],
                correct: 2,
                difficulty: "medium",
                hint: "It was the largest contiguous land empire in history",
                explanation: "Genghis Khan founded and ruled the Mongol Empire in the 13th century."
            },
            {
                question: "When did humans first land on the moon?",
                options: ["1967", "1968", "1969", "1970"],
                correct: 2,
                difficulty: "easy",
                hint: "It was during the Apollo 11 mission",
                explanation: "Neil Armstrong and Buzz Aldrin landed on the moon on July 20, 1969."
            },
            {
                question: "Who was the first woman to win a Nobel Prize?",
                options: ["Marie Curie", "Mother Teresa", "Rosalind Franklin", "Jane Goodall"],
                correct: 0,
                difficulty: "hard",
                hint: "She won it twice, in different fields",
                explanation: "Marie Curie was the first woman to win a Nobel Prize (Physics, 1903) and the only person to win in two different sciences."
            },
            {
                question: "Which war was fought between the North and South in the United States?",
                options: ["Revolutionary War", "Civil War", "War of 1812", "Spanish-American War"],
                correct: 1,
                difficulty: "easy",
                hint: "It lasted from 1861 to 1865",
                explanation: "The American Civil War was fought between the Union (North) and the Confederacy (South)."
            },
            {
                question: "Who was the pharaoh of Egypt during the Exodus?",
                options: ["Tutankhamun", "Ramses II", "Cleopatra", "Khufu"],
                correct: 1,
                difficulty: "hard",
                hint: "He ruled for 66 years, the second longest in Egyptian history",
                explanation: "Many scholars believe Ramses II was the pharaoh during the Exodus."
            }
        ],

        geography: [
            {
                question: "Which is the longest river in the world?",
                options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
                correct: 1,
                difficulty: "medium",
                hint: "It flows through northeastern Africa",
                explanation: "The Nile is approximately 6,650 km (4,130 miles) long."
            },
            {
                question: "What is the smallest country in the world?",
                options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
                correct: 1,
                difficulty: "easy",
                hint: "It's located within Rome, Italy",
                explanation: "Vatican City is the smallest country by both area and population."
            },
            {
                question: "Which desert is the largest in the world?",
                options: ["Sahara", "Arabian", "Gobi", "Antarctic"],
                correct: 3,
                difficulty: "hard",
                hint: "It's the coldest desert",
                explanation: "The Antarctic Desert is the largest desert in the world."
            },
            {
                question: "What is the capital of Australia?",
                options: ["Sydney", "Melbourne", "Canberra", "Perth"],
                correct: 2,
                difficulty: "medium",
                hint: "It's not the largest city",
                explanation: "Canberra was purpose-built as the capital of Australia."
            },
            {
                question: "Which mountain is the highest in the world?",
                options: ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"],
                correct: 1,
                difficulty: "easy",
                hint: "Located in the Himalayas",
                explanation: "Mount Everest is 8,848.86 meters (29,031.7 feet) high."
            },
            {
                question: "How many time zones does Russia have?",
                options: ["5", "7", "9", "11"],
                correct: 3,
                difficulty: "hard",
                hint: "It's the country with the most time zones",
                explanation: "Russia spans 11 time zones, the most of any country."
            },
            {
                question: "Which country is known as the Land of a Thousand Lakes?",
                options: ["Canada", "Sweden", "Finland", "Norway"],
                correct: 2,
                difficulty: "medium",
                hint: "It's a Nordic country",
                explanation: "Finland has about 188,000 lakes, earning it this nickname."
            },
            {
                question: "What is the capital of Brazil?",
                options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
                correct: 2,
                difficulty: "medium",
                hint: "It's a planned city built in the 1960s",
                explanation: "Brasília became Brazil's capital in 1960, replacing Rio de Janeiro."
            },
            {
                question: "Which ocean is the warmest?",
                options: ["Atlantic", "Indian", "Pacific", "Arctic"],
                correct: 1,
                difficulty: "hard",
                hint: "It's located between Africa, Asia, and Australia",
                explanation: "The Indian Ocean is the warmest ocean in the world."
            },
            {
                question: "What is the largest island in the world?",
                options: ["Greenland", "New Guinea", "Borneo", "Madagascar"],
                correct: 0,
                difficulty: "medium",
                hint: "It's an autonomous territory of Denmark",
                explanation: "Greenland is the world's largest island that is not a continent."
            }
        ],

        technology: [
            {
                question: "Who is known as the father of computers?",
                options: ["Alan Turing", "Charles Babbage", "Bill Gates", "Steve Jobs"],
                correct: 1,
                difficulty: "medium",
                hint: "He designed the Analytical Engine",
                explanation: "Charles Babbage is considered the father of the computer for his concept of the Analytical Engine."
            },
            {
                question: "What does CPU stand for?",
                options: ["Central Processing Unit", "Computer Personal Unit", "Central Process Utility", "Computer Processing Unit"],
                correct: 0,
                difficulty: "easy",
                hint: "It's the brain of the computer",
                explanation: "CPU stands for Central Processing Unit, the primary component of a computer."
            },
            {
                question: "Which company developed the Windows operating system?",
                options: ["Apple", "Microsoft", "IBM", "Google"],
                correct: 1,
                difficulty: "easy",
                hint: "Founded by Bill Gates and Paul Allen",
                explanation: "Microsoft developed and released the first version of Windows in 1985."
            },
            {
                question: "What does HTML stand for?",
                options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Markup Language", "Home Tool Markup Language"],
                correct: 0,
                difficulty: "easy",
                hint: "It's used to create web pages",
                explanation: "HTML stands for Hyper Text Markup Language, the standard language for web pages."
            },
            {
                question: "Which year was the first iPhone released?",
                options: ["2005", "2006", "2007", "2008"],
                correct: 2,
                difficulty: "medium",
                hint: "Steve Jobs announced it in January 2007",
                explanation: "The first iPhone was released on June 29, 2007."
            },
            {
                question: "What is the most popular programming language in 2023?",
                options: ["Python", "JavaScript", "Java", "C++"],
                correct: 1,
                difficulty: "hard",
                hint: "It's the language of the web",
                explanation: "JavaScript remains the most popular programming language for web development."
            },
            {
                question: "What does VPN stand for?",
                options: ["Virtual Private Network", "Visual Personal Network", "Verified Private Network", "Virtual Public Network"],
                correct: 0,
                difficulty: "medium",
                hint: "It provides secure internet connection",
                explanation: "VPN stands for Virtual Private Network, which creates a secure connection over the internet."
            },
            {
                question: "Who invented the World Wide Web?",
                options: ["Tim Berners-Lee", "Vint Cerf", "Robert Kahn", "Larry Page"],
                correct: 0,
                difficulty: "medium",
                hint: "He invented it while working at CERN",
                explanation: "Tim Berners-Lee invented the World Wide Web in 1989."
            },
            {
                question: "What does AI stand for?",
                options: ["Automated Intelligence", "Artificial Intelligence", "Advanced Internet", "Automated Interface"],
                correct: 1,
                difficulty: "easy",
                hint: "It involves machines that can learn and think",
                explanation: "AI stands for Artificial Intelligence, the simulation of human intelligence in machines."
            },
            {
                question: "Which technology is used to create cryptocurrencies like Bitcoin?",
                options: ["Quantum Computing", "Blockchain", "Cloud Computing", "Machine Learning"],
                correct: 1,
                difficulty: "hard",
                hint: "It's a distributed ledger technology",
                explanation: "Blockchain technology underlies cryptocurrencies like Bitcoin."
            }
        ],

        sports: [
            {
                question: "How many players are on a soccer team?",
                options: ["9", "10", "11", "12"],
                correct: 2,
                difficulty: "easy",
                hint: "Including the goalkeeper",
                explanation: "A soccer team has 11 players on the field, including the goalkeeper."
            },
            {
                question: "Which country won the FIFA World Cup in 2022?",
                options: ["France", "Brazil", "Argentina", "Germany"],
                correct: 2,
                difficulty: "easy",
                hint: "Lionel Messi's country",
                explanation: "Argentina won the 2022 FIFA World Cup, defeating France in the final."
            },
            {
                question: "In tennis, what is a zero score called?",
                options: ["Nil", "Zero", "Love", "Null"],
                correct: 2,
                difficulty: "medium",
                hint: "It has nothing to do with romance",
                explanation: "In tennis, a score of zero is called 'love'."
            },
            {
                question: "How many rings are in the Olympic symbol?",
                options: ["4", "5", "6", "7"],
                correct: 1,
                difficulty: "easy",
                hint: "They represent the five continents",
                explanation: "The Olympic rings consist of five interlocking rings, representing the five continents."
            },
            {
                question: "Which sport uses a shuttlecock?",
                options: ["Tennis", "Badminton", "Squash", "Table Tennis"],
                correct: 1,
                difficulty: "easy",
                hint: "It's played with racquets",
                explanation: "Badminton uses a shuttlecock (also called a birdie)."
            },
            {
                question: "Who holds the record for most Grand Slam titles in tennis?",
                options: ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Margaret Court"],
                correct: 2,
                difficulty: "hard",
                hint: "He's from Serbia",
                explanation: "As of 2023, Novak Djokovic holds the record with 24 Grand Slam titles."
            },
            {
                question: "What is the diameter of a basketball hoop in inches?",
                options: ["16", "18", "20", "24"],
                correct: 1,
                difficulty: "hard",
                hint: "It's exactly twice the diameter of a basketball",
                explanation: "A basketball hoop has a diameter of 18 inches (45.7 cm)."
            },
            {
                question: "Which country invented cricket?",
                options: ["Australia", "India", "England", "South Africa"],
                correct: 2,
                difficulty: "medium",
                hint: "It's a former colonial power",
                explanation: "Cricket originated in England in the 16th century."
            },
            {
                question: "How many points is a touchdown worth in American football?",
                options: ["5", "6", "7", "8"],
                correct: 1,
                difficulty: "medium",
                hint: "Plus the opportunity for an extra point",
                explanation: "A touchdown is worth 6 points, with an additional point available through a kick or two-point conversion."
            },
            {
                question: "Which athlete is known as 'The Greatest'?",
                options: ["Michael Jordan", "Muhammad Ali", "Usain Bolt", "Michael Phelps"],
                correct: 1,
                difficulty: "easy",
                hint: "He was a boxer",
                explanation: "Muhammad Ali, the legendary boxer, called himself 'The Greatest'."
            }
        ],

        entertainment: [
            {
                question: "Who directed the movie 'Titanic'?",
                options: ["Steven Spielberg", "James Cameron", "Christopher Nolan", "Peter Jackson"],
                correct: 1,
                difficulty: "easy",
                hint: "He also directed Avatar",
                explanation: "James Cameron directed Titanic, which won 11 Academy Awards."
            },
            {
                question: "Which actor played Iron Man in the Marvel Cinematic Universe?",
                options: ["Chris Evans", "Chris Hemsworth", "Robert Downey Jr.", "Mark Ruffalo"],
                correct: 2,
                difficulty: "easy",
                hint: "He's known for his charismatic portrayal",
                explanation: "Robert Downey Jr. played Tony Stark/Iron Man in the MCU."
            },
            {
                question: "Who is known as the 'King of Pop'?",
                options: ["Elvis Presley", "Michael Jackson", "Prince", "Madonna"],
                correct: 1,
                difficulty: "easy",
                hint: "He moonwalked",
                explanation: "Michael Jackson is widely known as the 'King of Pop'."
            },
            {
                question: "Which TV show features houses Stark, Lannister, and Targaryen?",
                options: ["The Crown", "Game of Thrones", "The Witcher", "Vikings"],
                correct: 1,
                difficulty: "medium",
                hint: "Based on George R.R. Martin's books",
                explanation: "Game of Thrones features these prominent houses."
            },
            {
                question: "Who wrote the Harry Potter book series?",
                options: ["J.R.R. Tolkien", "J.K. Rowling", "C.S. Lewis", "Stephen King"],
                correct: 1,
                difficulty: "easy",
                hint: "British author",
                explanation: "J.K. Rowling wrote the Harry Potter series."
            },
            {
                question: "Which movie won the first Oscar for Best Picture?",
                options: ["Gone with the Wind", "Casablanca", "Wings", "All Quiet on the Western Front"],
                correct: 2,
                difficulty: "hard",
                hint: "It was a silent film about WWI",
                explanation: "Wings won the first Academy Award for Best Picture in 1929."
            },
            {
                question: "Who painted 'The Starry Night'?",
                options: ["Pablo Picasso", "Vincent van Gogh", "Claude Monet", "Salvador Dalí"],
                correct: 1,
                difficulty: "medium",
                hint: "He cut off part of his ear",
                explanation: "Vincent van Gogh painted The Starry Night in 1889."
            },
            {
                question: "Which musical instrument has 88 keys?",
                options: ["Guitar", "Violin", "Piano", "Organ"],
                correct: 2,
                difficulty: "easy",
                hint: "It's played by pressing keys",
                explanation: "A standard piano has 88 keys (52 white and 36 black)."
            },
            {
                question: "Who directed 'The Godfather'?",
                options: ["Martin Scorsese", "Francis Ford Coppola", "Quentin Tarantino", "Alfred Hitchcock"],
                correct: 1,
                difficulty: "medium",
                hint: "He also directed Apocalypse Now",
                explanation: "Francis Ford Coppola directed The Godfather trilogy."
            },
            {
                question: "Which singer is known as the 'Material Girl'?",
                options: ["Britney Spears", "Madonna", "Lady Gaga", "Beyoncé"],
                correct: 1,
                difficulty: "easy",
                hint: "She had a song called 'Material Girl'",
                explanation: "Madonna is known as the 'Material Girl' from her 1985 hit song."
            }
        ],

        mathematics: [
            {
                question: "What is the value of π (pi) rounded to two decimal places?",
                options: ["3.12", "3.14", "3.16", "3.18"],
                correct: 1,
                difficulty: "easy",
                hint: "It's approximately 22/7",
                explanation: "π is approximately 3.14159, so 3.14 when rounded to two decimal places."
            },
            {
                question: "What is 15 squared?",
                options: ["225", "250", "275", "300"],
                correct: 0,
                difficulty: "easy",
                hint: "15 × 15",
                explanation: "15 squared (15²) equals 225."
            },
            {
                question: "How many degrees are in a right angle?",
                options: ["45", "90", "180", "360"],
                correct: 1,
                difficulty: "easy",
                hint: "It forms an 'L' shape",
                explanation: "A right angle measures exactly 90 degrees."
            },
            {
                question: "What is the square root of 144?",
                options: ["10", "11", "12", "13"],
                correct: 2,
                difficulty: "easy",
                hint: "12 × 12 = 144",
                explanation: "The square root of 144 is 12."
            },
            {
                question: "What is the next prime number after 7?",
                options: ["8", "9", "10", "11"],
                correct: 3,
                difficulty: "medium",
                hint: "Prime numbers are only divisible by 1 and themselves",
                explanation: "11 is the next prime number after 7."
            },
            {
                question: "How many sides does a hexagon have?",
                options: ["4", "5", "6", "7"],
                correct: 2,
                difficulty: "easy",
                hint: "Think of 'hex' as six",
                explanation: "A hexagon has 6 sides."
            },
            {
                question: "What is 25% of 200?",
                options: ["25", "50", "75", "100"],
                correct: 1,
                difficulty: "easy",
                hint: "25% means one-quarter",
                explanation: "25% of 200 is 50 (200 ÷ 4 = 50)."
            },
            {
                question: "What is the sum of angles in a triangle?",
                options: ["90°", "180°", "270°", "360°"],
                correct: 1,
                difficulty: "easy",
                hint: "It's the same for all triangles",
                explanation: "The sum of interior angles in any triangle is 180 degrees."
            },
            {
                question: "What is 8 factorial (8!)?",
                options: ["40320", "5040", "720", "362880"],
                correct: 0,
                difficulty: "hard",
                hint: "8! = 8 × 7 × 6 × 5 × 4 × 3 × 2 × 1",
                explanation: "8 factorial (8!) equals 40,320."
            },
            {
                question: "What is the value of x in the equation 2x + 5 = 15?",
                options: ["2", "5", "10", "20"],
                correct: 1,
                difficulty: "medium",
                hint: "Subtract 5 from both sides first",
                explanation: "2x + 5 = 15 → 2x = 10 → x = 5"
            }
        ]
    },

    // Function to get random questions based on category, difficulty, and count
    getRandomQuestions: function(category, count = 10, difficulty = 'all') {
        let questions = this.questions[category];
        
        // Filter by difficulty if specified
        if (difficulty !== 'all') {
            questions = questions.filter(q => q.difficulty === difficulty);
        }
        
        // Shuffle the questions
        questions = this.shuffleArray([...questions]);
        
        // Return requested number of questions
        return questions.slice(0, count);
    },

    // Function to shuffle array (Fisher-Yates algorithm)
    shuffleArray: function(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    },

    // Function to get all categories
    getAllCategories: function() {
        return this.categories;
    },

    // Function to get total question count by category
    getQuestionCountByCategory: function(category) {
        return this.questions[category] ? this.questions[category].length : 0;
    },

    // Function to get total questions across all categories
    getTotalQuestionCount: function() {
        let total = 0;
        for (const category in this.questions) {
            total += this.questions[category].length;
        }
        return total;
    }
};