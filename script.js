function calculateScore() {
    let total = 0;
    const form = document.getElementById('quizForm');

    for (let i = 1; i <= 10; i++) {
        total += parseInt(form['q'+i].value);
    }

    localStorage.setItem('stressScore', total);

    // Show mini score message for 1.5 seconds before redirect
    const resultDiv = document.createElement('div');
    resultDiv.textContent = "Your Stress Score: " + total;
    resultDiv.style.position = "fixed";
    resultDiv.style.top = "20px";
    resultDiv.style.left = "50%";
    resultDiv.style.transform = "translateX(-50%)";
    resultDiv.style.padding = "15px 25px";
    resultDiv.style.backgroundColor = "#3e6f3e";
    resultDiv.style.color = "white";
    resultDiv.style.borderRadius = "10px";
    resultDiv.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
    document.body.appendChild(resultDiv);

    setTimeout(() => {
        window.location.href = "tips.html";
    }, 1500); // 1.5 seconds delay
}
