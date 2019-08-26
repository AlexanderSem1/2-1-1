fetch ("https://pokeapi.co/api/v2/pokemon/")
.then (function(response){
    return response.json();
})
.then (function(response){
    console.log(response);
    readCards(response);
    console.log(response.results[7]);

})

function readCards(response) {
    for(var i = 0; i < response.results.length; i++) {
        let cardsContainer = document.getElementById("parentElement");  
        let card = document.createElement("div");
        let cardName = document.createElement("h1");
        var cardButton = document.createElement("button");
        cardButton.setAttribute("id", "btnId");

        cardsContainer.appendChild(card);
        card.appendChild(cardName);
        card.appendChild(cardButton);
       
        cardName.innerHTML = response.results[i].name;
        cardButton.innerHTML = "View more";

    }
}




