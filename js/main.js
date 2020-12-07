var pageCounter = 1;

var animalContainer = document.getElementById("animal-info");
var getAnimalBtn = document.getElementById("btn");

getAnimalBtn.addEventListener("click", function(){
    var request = new XMLHttpRequest();
    request.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');
    request.onload = function(){
        var data = JSON.parse(request.responseText);
        renderHTML(data)
    };
    request.send();
    pageCounter++;

    if(pageCounter > 3){
        getAnimalBtn.classList.add("hide-me");
    }
});

function renderHTML(animalData){
    var htmlString = "";
    for(i=0; i<animalData.length; i++){
        htmlString += "<p>" + animalData[i].name + " is a " + animalData[i].species+ " that likes ";
        for(j = 0; j<animalData[j].foods.likes.length; j++){
            if(j == 0){
                htmlString += animalData[j].foods.likes[j];
            }
            else{
                htmlString += " and " + animalData[j].foods.likes[j];
            }
        }
        htmlString += ' and dislikes ';

        for(j = 0; j<animalData[j].foods.dislikes.length; j++){
            if(j == 0){
                htmlString += animalData[j].foods.dislikes[j];
            }
            else{
                htmlString += " and " + animalData[j].foods.dislikes[j];
            }
        }
        htmlString += '.</p>';
    }
    animalContainer.insertAdjacentHTML('beforeend', htmlString)
}