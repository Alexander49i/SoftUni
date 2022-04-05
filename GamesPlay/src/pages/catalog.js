import { main } from "../app.js";
import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { getAllGames,getGameOwnerId} from "../gameRequests.js";

const tamplateCatalog = (games) => html`

<section id="catalog-page">
    <h1>All Games</h1>

    ${games.length > 0

    ? html`${games.map(game=>{
        return html`
        <div class="allGames">
        <div class="allGames-info">
            <img src="${game.imageUrl}">
            <h6>${game.category}</h6>
            <h2>${game.title}</h2>
            <a href="/details" class="details-button" name="${game._id}" id="${game._ownerId}" 
            
            @click=${getGameOwnerId} 
            
            >Details</a>
        </div>

    </div>
        
        `
    })}
    `
    
    : html`
    
    <h3 class="no-articles">No articles yet</h3>
    `
    }

</section>
`

export const renderCatalog = () => {
    getAllGames().then((games)=>{
     
        render(tamplateCatalog(games), main)
    })
    
}