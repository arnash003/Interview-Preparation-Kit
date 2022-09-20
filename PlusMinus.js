let arr = [-10, -20, 10, 20, 0];
function plusMinus(arr) {
    // Write your code here
    let n = arr.length;
    let positive = 0;
    let negative= 0;
    let zero = 0;
    
    for(let i=0; i < n; i++){
        if (arr[i] > 0){
            positive +=1;
        } else if (arr[i] < 0){
            negative += 1;
        } else {
            zero += 1;
        }
    }
    
    let pos = positive /n;
    let neg = negative /n;
    let zer = zero /n;
    
    console.log(pos.toFixed(6) + "\n" + neg.toFixed(6) + "\n" + zer.toFixed(6));
};