// Body styling
document.body.style.cssText =
  "margin: 0px; background-color: rgb(236, 236,236); font-family: Tahoma, Arial;";

// ---------------------------

// HEADER

let Header = document.createElement("header");

document.body.appendChild(Header);

Header.className = "website-head";

Header.style.cssText =
  "display: flex; justify-content: space-between; align-items: center; padding: 20px; background-color: purple";

// LOGO INSIDE HEADER

let Logo = document.createElement("img");
Header.appendChild(Logo);
Logo.src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
Logo.style.cssText = "width: 200px; height: 50px";
// UL INSIDE HEADER

let uls = document.createElement("ul");
uls.className = "UL";
let Home = document.createElement("li");
let AllLis = document.getElementsByClassName("List");
Home.textContent = "Home";
Home.className = "List";
let About = document.createElement("li");
About.textContent = "About";
About.className = "List";
let Services = document.createElement("li");
Services.textContent = "Services";
Services.className = "List";
let Contact = document.createElement("li");
Contact.textContent = "Contact";
Contact.className = "List";
Header.appendChild(uls);
uls.append(Home, About, Services, Contact);
uls.style.cssText = "display: flex; list-style: none;";

for (let i = 0; i < AllLis.length; i++) {
  AllLis[i].style.cssText = "margin: 10px;";
}

// HEADER FINISH

// CONTENT DIV CREATE

let content = document.createElement("div");
content.className = "content";
document.body.append(content);
content.style.cssText =
  "padding: 30px; display: flex; flex-wrap: wrap; justify-content: center; column-gap: 20px; row-gap: 20px;";

// PRODUCT INSIDE CONTENT

for (let k = 0; k < 15; k++) {
  let product = document.createElement("div");
  let span = document.createElement("span");
  span.className = "spanclass";
  span.innerText = `${k + 1}`;
  span.style.cssText =
    "display: block; margin: 10px; font-size: 40px; font-weight: bold;";
  product.className = "product";
  product.textContent = "product";
  product.prepend(span);
  product.style.cssText =
    "padding: 40px; background-color: white; width: 250px; text-align: center; border: 1px solid black;";
  content.appendChild(product);
}

// Footer

let Footer = document.createElement("footer");
document.body.appendChild(Footer);

Footer.style.cssText =
  "width: 100%; background-color: green; height: 80px; position: absolute; bottom: 0; text-align: center; display:grid; place-items: center; font-weight: bold";

Footer.innerText = "Copyright Temsaah 2023";
