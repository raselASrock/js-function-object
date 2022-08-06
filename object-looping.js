var shopingCart = {
    books: 3,
    sunglass: 5,
    keyboard: 25,
    mouse: 20,
    pen: 48,
    shoes: 4,
}

var keys = Object.keys(shopingCart);
console.log(keys);
var values = Object.values(shopingCart);
console.log(values);

for(i = 0; i < keys.length; i++){
    // console.log(keys[i]);
    var propertyName = keys[i];
    var propertyValues = shopingCart[propertyName];
    // console.log(propertyName, propertyValues);
}


// **************for in loop **********************
for( var propertyName in shopingCart){
    var propertyValues = shopingCart[propertyName];
    console.log(propertyName, propertyValues);
}