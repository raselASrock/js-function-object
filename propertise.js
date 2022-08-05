var shopingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}
var penCount= shopingCart.pen;
var penCount2 = shopingCart["pen"];
console.log(shopingCart);
console.log(penCount);
console.log(penCount2);
var propertise = Object.keys(shopingCart);
var propertyValues = Object.values(shopingCart);
console.log(propertise);
console.log(propertyValues);

var propertyName = "mouse";
var propertyValues = shopingCart[propertyName];
console.log(propertyValues);