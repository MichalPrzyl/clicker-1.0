const cookiesCounter = document.getElementById('cookies-counter');
const cookiesPerSecondCounter = document.getElementById('cookies-per-second-counter');
const alert = document.getElementById('alert');
// buy
const buyClickerBtn = document.getElementById('buy-clicker-btn');
const buyGrandpaBtn = document.getElementById('buy-grandpa-btn');
const buyFarmBtn = document.getElementById('buy-farm-btn');

let startCookies = 600;

var cookies = startCookies;
var cookiesPerSecond = 150;

const buy = (cps, cost) =>{
    if(cookies >= cost){
        cookiesPerSecond += cps;
        cookies -= cost;
        cookiesCounter.innerHTML=`You have ${Math.floor(cookies)} cookies.`
        cookiesPerSecondCounter.innerHTML=`Cookies per second: ${cookiesPerSecond}`;
    }
    else{
        alert.innerHTML="You dont have enough cookies";
        setTimeout(clearAlertDiv, 3000);
    }
}

const update = () =>{
    cookies += cookiesPerSecond/10;
    if (cookies > 1000)
    {
        display = cookies;
        // 1300 -> 1,3k
        // 1300 : 1000
        cookiesCounter.innerHTML=`You have ${Math.floor(cookies/1000)}k cookies.`    
    }
    else{
        cookiesCounter.innerHTML=`You have ${Math.floor(cookies)} cookies.`
    }

}

const startGame=()=>{
    cookiesCounter.innerHTML=`You have ${cookies} cookies.`
    cookiesPerSecondCounter.innerHTML=`Cookies per second: ${cookiesPerSecond}`;
    buyClickerBtn.addEventListener("click", ()=>buy(1,10), false);
    buyGrandpaBtn.addEventListener("click", ()=>buy(2,100), false);
    buyFarmBtn.addEventListener("click", ()=>buy(3,700), false);
    
    setInterval(update, 100);
}
window.onLoad=startGame();

const clearAlertDiv=()=>{
    alert.innerHTML = "";
}