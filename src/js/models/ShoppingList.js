export default class ShoppingList {
    constructor(){
        this.items = [];
    }

    addItem (quantity, measure, food){
        const item = {
            id:this.items.length,
            quantity,
            measure,
            food
        };
        this.items.push(item);
    }

    deleteItem (id){
        this.items.splice(id, 1);

    }

    updateCount(id, newCount){
        this.items[id] = newCount;
    }
}