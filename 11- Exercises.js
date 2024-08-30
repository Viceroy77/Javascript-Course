
//11a
const nums = [10, 20, 30]
nums[2] = 99
console.log(nums);

//11b
const getLast = [1,20,22,24,5];
const lastIndex = getLast.length - 1;
function getLastValue() {lastIndex ;
return getLast[lastIndex];
}
console.log(getLastValue(getLast));

//11c
const arrayToswap = [1,20,22,24,5];
function arraySwap(array) {
arrayToswap
const lastValue = array[lastIndex];
const firstValue = array[0];

array[0] = lastValue;
array[lastIndex] = firstValue;

return array;

}
console.log(arraySwap(arrayToswap));
console.log(arraySwap(['hi', 'hello', 'good']));

//11d
for(let i = 0; i <= 10; i +=2 ) {
console.log(i); 
}

//11e
for ( let i = 5; i >= 0; i--) {
    console.log(i); 
}

//11f
let i = 0;
while (i <= 10) {
console.log(i);
i +=2;
}

 i = 5;
while ( i>= 0) {
    console.log(i);
    i--;
}

//11g
const array = [1, 2, 3];
const result = [];

for(i = 0; i < array.length; i++) {
    result.push(array[i] + 1)

}
console.log(result);

//11h



function addOne (arrays) {
    let added = [];

    for (let i = 0; i< arrays.length; i++) {
   const increased = added.push(arrays[i] + 1);
    }
    return added;
}
console.log(addOne([1,2,3]));
console.log(addOne([-2, -1, 0, 99]));


//11i

function addNum (array, num) {
    const addedNum = []
    for (let i = 0; i< array.length; i++) {
       const arrayPlusNum = addedNum.push(array[i] + num)
    }
    return addedNum;
}
console.log(addNum ([1,2,3], 2));
console.log(addNum ([1,2,3], 3));

//11j
function addArrays(array1, array2) {
    const addTogether = [];
    for (let i = 0; i < array1.length; i++) {
        addTogether.push(array1[i] + array2[i])
    }
    return addTogether;
}
console.log(addArrays([1, 1, 2], [1, 1, 3]));

//11k
function countPositive (nums) {
    let positiveNums = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            positiveNums++
        }
    }
    return positiveNums;
}
console.log(countPositive([1, -3, 5]));
console.log(countPositive([-2, 3, -5, 7, 10]));

//11l
    function minMax(nums) {
    // We'll set the starting values of min and max
    // as the first value in the array. (This is
    // just one way to set the starting values. You
    // can use another way if you like.)
    const result = {
        min: nums[0],
        max: nums[0]
    };

    for (let i = 0; i < nums.length; i++) {
        const value = nums[i];

        // If the value is less than the min,
        // update the min.
        if (value < result.min) {
        result.min = value;
        }

        // If the value is greater than the max,
        // update the max.
        if (value > result.max) {
        result.max = value;
        }
    }

    return result;
    }

    console.log(minMax([1, -3, 5]));
    console.log(minMax([-2, 3, -5, 7, 10]));

    //11m
    function minMax(nums) {
    // We'll set the starting values of min and max
    // to null this time.
    const result = {
        min: null,
        max: null
    };

    for (let i = 0; i < nums.length; i++) {
        const value = nums[i];

        // If the min is null OR the value is
        // less than the min, update the min.
        if (result.min === null || value < result.min) {
        result.min = value;
        }

        // If the max is null OR the value is
        // greater than the max, update the max.
        if (result.max === null || value > result.max) {
        result.max = value;
        }

        // We have to use 2 if-statements above instead of
        // an if-else statement. This makes sure both the
        // min and max are set if they are null.
    }

    return result;
    }

    console.log(minMax([1, -3, 5]));
    console.log(minMax([-2, 3, -5, 7, 10]));

    console.log(minMax([]));
    console.log(minMax([3]));

    //11n
    function countWords(words) {
        const result = {};

        for (let i = 0; i < words.length; i++) {
          const word = words[i];

          // result[word] adds/accesses a property using whatever is
          // saved inside the 'word' variable.
          // If word = 'apple', result[word] will do result['apple']
          // If word = 'grape', result[word] will do result['grape']
          if (!result[word]) {
            result[word] = 1;
          } else {
            result[word]++;
          }
        }

        return result;
      }

      console.log(countWords(['apple', 'grape', 'apple', 'apple']));

      //11o
        let array4 = ['hello', 'world', 'search', 'good'];
        let array5 = -1;
       
        for (let i = 0; i < array4.length; i++) {
            if (array4[i] ==='search') {
                array5 = i;
            }
        }
        console.log(array5);

        let array6 = ['not', 'found'];
        let array7 = -1;

        for (let i = 0; i < array6.length; i++) {
            if (array6[i] === 'search')
                array7 = i;
        }
        console.log(array7);

        //11p
        let array8 = ['hello', 'world', 'search', 'good', 'search'];
        let array9 = -1;
       
        for (let i = 0; i < array8.length; i++) {
            if (array8[i] ==='search') {
                array9 = i
                break;
            }
    
        }
        console.log(array9);

        //11q
       /* function findIndex(array, word) {
            let arrayDefault = -1;
            for ( let i = 0; i < array.length; i++){
                if (array[i] === word) {
                    arrayDefault = i;
                    break;
                }
            }
        }
       console.log(findIndex(['green', 'red', 'blue', 'red',], 'red'))
       ;
       */

       function findIndex(array, word) {
        for (let i = 0; i < array.length; i++) {
          if (array[i] === word) {
            // Instead of creating an accumulator
            // variable and updating it in the loop,
            // we can just return i directly, when
            // we find it since this is a function.
            return i;
          }
        }

        // If the function has not returned by now,
        // logically that means the word must not
        // exist in the array, so we'll return -1.
        return -1;
      }

      console.log(findIndex(['green', 'red', 'blue', 'red',], 'red')); 

      //11r
      function removeEgg (foods) {

        const result = []
        for ( let i =0; i < foods.length; i++) {
            if (foods[i] === 'egg') {
                continue;
            }
            result.push(foods [i]);
        }
        return result;
      }
      console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));

      //11s
      function removeEggg(foods) {
        const result = [];
        let eggsRemoved = 0;

        for (let i = 0; i < foods.length; i++) {
          // Only skip 'egg' if we removed less than 2
          // of them so far.
          if (foods[i] === 'egg' && eggsRemoved < 2) {
            // Update the number of 'egg' we have removed.
            // This must be done before continue, otherwise,
            // doing continue first will just skip this code.
            eggsRemoved++;
            continue;
          }

          result.push(foods[i]);
        }

        return result;
      }

      console.log(removeEggg(['egg', 'apple', 'egg', 'egg', 'ham']));

      //11t
      function removeEgggg(foods) {
        // To remove the last 2 'egg', reverse the array first.
        const reversedFoods = foods.reverse();

        const result = [];
        let eggsRemoved = 0;

        for (let i = 0; i < reversedFoods.length; i++) {
          if (reversedFoods[i] === 'egg' && eggsRemoved < 2) {
            eggsRemoved++;
            continue;
          }

          result.push(reversedFoods[i]);
        }

        // At the end, remember to .reverse() back the result.
        return result.reverse();
      }

      console.log(removeEgggg(['egg', 'apple', 'egg', 'egg', 'ham']));

      //11u
      function removeEgggg(foods) {
        // To prevent modifying the original array, we
        // can create a copy of the array using .slice()
        const foodsCopy = foods.slice();
        const reversedFoods = foodsCopy.reverse();

        // Advanced technique:
        // Since foods.slice() results in an array, we
        // can also use .reverse() directly like this:
        // foods.slice().reverse();
        
        // This technique is called "method chaining"
        // because we use one method after another
        // (like a chain of methods).
        const result = [];
        let eggsRemoved = 0;

        for (let i = 0; i < reversedFoods.length; i++) {
          if (reversedFoods[i] === 'egg' && eggsRemoved < 2) {
            eggsRemoved++;
            continue;
          }

          result.push(reversedFoods[i]);
        }

        return result.reverse();
      }

      const foods = ['egg', 'apple', 'egg', 'egg', 'ham'];
      console.log(removeEgggg(foods));
      console.log(foods);

      //11v
      for (let i = 1; i <= 20; i++) {
        
        if (i % 3 === 0 && i % 5 === 0) {
          console.log('FizzBuzz');

        } else if (i % 3 === 0) {
          console.log('Fizz');

        } else if (i % 5 === 0) {
          console.log('Buzz');
          
        } else {
          console.log(i);
        }
      }

      //11w
      function findIndex(array, word) {
        for (let i = 0; i < array.length; i++) {
          if (array[i] === word) {
            // Instead of creating an accumulator
            // variable and updating it in the loop,
            // we can just return i directly, when
            // we find it since this is a function.
            return i;
          }
        }

        // If the function has not returned by now,
        // logically that means the word must not
        // exist in the array, so we'll return -1.
        return -1;
      }

      function unique (array) {
        const result = [];
        for (let i = 0; i< array.length; i++)
        {
            const word = array[i];
           
              // Using the findIndex() function from above, we
          // can check if the string is already in the
          // result array. If it's not in the result array
          // (index is -1), then add it to the result array.
          if (findIndex(result, word) === -1) {
            result.push(word);
        }
      }
        return result;
    }
        console.log(unique(['green', 'red', 'blue', 'red']));
        console.log(unique(['red', 'green', 'green', 'red']));