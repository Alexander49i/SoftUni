let token = localStorage.getItem('token')

export function getAllGames() {

    return fetch('http://localhost:3030/data/games?sortBy=_createdOn%20desc').then(res => res.json())

}



export function getGameOwnerId(e) {

    localStorage.setItem('gameOwnerId', e.currentTarget.id)
    localStorage.setItem('gameId', e.currentTarget.name)

}


export function postGame(fields, e) {

    //getGameOwnerId(e)

    return fetch('http://localhost:3030/data/games', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({
            title: fields[0],
            category: fields[1],
            maxLevel: fields[2],
            imageUrl: fields[3],
            summary: fields[4]
        })

    })
}

export function editGame(fields) {

    let gameId = localStorage.getItem('gameId')

    return fetch('http://localhost:3030/data/games/' + gameId, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({
            title: fields[0],
            category: fields[1],
            maxLevel: fields[2],
            imageUrl: fields[3],
            summary: fields[4]
        })

    })

}

export function deleteGame() {

    let gameId = localStorage.getItem('gameId')

    return fetch('http://localhost:3030/data/games/' + gameId, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },

    })

}