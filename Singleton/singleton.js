let instance

class Wallet {
    constructor(){
        if (instance) {
            throw new Error("Essa carteira já existe")
        }
        this.wallet = 0
        instance = this
    }
    getWallet() {
        console.log(this.wallet)
    }
    addMoney(money) {
        if(isNaN(money)){
            throw new Error("Coloque valores numéricos")
        }
        this.wallet += money
    }
    pay(money) {
        if(isNaN(money)){
            throw new Error("Coloque valores numéricos")
        }
        this.wallet -= money
    }
}

const singletonWallet = new Wallet()

export default singletonWallet
