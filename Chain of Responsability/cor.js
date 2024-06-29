class Rule{
    constructor(next = null){
        this.next = next
    }

    validate(password){
        if(this.next){
            this.next.validate(password)
        }
    }
}


class MinLenRule extends Rule{
    validate(password){
        if(password.lenght < 10){
            return false
        }
        if(this.next === null){
            return true
        } else{
            return this.next.validate(password)
        }
    }
}

class MaxLenRule extends Rule{
    validate(password){
        if(password.lenght > 15){
            return false
        }
        if(this.next === null){
            return true
        } else{
            return this.next.validate(password)
        }
    }
}

function main(){
    const rulechain = new MinLenRule(new MaxLenRule());

    var password = "12345678910";

    console.log(rulechain.validate(password));
}
main()