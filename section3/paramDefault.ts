const show = (name: string, lastName: string, age: number = 32) => {
    return `se llama ${name} se apellida ${lastName} y tiene ${age} años`
}

console.log(show('crisian', 'rodriguez'))
console.log(show('camilo', 'rodriguez'))
