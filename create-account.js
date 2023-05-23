function createAccount(pin, amount=0) {
  this.pin = pin
  this.amount = amount

  
  console.log(pin, amount)

  const checkBalance = (inputPin) => {
    if (inputPin === pin) {
      console.log(amount)
      return '$' + amount
    } else {
      console.log("Invalid PIN.")
      return "Invalid PIN."
    }
  };

  const deposit = (inputPin, inputAmount) => {
    if (inputPin !== pin) {
      console.log("Invalid PIN.")
      return "Invalid PIN."
    } else if (inputPin === pin && inputAmount > 0) {
      amount += inputAmount
      console.log(`Succesfully deposited $${inputAmount}. Current balance: $${amount}.`)
      return `Succesfully deposited $${inputAmount}. Current balance: $${amount}.`
    };
  };

  const withdraw = (inputPin, inputAmount) => {
    if (inputPin !== pin) {
      console.log("Invalid PIN.")
      return "Invalid PIN."
    } else if (inputPin === pin && inputAmount > amount) {
      console.log("Withdrawal amount exceeds account balance. Transaction cancelled.")
      return "Withdrawal amount exceeds account balance. Transaction cancelled."
    } else if (inputPin === pin && inputAmount > 0) {
      amount -= inputAmount
      console.log(`Succesfully withdrew ${inputAmount}. Current balance: $${amount}.`)
      return `Succesfully withdrew $${inputAmount}. Current balance: $${amount}.`
    };
  }

  const changePin = (inputPin, newPin) => {
    if (inputPin !== pin) {
      console.log("Invalid PIN.")
      return "Invalid PIN."
    } else if (inputPin === pin) {
      pin = newPin
      console.log('PIN successfully changed!')
      return 'PIN successfully changed!'
    }
  }

  return {
    checkBalance: checkBalance,
    deposit: deposit,
    withdraw: withdraw,
    changePin: changePin
  };
}

module.exports = { createAccount };


let account = createAccount("1234");
let bigAccount = createAccount("4321", 10000);

account.checkBalance('1234')
bigAccount.checkBalance('4321')
// account.deposit()
// account.withdraw()
// account.changePin()