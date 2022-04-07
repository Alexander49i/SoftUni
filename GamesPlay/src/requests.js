import { render } from "../node_modules/lit-html/lit-html.js";
import { main } from "./app.js";

export function request(methos, url, data) {
    const options = {
        method,
        headers:{}
    }
}

// URLs
let baseURL = 'http://localhost:3030'
let loginPath = '/users/login'
let regPath = '/users/register'
let logoutPath = '/users/logout'

// Render
export function renderPage(tamplate) {
    render(tamplate(), main)
}

//Logout
export function logout() {

    let token = localStorage.getItem('token')

    return fetch(baseURL + logoutPath, {
        headers: {

            'X-Authorization': token
        },
    })

}

//Login
export function login(fields) {

    let logged = false
    return fetch(baseURL + loginPath, {
        headers: {

            'Content-Type': 'application/json'
        },
        method: 'POST',

        body: JSON.stringify({
            email: fields[0],
            password: fields[1]
        })
    }).then((res) => {
        if (res.status == 200) {
            logged = true
            return res.json()

        }
    }).then((res) => {
        if (logged) {

            localStorage.setItem('token', res.accessToken)
            localStorage.setItem('id', res._id)
        }

    })

}

//Registration
export function register(fields) {

    return fetch(baseURL + regPath, {
        headers: {

            'Content-Type': 'application/json'
        },
        method: 'POST',

        body: JSON.stringify({
            email: fields[0],
            password: fields[1]
        })
    })

}

// Input
export function input(fields) {

    for (let i = 0; i < fields.length; i++) {

        if (fields[i] == '') {
            return null
        }

    }
    if (fields.length == 3) {
        if (fields[1] != fields[2]) {
            return null

        }

    }
    return fields
}