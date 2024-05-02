// Quiz data
const quizData = [
    {
        question: "What does HTML stand for, and what is its primary purpose?",
        options: ["Hypertext - structuring", "Hypertext - styling", "Hypertext - scripting", "Hypertext - animating"],
        answer: "Hypertext - structuring"
    },
    {
        question: "How do you create a hyperlink in HTML?",
        options: ["<link>", "<a>", "<hyperlink>", "<link>"],
        answer: "<a>"
    },
    {
        question: "What is the purpose of CSS in web development?",
        option: ["Structure", "Interactivity", "Styling", "Operations"],
        answer: "Styling"
    },
    {
        question: "Explain the difference between inline CSS and external CSS?",
        option: ["Inline - HTML, external - file", "Inline - specific, external - global", " Inline - large, external - small", "Inline - all, external - modern"],
        answer: "Inline - specific, external - global"
    },  {
        question: "What is the default display property for HTML elements?",
        option: [" block", "inline", "flex", "grid"],
        answer: "block"
    },  {
        question: "How do you center an element horizontally in CSS?",
        option: [" text-align", "align-content", "margin", "justify-content"],
        answer: "margin"
    },  {
        question: "What is the box model in CSS, and what are its components?",
        option: ["Layout - content, style, behavior", " Structure - elements, attributes, values", "Design - content, padding, border, margin", "Positioning - absolute, relative, fixed, sticky"],
        answer: "Design - content, padding, border, margin"
    },  {
        question: "Describe the difference between padding and margin in CSS?",
        option: ["Padding - inside, margin - outside", "Padding - outside, margin - inside", "Padding - vertical, margin - horizontal", "Padding - horizontal, margin - vertical"],
        answer: "Padding - inside, margin - outside"
    },  {
        question: "How do you include a CSS file in an HTML document?",
        option: ["<style>", "<link>", "<css>", " <include>"],
        answer: " <link>"
    },  {
        question: "What are HTML semantic elements, and why are they important for SEO and accessibility?",
        option: ["Styling - speed", "Scripting - engagement", "Meaning - SEO/accessibility", " Layout - appeal"],
        answer: "Meaning - SEO/accessibility"
    },
    // Add more questions here...

];

let currentQuestion = 0;
let score = 0;

function startQuiz() {
    const name = document.getElementById('name').value;
    const className = document.getElementById('class').value;
    
    if (name && className) {
        document.getElementById('studentDetails').style.display = 'none';
        document.getElementById('quiz').style.display = 'block';
        displayQuestion();
    } else {
        alert('Please enter your name and class.');
    }
}

function displayQuestion() {
    const quizContainer = document.getElementById('quiz');
    const currentQuiz = quizData[currentQuestion];

    if (currentQuiz) {
        const questionHTML = `
            <h2>Question ${currentQuestion + 1}:</h2>
            <p>${currentQuiz.question}</p>
            <form id="quizForm">
                ${currentQuiz.options.map((option, index) => `
                    <label>
                        <input type="radio" name="answer" value="${option}">
                        ${option}
                    </label>
                `).join('')}
            </form>
            <button onclick="checkAnswer()">Next</button>
        `;
        quizContainer.innerHTML = questionHTML;
    } else {
        showResult();
    }
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
        if (selectedOption.value === quizData[currentQuestion].answer) {
            score++;
        }
        currentQuestion++;
        displayQuestion();
    } else {
        alert('Please select an option.');
    }
}

function showResult() {
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = `
        <h2>Quiz Result</h2>
        <p>Name: ${document.getElementById('name').value}</p>
        <p>Class: ${document.getElementById('class').value}</p>
        <p>Score: ${score}/${quizData.length}</p>
    `;
    document.getElementById('quiz').style.display = 'none';
    resultContainer.style.display = 'block';
}