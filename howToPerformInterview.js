/* write a function called same
accepts two arrays 
should return true if every value in the corresponding array is squared in the second array. The frequency of values must also be the same.
*/

// REACT

// READ it fully.

///EXAMPLE ,[1, 2, 3, 4, 3] -> [1, 4, 9, 16, 9]//true 
// [1,2,3] :: [4,1,9] true
// 1,2,3 :: 1,9 true
// 1,2 :: 1, 4, 3 => false (if this does this, then theory false)
//1, 2, 3 :: 2, 3, 4
// 1,2,1 :: 4, 4, 1 => false ***
// 1, 2, 2, 1, 1 :: 1, 1, 2 => false
//    ^
// 1,2 :: 1,4,3  false
// ^

//APPROACH
/*
keys 1, 4
cnts 1, -1  if current key value < 0
*/

// CODE
// create function called same takes1 2 params (arr1, arr2)
function same(arr1, arr2) {
  
  // create a helper hash from the second array (frequency counter hash),
  let helperHash = createHelperHash(arr1, arr2);

  if (!helperHash) {
    return false;
  }
  // loop through my first array
  for (let i = 0; i < arr1.length; i++) {    
    // if key exists in second array helper hash,
    const currentKeyValue = arr1[i] ** 2;
    if (helperHash[currentKeyValue] || helperHash[currentKeyValue] === 0) {
      // subtract 1 to the value of the key
      helperHash[currentKeyValue]--;
      // if current key value < 0
      if (helperHash[currentKeyValue] < 0) {
        //return false
        // console.log(currentKeyValue, helperHash, '1')
        return false;
      }
    // if key does not exists in second array helper hash,
    } 
  // end loop
  }

  //return true
  // console.log( helperHash, '3')

  return true;
// end function
}

//create helper hash
function createHelperHash (arr1, arr2) {
  let helperHash = {};
  for (let i = 0; i < arr2.length; i++) {
    if (helperHash[arr2[i]]) {
      helperHash[arr2[i]]++;
    } else {
      if (arr1.includes(Math.sqrt(arr2[i]))) {
        helperHash[arr2[i]] = 1;
      } else {
        return false;
      }
    }
  }
  return helperHash;
}

console.log(same([1, 2, 2, 1, 1], [1, 1, 2]))

///EXAMPLE ,[1, 2, 3, 4, 3] -> [1, 4, 9, 16, 9]//true 
// [1,2,3] :: [4,1,9] true
// 1,2,3 :: 1,9 true
// 1,2 :: 1, 4, 3 => false (if this does this, then theory false)
//1, 2, 3 :: 2, 3, 4
// 1,2,1 :: 4, 4, 1 => false ***
// 1, 2, 2, 1, 1 :: 1, 1, 2 => false

// TEST (REACT)
//const {log} = console;
//const examples = [
//  [ [1,2,3],[1,9] ],
//  [ [1,2,3], [4,1,9]]
//];
//
//examples.forEach((example, idx) => {
//  log(example);
//  log(same(...example), ':' + idx)
//})
//
//// pramp.io
//
//
//
//function createHelperHash2(nums) {
//    return nums.reduce((accum, item) => {
//       accum[item] = accum[item] ? ++accum[item]: 1;
//       return accum;
//    },{})
//}