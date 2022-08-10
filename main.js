// Select all question content
const questions = document.querySelectorAll('.content');

// Loop over each content to add event listeners.
questions.forEach((content) => {
  // Select plus button in content
  const btnPlus = content.querySelector('.btn-plus');
  // Add event listener to plus button that will remove show-text class to all
  // content on page, then toggle show-text for given content.
  btnPlus.addEventListener('click', () => {
    questions.forEach(question => {
      question.classList.remove('show-text');
    });
    content.classList.toggle('show-text');
  });

  // Select minus button in content
  const btnMinus = content.querySelector('.btn-minus');
  // Add event listener to minus button that will hide question text.
  btnMinus.addEventListener('click', () => {
    content.classList.toggle('show-text');
  });
});