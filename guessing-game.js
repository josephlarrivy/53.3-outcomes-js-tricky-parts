function guessingGame() {
  const target = Math.floor(Math.random() * 100)
  let guesses = 0;
  let gameOver = false

  

  return function (guess) {
    if (gameOver === true) {
      return "The game is over, you already won!"
    }
    
    guesses++;

    if (guess < target) {
      console.log(guess, 'is too low');
      return guess + ' is too low!'
    } else if (guess > target) {
      console.log(guess, 'is too high');
      return guess + ' is too high!'
    } else if (guess === target) {
      console.log('correct');
      gameOver = true
      return `You win! You found ${target} in ${guesses} guesses.`
    }
  };
}


module.exports = { guessingGame };


// let game = guessingGame()
// game(0)
// game(1)
// game(2)
// game(3)
// game(4)
// game(5)
// game(6)
// game(7)
// game(8)
// game(9)
// game(10)

