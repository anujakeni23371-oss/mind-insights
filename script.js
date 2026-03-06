function calculateScore() {
  const form = document.getElementById('quizForm');

  let total = 0;
  for (let i = 1; i <= 10; i++) {
    total += parseInt(form['q' + i].value);
  }

  let level = '';
  let tips = '';

  if (total <= 10) {
    level = 'Low Stress';
    tips = 'Keep up your healthy habits!';
  } else if (total <= 20) {
    level = 'Moderate Stress';
    tips = 'Try some relaxation techniques daily, like deep breathing or short breaks.';
  } else {
    level = 'High Stress';
    tips = 'Consider talking to a counselor or practicing mindfulness regularly.';
  }

  document.getElementById('result').innerHTML = `
    <p>Your Stress Level: <strong>${level}</strong></p>
    <p>Tips: ${tips}</p>
  `;
}
