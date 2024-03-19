function fibs(num) {
    let steps = num;
    let builtArray = [];
    let prevNum = 0;
    let currNum = 0;
    let nextNum = 1;
    while(steps > 0) {
        builtArray.push(currNum);
        prevNum = currNum;
        currNum = nextNum;
        nextNum = nextNum + prevNum;
        steps--;
    }
    return builtArray;
}

//console.log(fibs(8));
// Creation or array
let a = [];
function fibonacci(n) { 
    if (n <= 1) { 
        return n; 
    } 
    return fibonacci(n - 1) + fibonacci(n - 2); 
} 
  
function fibrec(num){
    // Printing n fibonacci sequence 
    let n = num 
    
    for (let i = 0; i < n; i++) { 
        a.push((fibonacci(i)));
    };
    return a;
}

console.log(fibrec(10));
