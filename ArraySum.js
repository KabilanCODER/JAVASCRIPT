function arraySum(arr){
    let tempArr = arr.sort((a,b)=>{
        return a-b;
    });
    let largest = tempArr.pop();
    let number = 0;
    tempArr.forEach(item => number+= item);
    return largest===number;
    
}

console.log(arraySum([1,5,6,17,3,2,]));
console.log(arraySum([6,8,4,9,39]));