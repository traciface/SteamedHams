
async function importGames(event) 
{
    event.preventDefault();
    
    
    const steamCall = "https://steamcommunity.com/profiles/<id>/"
    let steamID = "";
    //const games = getOwnedGames(steamCall, user_id);
    
  const response = await fetch(`/api/games/del`, {
    method: "DELETE",
    body: JSON.stringify({

        }),
        headers: {
        "Content-Type": "application/json",
        },
    }).then(response => {
        return response.json();
        })
        .then(data => {
            console.log(data)
            steamID = data.steamID;
        }); 

    // await fetch("/games.json")
    var steamUrl = "https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=2327B478B5D9F8850851CFF93D22102A&steamid=" + steamID + "&format=json&include_appinfo=true";
    var fetching = await fetch(steamUrl)
    .then(response => {
    return response.json();
    })
    .then(data => {
        console.log(data)
        data.response.games.forEach(game => {
            const appID = game.appid;
            const title = game.name;
            const playtime = game.playtime_forever;
            const response = fetch('/api/games', {
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