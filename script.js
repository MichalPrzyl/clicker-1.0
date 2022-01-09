const cookiesCounter = document.getElementById('cookies-counter');
const cookiesPerSecondCounter = document.getElementById('cookies-per-second-counter');
const buyClickerBtn = document.getElementById('buy-clicker-btn');
const buyGrandpaBtn = document.getElementById('buy-grandpa-btn');

var cookies = 10;
var cookiesPerSecond = 0;

const buy = (cps, cost) =>{
    if(cookies >= cost){
        cookiesPerSecond += cps;
        cookies -= cost;
        cookiesCounter.innerHTML=`You have ${cookies} cookies.`
        cookiesPerSecondCounter.innerHTML=`Cookies per second: ${cookiesPerSecond}`;
    }
}

const update = () =>{
    cookies += cookiesPerSecond;
    cookiesCounter.innerHTML=`You have ${cookies} cookies.`

}

const startGame=()=>{
    cookiesCounter.innerHTML=`You have ${cookies} cookies.`
    cookiesPerSecondCounter.innerHTML=`Cookies per second: ${cookiesPerSecond}`;
    buyClickerBtn.addEventListener("click", ()=>buy(1,10), false);
    buyGrandpaBtn.addEventListener("click", ()=>buy(2,20), false);
    setInterval(update, 1000);
}
window.onLoad=startGame();