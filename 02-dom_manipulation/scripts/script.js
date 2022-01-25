console.log("JS Loaded")

const rootDiv = document.getElementById("cappuccino");
/*
//------------create and populate the element-------
const rootH2 = document.createElement("h2");

rootH2.innerText = "To-Do List";

rootH2.classList.add("main_subtitle");

console.log(rootDiv.id);

//--------attach it to a parent--------

rootDiv.appendChild(rootH2);
*/
//---------Create element----

const actionBtn = document.createElement("button");

actionBtn.innerText = "Add To-Do";
actionBtn.classList.add("action-btn");
actionBtn.style.padding = "20px";
const clearBtn = document.createElement("clearBtn");

clearBtn.innerText = "Clear";
clearBtn.classList.add("clear-btn");
clearBtn.style.padding = "20px";

rootDiv.appendChild(clearBtn)

const addToDoItem = text => {
    const newToDo = document.createElement("li");
    newToDo.innerText = text;
    
    const ulItem = document.getElementById("items-list")
    ulItem.appendChild(newToDo);
}

const clearList = () =>{
    const ulItem = document.getElementById("items-list")
    ulItem.innerHTML = '';
}


actionBtn.addEventListener(
"click", (event) => {
    console.log("Button Clicked", event)
    const inputToDo = document.querySelector("[name='to-do-item']")
    addToDoItem(inputToDo.value)
    console.log(inputToDo.value);
    inputToDo.value = "";
    inputToDo.focus();
})

actionBtn.addEventListener("keyup", x => x.keycode === 13 ? x.preventDefault() : actionBtn.addToDoItem())

clearBtn.addEventListener(
    "click", (event) => {
        console.log("Button Clicked", event)
        clearList();
        const inputToDo = document.querySelector("[name='to-do-item']")
        console.log(inputToDo.value);
        inputToDo.value = "";
        inputToDo.focus();
    })

rootDiv.appendChild(actionBtn)