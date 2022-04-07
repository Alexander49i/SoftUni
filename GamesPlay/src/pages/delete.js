import { deleteGame } from "../gameRequests.js";

export const deleteMsg = (ctx) => {


    if (window.confirm("Please confirm")) {

        deleteGame().then((res) => {
            if (res.status == 200) {

                ctx.page.redirect('/')
                
            }

        })
    }
} 