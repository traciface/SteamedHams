const key = "2327B478B5D9F8850851CFF93D22102A"
const steamCall = "http://steamcommunity.com/profiles/<id>/"
var formControl = $(".form-control");
var searchBtn = $(".search-button")
var resultsContainer = $(".search-results")
var searchInput = $(".search-input")
var userID = "";

function formSearch(event) {
    event.preventDefault();

    var searchInputValue = $(".form-control").val();
    var selectBoxValue = $(".form-select").val();

    $(".search-button").click(formsearch);

    getOwnedGames(searchInputValue, selectBoxValue);

    function getOwnedGames(steamCall, searchInputValue) {
        var steamUrl = "http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=2327B478B5D9F8850851CFF93D22102A&steamid=" + searchInputValue + "&format=json&include_appinfo=true";
        fetch(steamUrl)
            .then(function (response) {
                if (response.ok) {
                    response.json().then(function (data) {
                        getResults(data, searchInputValue, selectBoxValue);
                    })

                } else if (searchInputValue !== response.name) {
                    alert = "Alert, must type valid input!";
                } else {
                    alert = "Alert, input user ID!";
                }
            })
    }

    function getRandomGame() {
        fetch(getOwnedGames)
        function shuffle(getOwnedGames) {
            for (var i = 0; i < getOwnedGames.length - 1; i++) {
                var j = i + Math.floor(Math.random() * (sourceArray.length - i));
            }
        }
    }

    getRandomGame();
    //taking random game and getting data, as well as setting tags for details
    function getResults(data, search) {

        fetch(getRandomGame)
        searchInput.textContent = search;

        var listResult = document.createElement("div");
        var resultBody = document.createElement("div");

        listResult.append(resultBody);

        var resultTitle = document.createElement("h1");
        var bodyInfo = document.createElement("p");
        var bodyInfo2 = document.createElement("p");
        var bodyInfo3 = document.createElement("p");
        var resultBtn = document.createElement("button");
        resultBtn.setAttribute("class", "infoBtn")


        var gameImage = document.createElement("img");
        gameImage.src = data.img_icon_url['official-artwork'].front_default;
        resultTitle.textContent = "Name: " + data.name;
        bodyInfo.textContent = "Playtime " + data.playtime_forever;



        resultBody.append(resultTitle, bodyInfo, bodyInfo2, bodyInfo3, resultBtn);
        resultsContainer.append(listResult);
    }

    getResults();

}
