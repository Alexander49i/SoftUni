import { main } from "../app.js";
import { render, html } from "../../node_modules/lit-html/lit-html.js";
import { input, login } from "../requests.js";
const tamplateLogin = (readLoginInput) => html`
<section id="login-page" class="auth">
    <form id="login" @submit=${readLoginInput}>

        <div class="container">
            <div class="brand-logo"></div>
            <h1>Login</h1>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Sokka@gmail.com">

            <label for="login-pass">Password:</label>
            <input type="password" id="login-password" name="password">
            <input type="submit" class="btn submit" value="Login">
            <p class="field">
                <span>If you don't have profile click <a href="/register">here</a></span>
            </p>
        </div>
    </form>
</section>

`
export const renderLogin = (ctx) => {

    const readLoginInput = (e) => {

        e.preventDefault()
        let email = document.getElementById('email').value
        let password = document.getElementById('login-password').value
        let loginData = input([email, password])
        if(loginData!= null) {

            login(loginData).then((res) => {


                if (localStorage.getItem('token') == null) {
                    return
                } 
                   
                ctx.page.redirect('/')
            })

        }

    }

    render(tamplateLogin(readLoginInput), main)

}