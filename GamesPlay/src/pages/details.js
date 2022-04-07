import { main } from "../app.js";
import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { findGame, getAllGames, getComments, postComment} from "../gameRequests.js";

let gameOwnerId 
let userId
let token 


const tamplateDetails = (comments, game, getInput) => html`



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

        
            <!-- / -->

               <!-- Bonus ( for Guests and Users ) -->
        <div class="details-comments">
                    <h2>Comments:</h2>

                    ${comments.length>0
        
                    ?html`
                    <ul>
                        ${comments.map(comment=>{
                            return html`
                            <li class="comment">
                            <p>Content: ${comment.comment}</p>
                            </li>
                            `
                        })}
                        
                    </ul>
                    `

                    :html`<p class="no-comment">No comments.</p>`

                    }
                    
        </div>

            ${showHideCommentTextArea(getInput)}
        </div>

</section>

`


function showHideCommentTextArea(getInput) {

    let show = html `
    <article class="create-comment">
        <label>Add new comment:</label>
        <form class="form" @submit=${getInput}>
            
            <textarea name="comment" placeholder="Comment......"></textarea>
            <input class="btn submit" type="submit" value="Add Comment">
        </form>
    </article>`
    
    let hide = html`<div></div>` 

    if (gameOwnerId!=userId&&token!=null) {
        return show
    }
    return hide

}







export const renderDetails = (ctx) => {

    gameOwnerId = localStorage.getItem('gameOwnerId')
    userId = localStorage.getItem('id')
    token = localStorage.getItem('token')
    let currGame

    const getInput = (e) => {

        e.preventDefault()

        let content = document.getElementsByTagName('textarea')[0]

        postComment(content.value).then((res)=>{

            if (res.status==200) {
            content.value=''
            ctx.page.redirect('/details')
                
            }
            
            
        })
  
        
    }
    getAllGames().then((games) => {

        

        currGame = findGame(games)
        
        if (currGame==null) {
            return
        }

        
    }).then(()=>{

        getComments().then(res=>res.json()).then((comments)=>{
            
            render(tamplateDetails(comments,currGame,getInput), main)

        })
    })

   
}
