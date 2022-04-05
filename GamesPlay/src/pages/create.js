import { main } from "../app.js";
import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { input } from "../requests.js";
import { getGameOwnerId, postGame } from "../gameRequests.js";

const tamplateCreate = (getInput) => html`

<section id="create-page" class="auth">
    <form id="create" @submit=${getInput}>
        <div class="container">

            <h1>Create Game</h1>
            <label for="leg-title">Legendary title:</label>
            <input type="text" id="title" name="title" placeholder="Enter game title...">

            <label for="category">Category:</label>
            <input type="text" id="category" name="category" placeholder="Enter game category...">

            <label for="levels">MaxLevel:</label>
            <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1">

            <label for="game-img">Image:</label>
            <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo...">

            <label for="summary">Summary:</label>
            <textarea name="summary" id="summary"></textarea>
            <input class="btn submit" type="submit" value="Create Game">
        </div>
    </form>
</section>

`

export const renderCreate = (ctx) => {


    const getInput = (e) => {
        e.preventDefault()
        getGameOwnerId(e)
        let fields = e.currentTarget.getElementsByTagName('input')
        let title = fields[0].value
        let category = fields[1].value
        let maxlvl = fields[2].value
        let imageUrl = fields[3].value
        let summary = e.currentTarget.querySelector('#summary').value

        let createData = input([title, category, maxlvl, imageUrl, summary])
        if (createData != null) {
            postGame(createData, e).then((res)=>{
                
                if (res.status!=200) {
                    return
                }
                
                ctx.page.redirect('/')

            })
        }

    }

    render(tamplateCreate(getInput), main)

}