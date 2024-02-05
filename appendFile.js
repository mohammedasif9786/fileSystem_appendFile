let fileSystem = require('fs')


fileSystem.appendFile('append.txt',"your's file has been appended",(error)=>{

    if(error){
        throw error
    }
    console.log("congrats!! your's file is been appended")
})