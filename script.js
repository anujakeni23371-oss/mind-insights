function calculateScore() {
    let total = 0;
    const form = document.getElementById('quizForm');

    // Add up scores from all 10 questions
    for (let i = 1; i <= 10; i++) {
        total += parseInt(form['q'+i].value);
    }

    // Optional: save score to show tips later
    localStorage.setItem('stressScore', total);

    // Redirect to Tips page
    window.location.href = "tips.html";
}
