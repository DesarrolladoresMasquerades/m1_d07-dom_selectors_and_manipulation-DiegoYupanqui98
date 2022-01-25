console.log("JS Loaded")

console.log(
    document.querySelector("div.first-div").innerText, "\n",
    document.querySelector("div.first-div+div").innerText
    );

    const firstDiv = document.getElementsByClassName("first-div");
    console.log("firstDiv: ", firstDiv.length);

    const firstDivArray = Array.from(firstDiv);
    firstDivArray.forEach(console.log)


    console.log("------------------------------")

    const divs= document.querySelectorAll("div");
    divs.forEach(console.log)

    console.log(" second DIV:  ",document.getElementById("theID"));

    console.log("------------------------")

    console.log(document.getElementsByClassName("div")===document.querySelectorAll(".div"))

    const cards = Array.from(document.getElementsByClassName("card"))

console.log(
    divs[0] === cards[0]
)

//cards.forEach(card=>card.innerText += " and I have been modified")


console.log("------------------------------")

// --------- selecting on a branch (element inside document) --------

console.log("query: ",divs[0].querySelector("p"));