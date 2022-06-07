const tık = document.querySelector(".a");
const tık1 = document.querySelector(".a1");
const h2 =document.querySelector("h2");
const p =document.querySelector("p");
const main =document.querySelector(".main");
const i =document.querySelector("i");


tık.addEventListener('click',function (){
  p.style.color=`yellow`
  i.style.color = `rgb(161, 86, 231)`;
  main.style.backgroundColor = `black`;
  tık.style.backgroundColor = `rgb(261, 86, 231)`;
  h2.style.color = `rgb(261, 86, 231)`;
});

tık1.onclick = function (){
  p.style.color=`yellow`
  i.style.color = `rgb(161, 86, 231)`;
  main.style.backgroundColor = `black`;
  tık.style.backgroundColor = `rgb(261, 86, 231)`;
  h2.style.color = `rgb(261, 86, 231)`;
};

