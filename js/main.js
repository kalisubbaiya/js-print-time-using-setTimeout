// var a=1;
// function currentTime(){
//   let date=new Date();
//   let date1=date.toLocaleTimeString();
//   console.log(date1+" welcome");
//   id=setTimeout(currentTime, 3000);
// }

var a=1;
let stop=setInterval(function currentTime(){
  a++;
  if(a>10){
    clearInterval(stop);
  }
  console.log(new Date().toLocaleTimeString() + " Current Time");
},3000
)