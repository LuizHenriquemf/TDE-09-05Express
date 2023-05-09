let person = {
    name: "Igor",
    email: "test@gmail.com",
    age:60,
    workExperience: [
        {name: "Integrado"},
        {name: "UTFPR"},
        {name: "Padaria do vizinho"}
    ]
}

//console.log(person.name)
//console.log(person["name"])


/*let cpfs = [{
    teste: 1 },
   {teste: 2  
}]

console.log(cpfs[0]);*/


/*function isGreaterThan10(num) {
    if(num > 10){
        return "maior que 10";
    } else if(num === 10) {
        return "igual a 10";
    } else {
        return "menor que 10";
    }

    switch(num){
        case 10:
            return "10"
        case 9: 
            return "9"
        default:
            return "não conheço"    
    }
}

console.log(isGreaterThan10(9))*/


let names = ["Igor", "Pedro", "Luiz"]

names.forEach((name, idx) => {
    console.log(idx, name)
})

const forEach = (arr,callback) => {
    for(let i = 0; i< arr.length; i++){
        callback(arr[i], i, arr)
    }
}

forEach(names, (name))

const namesObj = names.map((name) => {
    return {
        name
    }
})

console.log(namesObj)

//Callback
/*const sum = (a, b, fn) => {
    const result = a + b;
    fn(result)
}

sum(1,2, (result) => {
    console.log(result)
})*/

/*function teste(names){
    for(let name of names){
        console.log(name)
    }
}

teste(names)*/


//teste(person); 

//console.log(person)