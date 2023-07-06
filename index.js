/**
 * @param {number[]} height
 * @return {number}
 */
var max =function (a,b){
    var max=0
    if (a>=max){
        max=a
        return a
    }
    else if(b>=max){
        max=b
        return b}
   
};
var min =function (a,b){
   var min=0
   if (a<=min){
       min=a
       return a
   }
   else if (b<=min){
       min=b
       return b}
   
};
var waterhole = function(height) {
   var left =[]
   var right =[]
   var water =0
   for(var i=1 ; i<=height.length ; i++){
    let a = left[i-1]
    if (isNaN(a)){
        a = 0
    }
       left[i]=Math.max(a , height[i])
   }
   for(var i=height.length - 1; i>=0 ; i--){
    let a = right[i+1]
    if (isNaN(a)){
        a = 0
    }
       right[i]=Math.max(a, height[i])
   }
//    console.log(right)
   let a = Math.min(2, 7)
//    console.log(a)
   for (var i=1 ; i<height.length ; i++){
        // console.log(right)
    //    console.log(water, left[i], right[i], height[i])
       water= water + Math.min(left[i],right[i])- height[i]
   }
   return water
   
};
let ans = waterhole([0,2,1,3,0,6,2,1,4,2,1])
console.log(ans)