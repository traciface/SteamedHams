
async function importGames(event) 
{
    event.preventDefault();
    
    
    const steamCall = "http://steamcommunity.com/profiles/<id>/"
    const steamID = '76561198057426269';
    //const games = getOwnedGames(steamCall, user_id);
    
  const response = await fetch(`/api/games/del`, {
    method: "DELETE",
    body: JSON.stringify({
        
        }),
        headers: {
        "Content-Type": "application/json",
        },
    }); 
    // await fetch("/games.json")
    var steamUrl = "http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=2327B478B5D9F8850851CFF93D22102A&steamid=" + steamID + "&format=json&include_appinfo=true";
    fetch(steamUrl)
    .then(response => {
    return response.json();
    })
    .then(data => {
        data.response.games.forEach(game => {
            const appID = game.appid;
            const title = game.name;
            const playtime = game.playtime_forever;
            const response = fetch(`/api/games`, {
                method: "POST",
                body: JSON.stringify({
                    appID,
                    title,
                    playtime

                    
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
        });
    })
}

document.getElementById("importGames")
    .addEventListener("click", importGames);