function login(username){
    if(!username){
        console.log("please enter name")
        return
    }
    return `${username} has logged in`
}

console.log(login("hitesh"))   //call

//default username
// function login(username= "sam"){
//     if(!username){


const chai= function(){
    let name="priya"
    console.log(this)        //info about object
    console.log(this.name)   //undefined
}
chai()
console.log(this)     //{}
