
async function randomGame(event) 
{
    event.preventDefault();
    
    
    const steamCall = "http://steamcommunity.com/profiles/<id>/"
    const user_id = '76561198057426269';
    //const games = getOwnedGames(steamCall, user_id);
    console.log("getting random game")
  const response = await fetch(`/api/games/`, {
    method: "GET",
    // body: JSON.stringify({
        
    //     }),
    //     headers: {
    //     "Content-Type": "application/json",
    //     },
    });   
}

document.getElementById("random-game")
    .addEventListener("click", randomGame);






