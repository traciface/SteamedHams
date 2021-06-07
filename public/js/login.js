async function loginForm(event) 
{
    event.preventDefault();
    const steamCall = "http://steamcommunity.com/profiles/<id>/"
    const user_id = '76561198057426269';
    //const games = getOwnedGames(steamCall, user_id);
  const response = await fetch(`/api/games/del`, {
    method: "DELETE",
    body: JSON.stringify({
        }),
        headers: {
        "Content-Type": "application/json",
        },
    }); 

    // currently fetching from local json file, needs to call API
    await fetch("/games.json")
    .then(response => {
    return response.json();
    })
    .then(data => {
        data.games.forEach(game => {
            const appID = game.appid;
            const playtime = game.playtime_forever;
            const response = fetch(`/api/games`, {
                method: "POST",
                body: JSON.stringify({
                    appID,
                    playtime
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
        });
    })
}
document.querySelector("#login-form")
    .addEventListener("submit", loginForm);
