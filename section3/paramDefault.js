var show = function (name, lastName, age) {
    if (age === void 0) { age = 32; }
    return "se llama " + name + " se apellida " + lastName + " y tiene " + age + " a\u00F1os";
};
console.log(show('crisian', 'rodriguez'));
console.log(show('camilo', 'rodriguez'));
