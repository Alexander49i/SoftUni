import { main } from "../app.js";
import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { editGame, findGame, getAllGames } from "../gameRequests.js";
import { input } from "../requests.js";

const tamplateEdit = (getInput) => html`

<section id="edit-page" class="auth">
    <form id="edit" @submit=${getInput}>
        <div class="container">

            <h1>Edit Game</h1>
            <label for="leg-title">Legendary title:</label>
            <input type="text" id="title" name="title" value="">

            <label for="category">Category:</label>
            <input type="text" id="category" name="category" value="">

            <label for="levels">MaxLevel:</label>
            <input type="number" id="maxLevel" name="maxLevel" min="1" value="">

            <label for="game-img">Image:</label>
            <input type="text" id="imageUrl" name="imageUrl" value="">

            <label for="summary">Summary:</label>
            <textarea name="summary" id="summary"></textarea>
            <input class="btn submit" type="submit" value="Edit Game">

        </div>
    </form>
</section>
`
export const renderEdit = (ctx) => {

    
    getAllGames().then((games) => {

        let currGame = findGame(games)

        let fields = document.getElementsByTagName('input')

        fields[0].value = currGame.title
        fields[1].value = currGame.category
        fields[2].value = currGame.maxLevel
        fields[3].value = currGame.imageUrl
        
        document.querySelector('#summary').value = currGame.summary
        
    })

    const getInput = (e) => {

        e.preventDefault()

        let fields = e.currentTarget.getElementsByTagName('input')

        let title = fields[0].value
        let category = fields[1].value
        let maxlvl = fields[2].value
        let imageUrl = fields[3].value
        let summary = e.currentTarget.querySelector('#summary').value

        let editData = input([title, category, maxlvl, imageUrl, summary])

        if (editData != null) {

            editGame(editData).then((res) => {

                if (res.status == 200) {
                    
                    ctx.page.redirect('/details')
                }

            })

        }

    }
    render(tamplateEdit(getInput), main)
}
