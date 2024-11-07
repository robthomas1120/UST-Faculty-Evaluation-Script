const elements = document.querySelectorAll('li[onclick*="4"] span.ratingvalue');

elements.forEach(element => {
  // Check if the text content of the span element is actually "4"
  if (element.textContent === '4') {
    const parentLI = element.parentElement;
    parentLI.click(); // Click the parent <li> element
  }
});


const radioButtons = document.querySelectorAll('input[type="radio"][value="4"]');

radioButtons.forEach(radioButton => {
  radioButton.checked = true;
});

const commentsTextArea = document.getElementById('comments');
if (commentsTextArea) {
  commentsTextArea.value = "Good Professor";
  console.log("Filled textarea with text 'Good Professor'.");
} else {
  console.log("Textarea element with ID 'tncomments' not found.");
}