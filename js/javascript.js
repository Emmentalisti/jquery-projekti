function createDiv() {
  for (var i = 0; i <=255; i++)
  {
    var div = document.createElement("div");
    //div.textContent = ("testi");
    div.setAttribute ("class", "dynamicDiv");
    document.documentElement.appendChild(div);
  }
}

createDiv();
