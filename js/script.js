const form = document.getElementById('registration-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  // Create a new CSV row
  const newRow = `${name},${email},${phone}\n`;

  // Append the new row to the CSV file
  fetch('data/registrations.csv', {
    method: 'POST',
    headers: {
      'Content-Type': 'text/csv'
    },
    body: newRow
  })
  .then((response) => response.text())
  .then((data) => console.log(`Data saved: ${data}`))
  .catch((error) => console.error(`Error: ${error}`));
});
