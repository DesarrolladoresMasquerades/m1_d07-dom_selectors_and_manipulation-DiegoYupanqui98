// 1: Get the node with the  main title

// ... your code here

console.log(document.querySelector("#container h1"))

// => <h1>Fruits and veggies</h1>
// ----------------------------------------------

// 2: Get the main title text

// ... your code here
console.log(document.querySelector("#container h1").innerText)

// => Fruits and veggies
// ----------------------------------------------

// 3: Get all the nodes with the fruit items

// ... your code here

console.log(document.getElementsByClassName("fruit-item"))
// => HTMLCollection(4) [li.fruit-item, li.fruit-item, li.fruit-item, li.fruit-item]
// ----------------------------------------------

// 4: Get all the veggie items - the text

// ... your code here
document.querySelectorAll(".veggie-item").forEach(element=>console.log(element.innerText))

// Broccoli Celery Potato Spinach
// ----------------------------------------------

// 5: Get the subtitle in the veggies section

// ... your code here

console.log(document.querySelector(".list-veggies h2").innerText)
// => Veggies
// ----------------------------------------------

// 6: Add an ID 'fruit-title' to the first subtitle (in the Fruit section)

// ... your code here
document.querySelector("#container h2").id = "fruit-title";
console.log(document.getElementById("fruit-title"))
// => fruit-title
// ----------------------------------------------

// 7: Add a class 'best-fruit' to the 1st and the 3rd fruit

// ... your code here

const fruitsArray = document.querySelectorAll(".fruit-item")

fruitsArray[0].classList.add("best-fruit")
fruitsArray[2].classList.add("bet-fruit")

console.log(fruitsArray)

//const nodesCollection = 

// => <li class="fruit-item best-fruit">Pear</li>
// => <li class="fruit-item best-fruit">Plum</li>
// ----------------------------------------------

// 8: Remove class 'veggies' from the unordered list of veggies

// ... your code here
const veggiesUl = document.querySelector(".veggies");
veggiesUl.classList.remove("veggies")
console.log(veggiesUl)
// => <ul>...</ul>
// ----------------------------------------------

// 9: Add a class 'veggie-love' to all the veggies

// ... your code here

const veggiesArray = document.querySelectorAll(".veggie-item")

//veggiesArray.forEach(veggie => veggie.classList.add("veggie-love"))
//console.log(veggiesArray)

//veggiesArray.forEach(veggie => veggie.setAttribute("class","veggie-love"));
//console.log(veggiesArray)


// => <li class="veggie-item veggie-love">Broccoli</li> ...
// ----------------------------------------------

// 10: Remove class 'veggie-item' from 'spinach'

// ... your code here
veggiesArray.forEach(veggie =>{ if(veggie.innerText === "Spinach")
    veggie.classList.remove("veggie-item")})

    console.log(veggiesArray)
// => ... <li class="veggie-love">Spinach</li>