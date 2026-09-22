const currentYear = document.querySelector("#currentyear");
const lastMod = document.querySelector("#lastModified");
currentYear.textContent = new Date().getFullYear();
lastMod.textContent = `Last Modification: ${document.lastModified}`;

const temperature = 10;
const windSpeed = 5;

function calculateWindChill(temp, wind) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16);
}

const windChillElement = document.getElementById("windchill");

if (temperature <= 10 && windSpeed > 4.8) {
    windChillElement.textContent = `${calculateWindChill(temperature, windSpeed).toFixed(1)} °C`;
} else {
    windChillElement.textContent = "N/A";
}