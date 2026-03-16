const userEmail="Luiz.porta@telefonica.com"
const userPass="Estonia#26"

document.getElementById("email").addEventListener("input",checkLogin)
document.getElementById("senha").addEventListener("input",checkLogin)

function checkLogin(){

let email=document.getElementById("email").value
let pass=document.getElementById("senha").value

if(email===userEmail && pass===userPass){

document.getElementById("loginBtn").disabled=false

}else{

document.getElementById("loginBtn").disabled=true

}

}

function login(){

document.getElementById("login").style.display="none"
document.getElementById("dashboard").style.display="block"

}

function openPanel(id){

document.querySelectorAll(".panel").forEach(p=>{
p.classList.remove("active")
})

document.getElementById(id).classList.add("active")

}

let meses=[
"Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez","Jan","Fev"
]

let valores=[33,27,21,17,11,9,10,6,9,5,3,2]

let total=valores.reduce((a,b)=>a+b,0)

document.getElementById("totalTA").innerText=total

new Chart(
document.getElementById("lineChart"),
{
type:"line",
data:{
labels:meses,
datasets:[{
label:"TA's Abertos",
data:valores,
borderWidth:2
}]
}
}
)

new Chart(
document.getElementById("pieChart"),
{
type:"pie",
data:{
labels:meses,
datasets:[{
data:valores
}]
}
}
) 