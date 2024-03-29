/*

there 5 key word needs to dom manipulation 
1. .getElelmentByTagName
2. .getElementById
3. .getElementsByClassName
5. .querySelector
6. .querySelectorAll
*/

// const getSection = document.querySelectorAll("section");
// for (const item of getSection) {
//   item.style.border = "2px solid steelblue";
//   item.style.marginBottom = "5px";
//   item.style.paddingLeft = "8px";
// }

const helloSection = document.getElementById("hello");
helloSection.style.backgroundColor = "lightgray";

const GetName = document.getElementById("hello");
GetName.classList.add("text-center");
GetName.classList.remove("font");

const mainSection = document.getElementById("main-container");

const newSetion = document.createElement("section");
mainSection.appendChild(newSetion);
const h1 = document.createElement("h1");
h1.innerText = "The placess are:";
newSetion.append(h1);
const ul = document.createElement("ul");
newSetion.appendChild(ul);
const li1 = document.createElement("li");
ul.appendChild(li1);
li1.innerText = "Sundarban";
const li2 = document.createElement("li");
ul.appendChild(li2);
li2.innerText = "Bandarban";
const li3 = document.createElement("li");
ul.appendChild(li3);
li3.innerText = "Sentmartin";
const li4 = document.createElement("li");
ul.appendChild(li4);
li4.innerText = "Kuakata";
console.log(mainSection);

const section = document.createElement("section");
section.innerHTML = `
<h1>My favourite foods</h1>
<ul>
<li>Beef</li>
<li>Chicken roast</li>
<li>Biriani</li>
<li>Polao</li>
</ul>
`;
mainSection.appendChild(section);
const getSection = document.querySelectorAll("section");
for (const item of getSection) {
  item.style.border = "2px solid steelblue";
  item.style.marginBottom = "5px";
  item.style.paddingLeft = "8px";
}
