// const circle ={
//     r:1,
//     location:{
//         x:1,
//         y:2
//     },
//      draw: function(){
//         console.log('draw');
//      }
// };
// function cratecircle(radius){
//     return{
//         radius,
//         draw: function() {
//             console.log('draw');
//         }
//     };
// }
// const circle = cratecircle(5);
// // circle.draw();

// function Circle(radius){
//     this.radius = radius;
//     this.draw=function(){
//         console.log("draw");
//     }
// }
// const another = new Circle(1);
// ===============================================================
// // async & await
// async function arth(){
// let p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("27 Deg");
//     },5000)
// })
// let bangaloreWeather = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("21 Deg");
//     },9000)
// })
// //  p1.then(alert);
// console.log ("fetching delhi weather please wait...")
// let pa = await p1
// console.log("Feached delhi Wther: "+pa)
// console.log ("fetching bangalor weather please wait...")
// let bl = await bangaloreWeather
// console.log("Feached Bangalore Wther: "+bl)

// return [pa,bl]
// }
// const x=async () =>{
//     console.log("hey i am  x and i am waitting")
// }
// const main1 = async()=>{
// console.log("welcome to weather contorol room");
// let a= await arth()
// let b= await x()
// //  a.then((value)=>{
// //     console.log(value)
// //  })
// }
// main1()
let p = fetch("https://goweather.herokuapp.com/weather/Ny");

p.then((value1) => {
    return value1.json();
}).then((value2) => {
    console.log(value2);
});

 