//1. First question
//  a. This resembles constant time – 0(1) in that you're getting a specific value without performing a full search
//  b. This is essentially a FOR loop, and thus linear time, O(n).

//2. Constant time, or O(1): The function performs a single operation, regardless of the size of the number inserted.

//3. Polynomial/ 0(n^k): A for loop within a for loop compares one set of data, individually, against another, individually.

//4. O(n)/Linear time: The data is being run through and altered once, which linearly increases its runtime.

//5. Again, this is linear time: Each element in the array linearly increases its run time.

//6. Polynomial/ 0(n^k): One FOR loop is run within another, which means the time is dependent on the length of one array times the next.

//7. This function computes a Fibonacci sequence out to a certain length. It's 0(n)/linear time.

//8. This is O(log(n)), or logarithmic time, as the amount of data being searched is halved each time, meaning it runs more slowly than
//  constant but less efficiently than linear.

//9. O(1) or constant: this algorithm performs a single operation, and the length of the info submitted is irrelevant.

//10. After establishing that the number is whole and at least 2, the function runs a FOR loop through all the numbers leading up to the
//input, finally returning FALSE if it's composite and TRUE if it's prime. In a worst-case scenario, the number of ticks increases with
//the input number, thus this is O(n)/Linear.

//11.

  let towerOfHanoi = {
    firstTower: [],
    secondTower: [],
    thirdTower: [],
  };
  
  let ticks = 0
  
  function setUpTower(discNum){
    
    
    for(let i = discNum; i > 0; i --){
      towerOfHanoi.firstTower.push(i)
    }
    
    console.log(towerOfHanoi.firstTower, towerOfHanoi.secondTower, towerOfHanoi.thirdTower)
    
    moveDiscs(discNum, towerOfHanoi.firstTower, towerOfHanoi.secondTower, towerOfHanoi.thirdTower)
    
    function moveDiscs(discNum, firstTower, secondTower, thirdTower){
      ticks ++;
      if(discNum > 0){
        moveDiscs(discNum - 1, firstTower, thirdTower, secondTower)
        let movingDisc = firstTower.pop()
        thirdTower.push(movingDisc)
        console.log(towerOfHanoi.firstTower, towerOfHanoi.secondTower, towerOfHanoi.thirdTower)
        moveDiscs(discNum - 1, secondTower, firstTower, thirdTower)
      }
    }
  }
   setUpTower(4)
  console.log(ticks)
}
// c. [ 5, 4 ] [] [ 3, 2, 1 ]
//  d. Roughly 15, 30 and 60, respectively.
//  e. Would appear to be Polynomial time O(n^k), based on the fact that it doubles for every addition.

//12./14.

function countingSheep(input){
  let output = ''
  for(let i = input; i >= 0; i --){
    if(i === 0){output += 'All the sheep jumped over the fence.'}
    else{output += (`${i}: Another sheep jumped over the fence. `)}
  }
  return output
}

console.log(countingSheep(3))



function powerCalculator(base, exponent){
  let output = base
  for(let i = 1; i < exponent; i ++){
    output *= base
  }
  return output
}

console.log(powerCalculator(3, 4))



function stringReverser(string){
  let reversed = ''
  for(let i = string.length - 1; i >= 0; i --){
    reversed += string[i]
  }
  return reversed
}

console.log(stringReverser('internet'))



function triangularNumber(num){
  let returnNum = 0
  for(let i = num; i > 0; i --){
    returnNum += i
  }
  return returnNum
}
console.log(triangularNumber(5))



function stringSplitter(string, split){
  let returnArr = []
  let currentString = ''
  for(let i = 0; i <= string.length; i ++){
    if(string[i] == split || i  === string.length){
      returnArr.push(currentString);
      currentString = ''
    } else {
      currentString += string[i]
    }
  } return returnArr
}

console.log(stringSplitter('02/10/1991', '/'))



function fibonacci(num){
  let fibonacciArray = [1, 1]
  for(let i = 0; i < num - 2; i ++){
    let newFib = fibonacciArray[i] + fibonacciArray[i + 1]
    fibonacciArray.push(newFib)
  } return fibonacciArray
}
console.log(fibonacci(10))



function factorial(num){
  let returnNum = num
  for(let i = num - 1; i > 0; i --){
    returnNum *= i
  } return returnNum
}

console.log(factorial(5))

//13-14. All of these – iterative AND recursive – appeared to be O(n)/Linear time, as they each iterate through a list once, whether
//that iteration is accomplished via a FOR loop or through repeatedly calling the function.

