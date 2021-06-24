const cartaPostres = (postre: string, ...frutas: string[]): void => {
    console.log(`el postre es ${postre} y tienes ${frutas}`)
}

cartaPostres('postre1', 'naranja','platano','fresa')