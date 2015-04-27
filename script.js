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
    $(".two").on("click", function () {
        numGroups = 2;
        $(".allTeams").empty();
    });


    $(".three").on("click", function () {
        numGroups = 3;
        $(".allTeams").empty();
    });


    $(".four").on("click", function () {
        numGroups = 4;
        $(".allTeams").empty();
    });


    $(".five").on("click", function () {
        numGroups = 5;
        $(".allTeams").empty();
    });


    $(".six").on("click", function () {
        numGroups = 6;
        $(".allTeams").empty();
    });

    $(".seven").on("click", function () {
        numGroups = 7;
        $(".allTeams").empty();
    });
    $(".eight").on("click", function () {
        numGroups = 8;
        $(".allTeams").empty();
    });

    $(".nine").on("click", function () {
        numGroups = 9;
        $(".allTeams").empty();
    });

    $(".ten").on("click", function () {
        numGroups = 10;
        $(".allTeams").empty();
    });



    // TODO only enable submit button once user has selected the number of groups to create

    $(".submit").on("click", function () {
        $(".allTeams").empty();
        var currentTeam = 0;
        namesArray = shuffle(namesArray);

        for (var i = 0; i < numGroups; i++) {
            var aTeam = new Team("Team-" + i);
            teams.push(aTeam);
        }

        for (var i = 0; i < namesArray.length; i++) {
            teams[currentTeam].members.push("<br/>" + namesArray[i]);
            currentTeam++;

            if (currentTeam == numGroups) {
                currentTeam = 0;
            }
        }
        for (var i = 0; i < numGroups ; i++) {
            var finalTeams = (teams[i].members);
            var superFinalTeam = $(".allTeams").append("<p>Team #" + (i+1) + finalTeams + "</p>");
            $(".allTeams").hide().slideDown(2000);
        }
        // TODO write CSS / HTML to display the teams object

    });

});

/*
var groupSize = 0;

$(document).ready(function (){
    $(".teamSizeButton").on("click", function(){
    groupSize = $(this).data("teamsize");

    $(".teamContainer").empty();
    });

    $(".refreshButton").on("click", function(){
        var count = 1;

    teamList = shuffle(teamList);

    for(i=0; i < groupSize; i++){
        $(".teamContainer").append("<div class = 'nameList' id = 'group" + (i+1) + "'>Group " + (i+1) + "</div>");
    }

    for(i=0; i < teamList.length; i++){
    var targetParent = ('#group' + count);
    var el = "<p> + teamList[i] + "</p>";
    targetParent.append(el);
    el = targetParent

 */