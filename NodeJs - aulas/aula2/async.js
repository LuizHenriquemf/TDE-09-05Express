

// --------------

const timeoutWithPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Meio")
        }, 3000)
    })
}

console.log("Antes")

timeoutWithPromise().then(value => {
    console.log(value)
}).catch(err => {
    console.log("Algo deu errado: ", err)
})

console.log("Depois")