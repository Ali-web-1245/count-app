
 let count=0;
function plus(){
   
    count++
    document.querySelector(".display").textContent=count
}
function minus(){
   
    count--
    document.querySelector(".display").textContent=count
}
function reset(){
   
    count = 0
    document.querySelector(".display").textContent=count
}