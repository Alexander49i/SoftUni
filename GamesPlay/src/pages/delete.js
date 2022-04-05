import { deleteGame } from "../gameRequests.js";

export const deleteMsg = (ctx) => {


    if (window.confirm("Do you really want to leave?")) {

        deleteGame().then((res) => {
            if (res.status == 200) {

                ctx.page.redirect('/')
            }

        })
    }

} 