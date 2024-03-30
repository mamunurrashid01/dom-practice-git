// option 1 to add event handler
function backGround() {
  document.getElementById("btn1").style.backgroundColor = "purple";
}
// option 2 to add event handler
function getSet() {
  document.body.innerText = "This is Mamunur Rashid, From Bangladesh";
}
// option 3 to add event handler
let changeBody = document.getElementById("vari");
changeBody.onclick = bodyColor;
function bodyColor() {
  document.body.style.backgroundColor = "darkgreen";
}
// option 4 to add event handler
const makeContent = document.getElementById("btn2");
makeContent.onclick = function contant() {
  document.body.innerHTML = `<h1>My fourite food</h1>
        <p>Beef</p>
        <p>Biriani</p>
        <p>Tuna fish</p>
        <p>Noodles</p>
        `;
};
// option 5 to add event handler
const makePink = document.getElementById("btn3");
makePink.addEventListener("click", function hello() {
  document.body.style.backgroundColor = "blue";
});
// option 5 to add event handler
document
  .getElementById("hello2")
  .addEventListener("click", function colorChen() {
    // NB: colorChen is not mendatory ,you can use or not
    document.body.style.backgroundColor = "gold";
  });
