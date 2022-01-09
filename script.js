const cookiesCounter = document.getElementById('cookies-counter');
const cookiesPerSecondCounter = document.getElementById('cookies-per-second-counter');
const buyClickerBtn = document.getElementById('buy-clicker-btn');
const buyGrandpaBtn = document.getElementById('buy-grandpa-btn');

var cookies = 30;
var cookiesPerSecond = 0;

const buy = (cps, cost) =>{
    if(cookies >= cost){
        cookiesPerSecond += cps;
        cookies -= cost;
        cookiesCounter.innerHTML=`You have ${Math.floor(cookies)} cookies.`
        cookiesPerSecondCounter.innerHTML=`Cookies per second: ${cookiesPerSecond}`;
    }
}

const update = () =>{
    cookies += cookiesPerSecond/10;
    cookiesCounter.innerHTML=`You have ${Math.floor(cookies)} cookies.`

}

const startGame=()=>{
    cookiesCounter.innerHTML=`You have ${cookies} cookies.`
    cookiesPerSecondCounter.innerHTML=`Cookies per second: ${cookiesPerSecond}`;
    buyClickerBtn.addEventListener("click", ()=>buy(1,10), false);
    buyGrandpaBtn.addEventListener("click", ()=>buy(2,20), false);
    setInterval(update, 100);
}
window.onLoad=startGame();