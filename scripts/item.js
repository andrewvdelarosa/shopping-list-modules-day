export default {
    validateName, create
};


function validateName(name){
    if (!name)
     throw TypeError("Name must not be blank")
}


function create(name){
    let item = {
        id: cuid(),
        name: name,
        checked: false,
    }
    return item;
}



