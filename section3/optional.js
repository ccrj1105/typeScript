//parametros opcionales
var optional = function (name, lastname, age) {
    if (age) {
        console.log("se llame " + name + " su apellido es " + lastname + " y su edad es " + age);
    }
    else {
        console.log("se llame " + name + " su apellido es " + lastname);
    }
};
optional('cristian', 'rodriguez', 29);
optional('cristian', 'rodriguez');
