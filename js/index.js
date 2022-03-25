document.querySelector('.fa-bars').addEventListener('click', () => {
    document.querySelector(".ui1").classList.toggle("active");
});

// document.querySelector('#btt1').addEventListener('click', () => {
//     document.querySelector(".act1").classList.toggle("active");
// });

// document.querySelector('#btt1').addEventListener('click', () => {
//     document.querySelector("#ac1").classList.toggle("active");
// });

// document.querySelector('#btt2').addEventListener('click', () => {
//     document.querySelector(".act2").classList.toggle("active");
// });

// document.querySelector('#btt2').addEventListener('click', () => {
//     document.querySelector("#ac2").classList.toggle("active");
// });

// document.querySelector('#btt3').addEventListener('click', () => {
//     document.querySelector(".act3").classList.toggle("active");
// });

// document.querySelector('#btt3').addEventListener('click', () => {
//     document.querySelector("#ac3").classList.toggle("active");
// });
// document.querySelector('#btt4').addEventListener('click', () => {
//     document.querySelector(".act4").classList.toggle("active");
// });

// document.querySelector('#btt4').addEventListener('click', () => {
//     document.querySelector("#ac4").classList.toggle("active");
// });

var x= document.getElementById("btt1");
var y= document.getElementById("btt2");
var w= document.getElementById("btt3");
var z= document.getElementById("btt4");

x.addEventListener("click",function()
{
   x.classList.add("active");
   y.classList.remove("active");
   w.classList.remove("active");
   z.classList.remove("active");

})

y.addEventListener("click",function()
{
    y.classList.add("active");
    x.classList.remove("active");
    w.classList.remove("active");
    z.classList.remove("active");
   
})

w.addEventListener("click",function()
{
    w.classList.add("active");
   x.classList.remove("active");
   y.classList.remove("active");
   z.classList.remove("active");
})

z.addEventListener("click",function()
{
    z.classList.add("active");
   x.classList.remove("active");
   w.classList.remove("active");
   y.classList.remove("active");
})