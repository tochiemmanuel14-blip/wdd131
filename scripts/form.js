const products = [
  { id: "fluxCapacitor", name: "Flux Capacitor" },
  { id: "powerLaces", name: "Power Laces" },
  { id: "timeCircuits", name: "Time Circuits" },
  { id: "lowVoltage", name: "Low Voltage Reactor" },
  { id: "warpEqualizer", name: "Warp Equalizer" }
];

document.addEventListener("DOMContentLoaded", () => {
  const year = document.querySelector("#currentyear");
  if (year) {
    year.textContent = new Date().getFullYear();
  }
});