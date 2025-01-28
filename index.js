// create 3 files using writeFile() 
// Index122.js 
// Index23r.js 
// Index24r.js 
// We have to use writeFile() once 

// And delete the above files using unlink() method. We have to use the method only once and delete all the files






let fs = require("fs")


// creation 


// let arr = ["Index122.js","Index23r.js","Index24r.js"]

// arr.forEach((arr)=>{
// fs.writeFile(`${arr}`,`"i am pradeep"`,"utf-8",(err)=>{
//     if(err){
//         console.log(err);
        
//     }else{
//         console.log("file created succesfully");
        
//     }
// })
// })


//  deletion


let arr = ["Index122.js","Index23r.js","Index24r.js"]
arr.forEach((arr)=>{
fs.unlink(`${arr}`,(err)=>{
    if(err){
        console.log(err);
        
    }else{
        console.log("deleted");
        
    }
})
})













































// trail 1



// let fs = require("fs")

// let arr = ["Index122.js","Index23r.js","Index24r.js"]

// arr.forEach((arr)=>{

//     fs.writeFile(`./${arr}`,"i am pradeep","utf-8",(err)=>{

//     if(err){
//         console.log(err);
        
//     }else{
//         console.log("file created");
        
//     }
// })


// })



// fs.unlink("./Index24r.js",(err)=>{
//     if(err){
//         console.log(err);
        
//     }else{
//         console.log("deleted");
        
//     }
// })

