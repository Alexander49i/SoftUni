let token = localStorage.getItem('token')

export function getAllGames() {

    return fetch('http://localhost:3030/data/games?sortBy=_createdOn%20desc').then(res => res.json())

}

export function getComments() {

    let gameId = localStorage.getItem('gameId')

    return fetch(`http://localhost:3030/data/comments?where=gameId%3D%22${gameId}%22`)

}

export function uni(methodComm,  ) {
    
}

export function postComment(comment) {

        let token = localStorage.getItem('token')
        let gameId = localStorage.getItem('gameId')

      return fetch('http://localhost:3030/data/comments', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'X-Authorization': token
          },
          body: JSON.stringify({
            gameId,
            comment
          })
  
      })
  }


export function findGame(games){

    let currGame
    let currGameId = localStorage.getItem('gameId')

    for (const game in games) {
     
        if (games[game]._id == currGameId) {
            
            currGame = games[game]
            

        }

    }
    return currGame

}

export function getGameOwnerId(e) {

    localStorage.setItem('gameOwnerId', e.currentTarget.id)
    localStorage.setItem('gameId', e.currentTarget.name)

}


export function postGame(fields) {

  let token = localStorage.getItem('token')

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
    let token = localStorage.getItem('token')

    return fetch('http://localhost:3030/data/games/' + gameId, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },

    })

}
