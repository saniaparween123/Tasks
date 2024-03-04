function addTwo(array,k) {
    let ans = "No"
    for (let i=0; i< array.length-1 ; i++ ){
        for (let j=i+1 ; j<array.length ; j++){
            if (array[i]+array[j] === k){
                ans = "Yes"
                break
            }

        }

    }
    console.log(ans);
}

let a= [8,3,2,4];
let k=4;
addTwo(a,k);