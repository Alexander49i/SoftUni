import { render, html } from "../node_modules/lit-html/lit-html.js";
const header = document.getElementsByTagName('header')[0]

const tamplateNavigation = () => html`
<h1><a class="home" href="/">GamesPlay</a></h1>
<nav>
    <a href="catalog">All games</a>
    ${guestOrUser(tamplateUser, tamplateGuest)}
</nav>


`
const tamplateUser = html`
    <div id="user">
        <a href="/create">Create Game</a>
        <a href="/logout">Logout</a>
    </div>

`
const tamplateGuest = html`
    <div id="guest">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
    </div>

`

function guestOrUser(tamplateUser, tamplateGuest) {
    if (localStorage.getItem('token') != null) {
        return tamplateUser
    } else {
        return tamplateGuest
    }
}


export const renderNaviation = (ctx, next) => {

    render(tamplateNavigation(), header)
    next()
}
