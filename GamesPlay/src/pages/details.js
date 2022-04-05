import { main } from "../app.js";
import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { getAllGames } from "../gameRequests.js";

let gameOwnerId
let currGameId
let userId

const tamplateDetails = (game) => html`

<section id="game-details">
    <h1>Game Details</h1>
    <div class="info-section">

        <div class="game-header">
            <img class="game-img" src="${game.imageUrl}" />
            <h1>${game.title}</h1>
            <span class="levels">${game.maxLevel}</span>
            <p class="type">${game.category}</p>
        </div>

        <p class="text">
            ${game.summary}
        </p>
        ${userId == gameOwnerId
            ? html`
        <div class="buttons">
            <a href="/edit" class="button">Edit</a>
            <a href="/delete" class="button" >Delete</a>
        </div>
        `
            : html`<div></div>`
        }


    </div>

</section>

`

export const renderDetails = () => {

    gameOwnerId = localStorage.getItem('gameOwnerId')
    currGameId = localStorage.getItem('gameId')
    userId = localStorage.getItem('id')

    
    getAllGames().then((games) => {
        let currGame
        let have = false
        for (const game in games) {
     
            if (games[game]._id == currGameId) {
                
                currGame = games[game]
                have = true

            }

        }

        if (have == false) {
            return
        }
   


        render(tamplateDetails(currGame), main)
       
    })

}