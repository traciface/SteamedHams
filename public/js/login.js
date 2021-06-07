async function loginForm(event) 
{
    event.preventDefault();
    console.log("logged")
    const steamCall = "http://steamcommunity.com/profiles/<id>/"
    const user_id = '76561198057426269';
    const games = getOwnedGames(steamCall,user_id);
    console.log(games);
}
document.querySelector("#login-form")
    .addEventListener("submit", loginForm);
    function getOwnedGames(steamCall, userID) {
        console.log("getting games")
        var steamUrl = "http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=2327B478B5D9F8850851CFF93D22102A&steamid=" + userID + "&format=json&include_appinfo=true";
        fetch(steamUrl)
            .then(function (response) {
                if (response.ok) {
                    response.json().then(function (data) {
                        getResults(data, searchInputValue, selectBoxValue);
                    })
                } else {
                    alert = "Alert, input user ID!";
                }
            })
    }