let check=document.querySelector("#box2")
let output=document.getElementById("output")
let inputBox=document.querySelector("#box1")
let point=0
check.addEventListener("click",()=>{
let randomNumber=Math.floor(Math.random()*100+1)
inputBox.addEventListener("focus",()=>{
output.innerHTML=" "
})
    if(inputBox.value=="")
    {
        output.innerHTML=`Please enter a number!`
    }
    else{
let input=parseInt(inputBox.value)
if(isNaN(input)){
    output.innerHTML=`&emsp;&emsp;&emsp;&emsp;Invalid Input`
}
else{
if(input==randomNumber){
    output.innerHTML=`Congratulations! you have done it`
}
else{
    point++
    output.innerHTML=`No the number is ${randomNumber} not ${input}`  
}
if(point==3){
output.innerHTML=`Out of moves!<br>Click on 'Play Again' to continue`
let refresh=document.createElement("button")
refresh.className="refresh"
refresh.innerText="Play Again"
document.body.appendChild(refresh)
check.addEventListener("click",()=>{
    output.innerHTML=`Please click on "Play Again"`
})
}
let reload=document.querySelector(".refresh")
reload.addEventListener("click",()=>{
    location.reload()
})


}}})




