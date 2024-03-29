let query = document.querySelector("section");
console.log(query); //this property only take the first child of the document

let queryAll = document.querySelectorAll("section");
console.log(queryAll); //this property take all of section in the document
for (let item of queryAll) {
  item.style.border = "2px solid steelblue";
  item.style.marginBottom = "5px";
  item.style.padding = "4px";
}
let idSect = document.getElementById("sec-1");
console.log(idSect);
let getTag = document.getElementsByTagName("li");
console.log(getTag);
let getClass = document.getElementsByClassName("sec-h1");
console.log(getClass);
