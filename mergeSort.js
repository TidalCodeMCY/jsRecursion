// Everything will be nested in this function based on the instructions received.
function mergeSort(array){
   // check the length if its 1 or less return the array
   if(array.length < 2){
    return array;
   }

   // Get the middle of the array and splice it in half saving each half to the left or right.
   const mid = Math.floor(array.length/2);
   const left = array.slice(0,mid);
   const right = array.slice(mid)
   // Return the merge or the mergesort to recursively build a new array.
   return merge(mergeSort(left), mergeSort(right));
};

function merge(left,right){
    //Make a new array
    const sorted = [];
    // Compare lengths if they are certain amounts then do something
    while(left.length && right.length){
        // Check if left array is less than or equal to the right array.
        if (left[0] <= right[0]){
            sorted.push(left.shift());
        }else{
            sorted.push(right.shift());
        }
    }
    // return the sorted array and check if the left has leftovers and if it does copy and check if the right has leftovers and of it does copy it.
    return [...sorted,...left,...right];
};

console.log(mergeSort([199,93,19,7,164]));