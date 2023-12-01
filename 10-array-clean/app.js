let arr = [1, 2, -5, 11, 17, -12, 5, 8];
let arrRes=[]; 
function clean(){
    return function(num){
        console.log(arr);
        for (let i = 0; i < arr.length; i++){
        if(arr[i] > num){
            console.log(true);
        } 
        else{
            console.log(false);
            arrRes.push(arr[i]);
        } 
    } 
      return arrRes; 
}
}
const res = clean(arr)
console.log(res(5));

