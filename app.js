var obj = {
    name : "saad",
    age : 21
}

let {name,age} = obj
console.log(name)

var arr = ["saad",21]
let [name , age] = arr
console.log(name)

setTimeout(function(){
    console.log("num1")
},2000)
console.log("num2")
console.log("num3")


var r = new Promise(function(res,rej){
    var ok = "dedia"
    if(ok == "dedia"){
        res("han bhai dedia")
    }
    else{
        rej("nahi dia")
    }
})
r.then(function(data){
    console.log(data)
}).catch(function(err){
    console.log(err)
})
// console.log(r)


// arrow functions

// simple function

function hello(){
    console.log("hello")
}

// function expression

let hello = function(){
     console.log("")
}

let hello = (name,lname) => 
    console.log(`hello ${name}`)
    console.log("hello world")

hello()
let fun = (check) => {
    return new Promise((res, rej) => {

        if (check) {
            res("han bhai comp he")
        }
        else {
            rej("nahi")
        }
    })
}

let ok = (data) => {
    console.log(data)
}

let notOk = (err) => {
    console.log(err)
}

fun(false).then(ok).catch(notOk)
pro.then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})
console.log(pro)


// call back functions

let getdata = () => {
   return "hello Saad"
}

let setData = (a) => {
    console.log(a)
}

setData(getdata())
