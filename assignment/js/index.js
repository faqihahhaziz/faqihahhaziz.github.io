
/*function getMinMaxAvg(){  
  var arr = [11, 32,27, 119, 78,69,45,57,88,94];


var min = arr[0];
var max = arr[0];
var average = 0;
{
for(var i = 0; i < arr.length; i++) {
  if(arr[i] < min) min = arr[i];
  if(arr[i] > max) max = arr[i];
  average += arr[i];
}
}

average /= arr.length;

console.log(arr)
console.log("Min is : " + min);
console.log("Max is : " + max);
console.log("Average is : " + average);
}
getMinMaxAvg();
*/




function maximum() //find the max
{
  var max;
  if (document.getElementsById("input")[0].value > document.getElementsByTagName("input")[1].value && document.getElementsByTagName("input")[0].value > document.getElementsByTagName("input")[2].value) {
    max = document.getElementsById("input")[0].value;
  } else if (document.getElementsById("input")[1].value > document.getElementsByTagName("input")[0].value && document.getElementsByTagName("input")[1].value > document.getElementsByTagName("input")[2].value) {
    max = document.getElementsById("input")[1].value;
  } else {
    max = document.getElementsById("input")[2].value;
  }
  document.getElementsById("output")[0] = max;

  //alert(maximumDemo.innerHTML);
}

function average() //find the average
{
  var total = 3;
  var i, aver;
  aver = (document.getElementsByTagName("input")[0].value + (document.getElementsByTagName("input")[1].value + (document.getElementsByTagName("input")[2].value))) / total;
  document.getElementsByTagName("output")[1] = aver;
}

function minimum() {
  if (document.getElementsByTagName("input")[0].value < document.getElementsByTagName("input")[1].value && document.getElementsByTagName("input")[0].value < document.getElementsByTagName("input")[2].value) {
    min = document.getElementsByTagName("input")[0].value;
  } else if (document.getElementsByTagName("input")[1].value < document.getElementsByTagName("input")[0].value && document.getElementsByTagName("input")[1].value < document.getElementsByTagName("input")[2].value) {
    min = document.getElementsByTagName("input")[1].value;
  } else {
    min = document.getElementsByTagName("input")[2].value;
  }
  document.getElementsByTagName("output")[2] = min; //find the minimum

  //alert(minimumDemo.innerHTML);
}
