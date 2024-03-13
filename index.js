document.addEventListener("DOMContentLoaded", function() {
    const toggleButtons = document.querySelectorAll(".toggle-btn");
  
    toggleButtons.forEach(button => {
      button.addEventListener("click", function() {
        const answer = this.parentNode.previousElementSibling.querySelector('.answer'); // Get the answer paragraph
        answer.classList.toggle("show"); // Toggle the "show" class to display/hide the answer
        
        // Change the button text from + to -
        if (this.textContent === '+') {
          this.textContent = '-';
          this.classList.add('minus');
        } else {
          this.textContent = '+';
          this.classList.remove('minus');
        }
      });
    });
  });
  
