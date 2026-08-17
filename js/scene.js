
const hour = new Date().getHours();
const windowElement = document.getElementById("window-bg");
const windowElementPlant1 = document.getElementById("plant-1");
const windowElementPlant2 = document.getElementById("plant-2");
const windowElementPlant3 = document.getElementById("plant-3");
const deskElementPlant = document.getElementById("plant");
const rayLight = document.getElementById("ray-light");
const wallElement = document.getElementById("wall");



if(hour >= 7 && hour < 18){
    // Día
    windowElement.style.backgroundImage =
        'url("assets/furniture/window-day-bg.png")';

    rayLight.style.backgroundImage =
        'url("assets/lighting/sunlight.png")';
    wallElement.style.backgroundImage = 'url("assets/wall/wall-day.png")';
}
else if(hour >= 18 && hour < 20){
    // Atardecer
    windowElement.style.backgroundImage = 'url("assets/furniture/window-sunset-bg.png")';

    windowElementPlant1.style.filter = "brightness(0.8)";
    windowElementPlant2.style.filter = "brightness(0.8)";
    windowElementPlant3.style.filter = "brightness(0.8)";

    deskElementPlant.style.filter = "brightness(0.9)";

    rayLight.style.backgroundImage =
        'url("assets/lighting/sunset-light.png")';
    wallElement.style.backgroundImage = 'url("assets/wall/wall-sunset.png")';
}
else{
    // Noche
    windowElement.style.backgroundImage =
        'url("assets/furniture/window-night-bg.png")';
  
    windowElementPlant1.style.filter = "brightness(0.4)";
    windowElementPlant2.style.filter = "brightness(0.4)";
    windowElementPlant3.style.filter = "brightness(0.4)";

    deskElementPlant.style.filter = "brightness(0.7)";

    rayLight.style.backgroundImage = 'url("assets/lighting/moon-light.png")';
    wallElement.style.backgroundImage = 'url("assets/wall/wall-night.png")';
}





const clock = document.getElementById("clock-time");
console.log(clock);
function updateClock(){
    const now = new Date();
    const hours = String(now.getHours()).padStart(2,"0");
    const minutes = String(now.getMinutes()).padStart(2,"0");
    clock.textContent = `${hours}:${minutes}`;
}
updateClock();
