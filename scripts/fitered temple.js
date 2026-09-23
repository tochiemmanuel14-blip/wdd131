const temples = [
  { templeName: "Aba Nigeria", location: "Aba, Nigeria", dedicated: "2005, August, 7", area: 11500, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg" },
  { templeName: "Manti Utah", location: "Manti, Utah, United States", dedicated: "1888, May, 21", area: 74792, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg" },
  { templeName: "Payson Utah", location: "Payson, Utah, United States", dedicated: "2015, June, 7", area: 96630, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg" },
  { templeName: "Yigo Guam", location: "Yigo, Guam", dedicated: "2020, May, 2", area: 6861, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg" },
  { templeName: "Washington D.C.", location: "Kensington, Maryland, United States", dedicated: "1974, November, 19", area: 156558, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg" },
  { templeName: "Lima Perú", location: "Lima, Perú", dedicated: "1986, January, 10", area: 9600, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg" },
  { templeName: "Mexico City Mexico", location: "Mexico City, Mexico", dedicated: "1983, December, 2", area: 116642, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg" },
  { templeName: "Salt Lake", location: "Salt Lake City, Utah, United States", dedicated: "1893, April, 6", area: 253000, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-lds-1070345-wallpaper.jpg" },
  { templeName: "Rome Italy", location: "Rome, Italy", dedicated: "2019, March, 10", area: 41010, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/5-Rome-Temple-2160345.jpg" },
  { templeName: "Bern Switzerland", location: "Bern, Switzerland", dedicated: "1955, September, 11", area: 35546, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bern-switzerland/400x250/bern-switzerland-temple-lds-653038-wallpaper.jpg" }
];
const container = document.getElementById("temples-container");
const heading = document.getElementById("page-heading");
function displayTemples(list) {
  container.innerHTML = "";
  list.forEach(t => {
    const card = document.createElement("section");
    card.className = "temple-card";
    card.innerHTML = `<h3>${t.templeName}</h3><p><span class="label">Location:</span> ${t.location}</p><p><span class="label">Dedicated:</span> ${t.dedicated}</p><p><span class="label">Size:</span> ${t.area} sq ft</p><img src="${t.imageUrl}" alt="${t.templeName} Temple" loading="lazy" width="400" height="250">`;
    container.appendChild(card);
  });
}
displayTemples(temples);
document.getElementById("home").addEventListener("click", e=>{e.preventDefault(); heading.textContent="Home"; displayTemples(temples)});
document.getElementById("old").addEventListener("click", e=>{e.preventDefault(); heading.textContent="Old"; displayTemples(temples.filter(x=>parseInt(x.dedicated.split(",")[0])<1900))});
document.getElementById("new").addEventListener("click", e=>{e.preventDefault(); heading.textContent="New"; displayTemples(temples.filter(x=>parseInt(x.dedicated.split(",")[0])>2000))});
document.getElementById("large").addEventListener("click", e=>{e.preventDefault(); heading.textContent="Large"; displayTemples(temples.filter(x=>x.area>90000))});
document.getElementById("small").addEventListener("click", e=>{e.preventDefault(); heading.textContent="Small"; displayTemples(temples.filter(x=>x.area<10000))});
document.getElementById("currentyear").textContent=new Date().getFullYear();
document.getElementById("lastModified").textContent=`Last Modified: ${document.lastModified}`;
document.getElementById("menu").addEventListener("click", ()=>{document.querySelector("nav").classList.toggle("open")});