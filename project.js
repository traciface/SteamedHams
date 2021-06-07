
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

    function getOwnedGames(steamCall, searchInputValue) {
        var steamUrl = "http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=2327B478B5D9F8850851CFF93D22102A&steamid=" + userID + "&format=json&include_appinfo=true";
        fetch(steamUrl)
            .then(function (response) {
                if (response.ok) {
                    response.json() .then(function (data) {
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

    getRandomGame();}