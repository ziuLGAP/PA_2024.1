function Iterator(itens){
    this.itens = itens
    this.index = itens.length - 1
}

Iterator.prototype = {
    hasNext: function(){
        return this.index >= 0
    },
    next: function(){
        return this.itens[this.index--]
    }
}

const itens = [1, 2, 3, 4]
const iter = new Iterator(itens)
while(iter.hasNext()){
    console.log(iter.next())
}