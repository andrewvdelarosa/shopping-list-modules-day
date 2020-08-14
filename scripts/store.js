import item from './item.js'
import shoppingList from './shopping-list.js';

const items = [];

const hideCheckedItems = false;

function addItem(name) {
    try {
        item.validateName(name)
            this.items.push(name)
    } catch (error) {
        console.log(`an error occured: ${error}`);
    }
}
// number 5
function findById(id) {
   found = items.find(id => items.id === id);
   return found;
}



console.log()
// number 5
function findAndToggleChecked(id) {
    this.findById(id)
    return id.checked = true;
}
//number 5
function findAndUpdateName(id, newName) {
    try {
        item.validateName(name)
        findById(id)
        append(name)
    } catch (error) {
        console.log(`an error occured in find and update name ${error}`)
    }
}
// number 5
function findAndDelete(id) {
    findById(id)
    this.items.splice(id)
}

export default {
    addItem,
    findById,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
    items,
    hideCheckedItems
};

console.log(items)