function mathSequence(arr){
    let arith = new Set();
    let geo = new Set();

    for(let i = 1; i<arr.length;i++){
        let number1  = arr[i] - arr[i-1];
        arith.add(number1);
        let number2 = arr[i] / arr[i-1];
        geo.add(number2);
    }

        if (arith.size === 1){
            return "Arithmetic";
        }
        if (geo.size === 1){
            return "Geometric";
        }
        return -1;
    
}

console.log(mathSequence([2,4,6,8]));
console.log(mathSequence([9,27,81]));
console.log(mathSequence([1,5,9,16]));
