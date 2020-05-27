### Initialization
```sh
const client = require('<path-to-minesweeper-client/lib/minesweeper-connector);
let minesweeper = new Client(<api-base-url>)
```

### Data objects:
```sh
<user>: {
    "username": "<a-username",
    "password": "<a-password"
}

<game> = {
    "rows": <number>,
    "columns": <number>,
    "mines": <number>
}

<game-coordinates> = {
    "_id": "<game-id>",
    "x": <number>,
    "y": <number>
}
```

### CREATE USER 
```sh
#Returns a new user
await minesweeper.createUSer(<user>) 
```

### LOGIN
```sh
#Returns login credentials (JWT)
await minesweeper.login(<user>)
```

### CREATE GAME
```sh
#Returns a new Game
await minesweeper.createGame(<game>, JWT)
```

### FLAG CELL
```sh
#Flags a specific cell and returns the updated game
await minesweeper.flagCell(<game-coordinates>, JWT)
```

### QUESTION CELL
```sh
#Questions a specific cell and returns the updated game
await minesweeper.questionCell(<game-coordinates>, JWT)
```

### REVEAL CELL
```sh
#Reveals a specific cell and returns the updated game
await minesweeper.revealCell(<game-coordinates>, JWT)
```

### GET USER GAMES
```sh
#Returns all user games
await minesweeper.getUserGames(JWT)
```

### GET GAME BY ID
```sh
#Returns a specific game by id
await minesweeper.getGameByID(<game-id>, JWT)
```

### DELETE GAME
```sh
#Deletes user game and returns it
await minesweeper.deleteGame(<game-id>, JWT)
```
