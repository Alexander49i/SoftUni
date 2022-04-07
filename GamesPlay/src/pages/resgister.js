import { main } from "../app.js";
import { render, html } from "../../node_modules/lit-html/lit-html.js";
import { input, register } from "../requests.js";
const tamplateRegister = (readRegIput) => html`
<section id="register-page" class="content auth">
    <form id="register" @submit=${readRegIput}>
        <div class="container">
            <div class="brand-logo"></div>
            <h1>Register</h1>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="maria@email.com">

            <label for="pass">Password:</label>
            <input type="password" name="password" id="register-password">

            <label for="con-pass">Confirm Password:</label>
            <input type="password" name="confirm-password" id="confirm-password">

            <input class="btn submit" type="submit" value="Register">

            <p class="field">
                <span>If you already have profile click <a href="/login">here</a></span>
            </p>
        </div>
    </form>
</section>

`


export const renderRegister = (ctx) => {

    const readRegIput = (e) => {

        e.preventDefault()
        let email = document.getElementById('email').value
        let password = document.getElementById('register-password').value
        let repass = document.getElementById('confirm-password').value

        let regData = input([email, password, repass])
        if (regData!=null) {

            register(regData).then((res) => {


                if (res.status!=200) {
                    return
                }
                ctx.page.redirect('/')
                
            })


        }


    }

    render(tamplateRegister(readRegIput), main)

}