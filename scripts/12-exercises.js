//12a
let add = function () {
    console.log(2+3);
}
add()
add()

//12b 
function runTwice (fun) {
   fun ();
   fun ();
}
runTwice(function() {
    console.log('12b');
});

runTwice(add);

/*
//12c
function timeout() {
    const button = document.querySelector('.timeout');

    setTimeout( () => {
      button.innerHTML = 'Finished!';
    }, 1000);
  }

  //12d
  function timingout() {
    const button1 = document.querySelector('.timingout');

    button1.innerHTML = 'loading...';
    setTimeout( () => {
      button1.innerHTML = 'Finished!';
    }, 1000);
  }

  //12e
  function addToCart() {
    const Info1 = document.querySelector('.info')

    Info1.innerHTML='Added'
    setTimeout ( () => {
        Info1.innerHTML='';
    }, 2000);
  }

  //12f
  let timeoutId;

  function displayMessage() {
    const messageElement = document.querySelector('.js-message');
    messageElement.innerHTML = 'Added';

    // First, cancel the previous timeout so that
    // it doesn't remove the message too quickly.
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() =>{
      messageElement.innerHTML = '';
    }, 2000);
  }

  //12g
  /*
  setInterval(() => {
    if (document.title === 'App') {
      document.title = '(2) New messages';
    } else {
      document.title = 'App';
    }
  }, 1000);
  

  //12h
  let messages = '';
  function addMessage() {
    messages++
  }

  function removeMessage() {
    messages--
  }
  
  setInterval(() => {
    if (document.title === 'App') {
      document.title = `(${messages}) New messages`;
    } else {
      document.title = 'App';
    }
  }, 1000);

//12i

let message = '';
// Save the intervalId in case we need to cancel it.
let intervalId;

// We'll use this variable to keep track of whether
// or not we're displaying the notification.
let isDisplayingNotification;

// Start displaying the notification in the tab
// when the page first loads.
displayNotification();

function displayNotification() {
    // If we're already displaying the notification,
    // stop this function because we don't want to
    // create 2 intervals at the same time.
    if (isDisplayingNotification) {
      return;
    }

    isDisplayingNotification = true;

    intervalId = setInterval(() => {
      if (document.title === 'App') {
        document.title = `(${message}) New messages`;
      } else {
        document.title = 'App';
      }
    }, 1000);
  }

  function stopNotification() {
    isDisplayingNotification = false;

    clearInterval(intervalId);
    document.title = 'App';
  }

  */
  
  //12j
  let multiply = (one, two) => {
    return one * two;
  }

  console.log(multiply(2, 3));
  console.log(multiply(7, 10));

  //12k
  multiply = (one, two) =>  one * two;
  
  console.log(multiply(2, 3));
  console.log(multiply(7, 10));

  //12l
  function countPositive (nums) {
    let positiveNumbers = 0;

    nums.forEach((num) => {
      if ( num > 0) {
        positiveNumbers++;
      }
    });

    return positiveNumbers;
  }

  console.log(countPositive([1, -3, 5]));
  console.log(countPositive([-2, 3, -5, 7, 10]));

  //12m
  function addNum (array, num) {


    return  array.map ((digit) => 
   digit + num) ;
  }

 console.log(addNum([1,2,3], 2)); 

 //12n
 function removeEgg (foods) {
 

  return  foods.filter ((food) => food !=='egg') ;

  
 }

 console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));

//12o

function removeEggg (foods) {
 
  let eggsRemoved = 0;
  return foods.filter((food) => {
    // If the food is 'egg', we should return false
    // but only if we haven't removed 2 eggs already.
    if (food === 'egg' && eggsRemoved < 2) {
      eggsRemoved++;
      return false;
    }

    return true;
  });
}

console.log(removeEggg(['egg', 'apple', 'egg', 'egg', 'ham']));

//12p 
//12c

  document.querySelector('.timeout').addEventListener('click', () => {
   const button = document.querySelector('.timeout')
  

  setTimeout( () => {
    button.innerHTML = 'Finished!';
  }, 1000);
});

//12d

  const button1 = document.querySelector('.timingout');

  button1.addEventListener('click', () => {

    button1.innerHTML = 'loading...';
  setTimeout( () => {
    button1.innerHTML = 'Finished!';
  }, 1000);
  })
  


//12e

  document.querySelector('.cart').addEventListener ('click', () =>{
    const Info1 = document.querySelector('.info')

    Info1.innerHTML='Added'
    setTimeout ( () => {
        Info1.innerHTML='';
    }, 2000);
  
  });

 

//12f
let timeoutId;

document.querySelector('.cart1').addEventListener ('click', () =>  {
   const messageElement = document.querySelector('.js-message');
  messageElement.innerHTML = 'Added';

  // First, cancel the previous timeout so that
  // it doesn't remove the message too quickly.
  clearTimeout(timeoutId);

  timeoutId = setTimeout(() =>{
    messageElement.innerHTML = '';
}, 2000);
 });
  


//12g
/*
setInterval(() => {
  if (document.title === 'App') {
    document.title = '(2) New messages';
  } else {
    document.title = 'App';
  }
}, 1000);
*/

//12h
let messages = '';
function addMessage() {
  messages++;
}

function removeMessage() {
  messages--;
}

document.querySelector('.add').addEventListener('click', addMessage);
document.querySelector('.remove').addEventListener('click', removeMessage);

setInterval(() => {
  if (document.title === 'App') {
    document.title = `(${messages}) New messages`;
  } else {
    document.title = 'App';
  }
}, 1000);

//12i

let message = '';
// Save the intervalId in case we need to cancel it.
let intervalId;

// We'll use this variable to keep track of whether
// or not we're displaying the notification.
let isDisplayingNotification;

// Start displaying the notification in the tab
// when the page first loads.
displayNotification();

function displayNotification() {
  // If we're already displaying the notification,
  // stop this function because we don't want to
  // create 2 intervals at the same time.
  if (isDisplayingNotification) {
    return;
  }

  isDisplayingNotification = true;

  intervalId = setInterval(() => {
    if (document.title === 'App') {
      document.title = `(${message}) New messages`;
    } else {
      document.title = 'App';
    }
  }, 1000);
}

function stopNotification() {
  isDisplayingNotification = false;

  clearInterval(intervalId);
  document.title = 'App';
}

