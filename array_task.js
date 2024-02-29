nums=[0,0,3,4,0,8,5];
n = nums.length;
z = 0;
for (var i=0; i<n ; i++){
    if (nums[i] != 0){
       nums[z]=nums[i];
       nums[i]=0;
       z+=1
    }
}
console.log(nums);