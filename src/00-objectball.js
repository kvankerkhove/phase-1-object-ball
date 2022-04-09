function gameObject() {
   return {
       home : {
           teamName : 'Brooklyn Nets',
           colors : ['Black', 'White'],
           players : {
               'Alan Anderson' : {
                   number : 0,
                   shoe : 16,
                   points : 22,
                   rebounds : 12,
                   assists : 12,
                   steals : 3,
                   blocks : 1,
                   slamDunk : 1,
               },

               'Reggie Evans' : {
                    number : 30,
                    shoe : 11,
                    points : 12,
                    rebounds : 12,
                    assists : 12,
                    steals : 12,
                    blocks : 12,
                    slamDunk : 7,
               },

               'Brook Lopez' : {
                    number : 11,
                    shoe : 17,
                    points : 17,
                    rebounds : 19,
                    assists : 10,
                    steals : 3,
                    blocks : 1,
                    slamDunk : 15,
               },

               'Mason Plumlee' : {
                    number : 1,
                    shoe : 19,
                    points : 26,
                    rebounds : 12,
                    assists : 6,
                    steals : 3,
                    blocks : 8,
                    slamDunk : 5,
               },

               'Jason Terry' : {
                   number : 31,
                   shoe : 15,
                   points : 19,
                   rebounds : 2,
                   assists : 2,
                   steals : 4,
                   blocks : 11,
                   slamDunks : 1,
               },

           }
       },
       
       away : {
        teamName : 'Charlotte Hornets',
        colors : ['Turquoise', 'Purple'],
        players : {
            'Jeff Adrien' : {
                number : 4,
                shoe : 18,
                points : 10,
                rebounds : 1,
                assists : 1,
                steals : 2,
                blocks : 7,
                slamDunk : 2,
            },

            'Bismak Biyombo' : {
                 number : 0,
                 shoe : 16,
                 points : 12,
                 rebounds : 4,
                 assists : 7,
                 steals : 7,
                 blocks : 15,
                 slamDunk : 10,
            },

            'DeSagna Diop' : {
                 number : 2,
                 shoe : 14,
                 points : 24,
                 rebounds : 12,
                 assists : 12,
                 steals : 4,
                 blocks : 5,
                 slamDunk : 5,
            },

            'Ben Gordon' : {
                 number : 8,
                 shoe : 15,
                 points : 33,
                 rebounds : 3,
                 assists : 2,
                 steals : 1,
                 blocks : 1,
                 slamDunk : 0,
            },

            'Brendan Haywood' : {
                number : 33,
                shoe : 15,
                points : 6,
                rebounds : 12,
                assists : 12,
                steals : 22,
                blocks : 5,
                slamDunks : 12,
            },
        }
       }


   }
}

const players = () => Object.assign({}, gameObject().home.players, gameObject().away.players)

const numPointsScored = playersName => players()[playersName].points;

console.log(numPointsScored('Brendan Haywood'))


const shoeSize = playersName => players()[playersName].shoe;

console.log(shoeSize('Jason Terry'))


const teamColors = teamName => {
    if (teamName === "Brooklyn Nets") {
        return `${gameObject().home.colors[0]} and ${gameObject().home.colors[1]}`;
    } else {
        return `${gameObject().away.colors[0]} and ${gameObject().away.colors[1]}`;
    }
}

console.log(teamColors("Brooklyn Nets"))

const teamNames = () => {
    teamArray = [];
    teamArray.push(gameObject().home.teamName, gameObject().away.teamName)
    return teamArray
}

console.log(teamNames());

 const homePlayers = (gameObject().home.players)
 const awayPlayers = (gameObject().away.players)

const playerNumbers = teamName => {
    const jerseyArray = []
    if (teamName === "Brooklyn Nets") {
        for(player in homePlayers) {
            jerseyArray.push(homePlayers[player].number)
        }
    } else {
        for(player in awayPlayers) {
            jerseyArray.push(awayPlayers[player].number)
        }
    }
    return jerseyArray
}

console.log(playerNumbers("Charlotte Hornets"))

const playerStats = playersName => players()[playersName]

console.log(playerStats("Alan Anderson"))
//At top
//const players = () => Object.assign({}, gameObject().home.players, gameObject().away.players)

const bigShoeRebounds = () => {
    const shoeArray = []
// iterate thru players and push all shoe sizes to an array
    for(const player in players()) {
        shoeArray.push(players()[player].shoe)
    }
 //Find largest shoe size    
    const largestShoe = Math.max(...shoeArray)
//Iterate thru players again and if largest shoe size matches, return rebounds     
    for(const player in players()) {
        if (players()[player].shoe === largestShoe)
        {
            return players()[player].rebounds
        }
    }
}

console.log(bigShoeRebounds())

const mostPointsScored = () => {
    const pointsScored = []

    for(const player in players()) {
        pointsScored.push(players()[player].points)
    }

    const mostPoints = Math.max(...pointsScored)

    for(const player in players()) {
        if (players()[player].points === mostPoints) {
            return player
        }
    }
}

console.log(mostPointsScored())

const winningTeam = () => {

    const totalPoints = team => {
        let total = 0
        for(const player in team) {
            total += team[player].points
        }
        return total
    }

    if (totalPoints(homePlayers) > totalPoints(awayPlayers)) {
        return gameObject().home.teamName
    } else if (totalPoints(awayPlayers) > totalPoints(homePlayers)) {
        return gameObject().away.teamName
    } else {
        return "Tied"
    }
}

console.log(winningTeam());

const playerWithLongestName = () => {
    //Create array of player names
    const arrayOfPlayers = Object.keys(players())
    //Use map method to transform array to an array of name lengths
    const nameLengthArray = arrayOfPlayers.map(player => player.split(" ").join("").length)
    //Use find method to find name with the longest length
    const longestNamePlayer = arrayOfPlayers.find(player => {
        return (player.split(" ").join("").length === (Math.max(...nameLengthArray)))
    })
    //return that player name
    return longestNamePlayer
}

console.log(playerWithLongestName())

//create function to find player with most steals
const playerWithMostSteals = () => {
    const steals = []

    for(const player in players()) {
        steals.push(players()[player].steals)
    }

    const mostSteals = Math.max(...steals)

    for(const player in players()) {
        if(players()[player].steals === mostSteals) {
            return player
        }
    }
}

//create function that takes two functions as parameters 
//player with longest name and player with most steals 
//and sets them equal to each other and returns true if they equal each other
const doesLongNameStealATon = (func, func2) => {
    if (func === func2) {
        return true
    }

}



console.log(doesLongNameStealATon(playerWithLongestName(), playerWithMostSteals()))

    // const pointsScored = []

    // for(const player in players()) {
    //     pointsScored.push(players()[player].points)
    // }

    // const mostPoints = Math.max(...pointsScored)

    // for(const player in players()) {
    //     if (players()[player].points === mostPoints) {
    //         return player
    //     }
    // }





    // const nameLength = []

    // for (const player of arrayOfPlayers) {
    //     nameLength.push(player.length)
    // }

    // const longestName = Math.max(...nameLength)

    // for(const player of arrayOfPlayers) {
    //     if ( === longestName) {
        //         return player
        //     }
        // }

    // for(const player in players()) {
    //     console.log(players()[player].length)
    //     nameLength.push(players()[player].length)
    // }

    // const longestName = Math.max(...nameLength)

    // for(const player in players()) {
    //     if (players()[player].length === longestName) {
    //         return player
    //     }
    // }





// let playersStatsArray = Object.keys(playerStats)
    // playersStatsArray.find(item => {
    //     if (item === 'points') {
    //         return item
    //     }
    // })

    // return teams.item;


