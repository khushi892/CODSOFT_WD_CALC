document.addEventListener('DOMContentLoaded', (event) => {
    const inputBox = document.getElementById('inputbox');
    const buttons = document.querySelectorAll('button');
    let currentInput = '';
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const buttonText = button.textContent;
  
        if (button.classList.contains('operator')) {
          handleOperator(buttonText);
        } else if (button.classList.contains('equalBtn')) {
          handleEqual();
        } else if (button.classList.contains('ac')) {
          clearInput();
        } else if (button.classList.contains('del')) {
          deleteLastChar();
        } else {
          handleNumber(buttonText);
        }
      });
    });
  
    function handleOperator(operator) {
      if (operator === 'AC') {
        clearInput();
      } else if (operator === 'DEL') {
        deleteLastChar();
      } else if (currentInput !== '') {
        currentInput += ` ${operator} `;
        updateInputBox();
      }
    }
  
    function handleEqual() {
      try {
        currentInput = eval(currentInput.replace(/[^-()\d/*+.]/g, ''));
        updateInputBox();
      } catch (e) {
        currentInput = 'Error';
        updateInputBox();
        currentInput = '';
      }
    }
  
    function handleNumber(number) {
      currentInput += number;
      updateInputBox();
    }
  
    function clearInput() {
      currentInput = '';
      updateInputBox();
    }
  
    function deleteLastChar() {
      currentInput = currentInput.trim().slice(0, -1);
      updateInputBox();
    }
  
    function updateInputBox() {
      inputBox.value = currentInput;
    }
  });
  