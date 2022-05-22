const listEl = document.querySelector("#favList");
const inputEl = document.querySelector("#fav");
const addBtn = document.querySelector("#submitFav");


const runList = function() {
    if(inputEl.value != ""){ 
    const value = inputEl.value;
    inputEl.value ="";
    const listItem = document.createElement("li");
    const span = document.createElement("span");
    const btn = document.createElement("button");
    listItem.appendChild(span);
    listItem.appendChild(btn);
    span.textContent = value;
    btn.textContent = "❌";
    listEl.appendChild(listItem);
    btn.setAttribute("aria-label", `Close ${value}`)
    btn.addEventListener("click", function(){
        listItem.remove();
        inputEl.focus();
    });
    inputEl.focus();
};

};

addBtn.addEventListener("click", runList);
document.addEventListener("keydown", (e) => e.key == "Enter"? runList() : "");