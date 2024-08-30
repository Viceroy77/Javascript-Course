function check() {
   const buttonElement = document.querySelector('.js-button');

   if (buttonElement.classList.contains('js-button'))
    {
        console.log('It contains the js-button class')
        console.log(buttonElement.classList.contains('js-button'));
    };
   
}


function toggle() {
    let Gaming = document.querySelector('.toggle-button');
    if (!Gaming.classList.contains('is-toggled')) {
        Gaming.classList.add('is-toggled');
    } else {
        Gaming.classList.remove('is-toggled');
    }
}

function buttons() {
    let Gaming = document.querySelector('.Gaming');
    if (!Gaming.classList.contains('is-toggled')) {
        Gaming.classList.add('is-toggled');
    } else {
        Gaming.classList.remove('is-toggled');
    }
}

function buttons() {
    let Gaming = document.querySelector('.Gaming');
    if (!Gaming.classList.contains('is-toggled')) {
        Gaming.classList.add('is-toggled');
    } else {
        Gaming.classList.remove('is-toggled');
    }
}

function buttonss() {
    let Gaming = document.querySelector('.Music');
    if (!Gaming.classList.contains('is-toggled')) {
        Gaming.classList.add('is-toggled');
    } else {
        Gaming.classList.remove('is-toggled');
    }
}

function buttonsss() {
    let Gaming = document.querySelector('.Tech');
    if (!Gaming.classList.contains('is-toggled')) {
        Gaming.classList.add('is-toggled');
    } else {
        Gaming.classList.remove('is-toggled');
    }
}

//10f
function toggleButton(selector) {
    const button = document.querySelector(selector);
    if (!button.classList.contains('is-toggled1')) {
  
      // Before turning this button ON, check if there's
      // already a button that's turned ON and turn it OFF.
      turnOffPreviousButton();
  
      button.classList.add('is-toggled1');
    } else {
      button.classList.remove('is-toggled1');
    }
  }
  
  function turnOffPreviousButton() {
    const previousButton = document.querySelector('.is-toggled1');
    if (previousButton) {
      previousButton.classList.remove('is-toggled');
    }
  }