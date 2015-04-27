function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex ;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

var namesArray = ["Casie", "Michael", "Kelly", "Tracy", "Jeanne", "Aaron", "Vince", "Terry", "Cody",
    "Clare", "Chelsea", "Michelle", "Brian", "Rom", "Alicia", "Mary", "Kaitlyn", "Erik", "Steve", "Luke"];
var numGroups = 0;
var teams = [];

//object constructor
function Team(name) {
    this.name = name;
    this.members = [];
}



$(document).ready(function () {
    //$.get("class.txt", function(data){
    //    namesArray = data.split("\n");
    //    console.log(namesArray);
    //    classSize = namesArray.length;
    //});

    $(".one").on("click", function () {
        numGroups = 1;
    });

    $(".two").on("click", function () {
        numGroups = 2;
    });


    $(".three").on("click", function () {
        numGroups = 3;
    });


    $(".four").on("click", function () {
        numGroups = 4;
    });


    $(".five").on("click", function () {
        numGroups = 5;
    });


    $(".six").on("click", function () {
        numGroups = 6;
    });

    // TODO only enable submit button once user has selected the number of groups to create

    $(".submit").on("click", function () {
        var currentTeam = 0;
        namesArray = shuffle(namesArray);

        for (var i = 0; i < numGroups; i++) {
            var aTeam = new Team("Team-" + i);
            teams.push(aTeam);
        }

        for (var i = 0; i < namesArray.length; i++) {
            teams[currentTeam].members.push(namesArray[i]);
            currentTeam++;

            if (currentTeam == numGroups) {
                currentTeam = 0;
            }
        }

        // TODO write CSS / HTML to display the teams object

        console.log(teams);
    });
});
