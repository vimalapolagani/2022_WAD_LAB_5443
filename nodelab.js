var fs=require('fs');
fs.readFile("./text.txt","utf-8",function(err,data){
    if(err){
        console.log("error!");
    }
    else{
        console.log(data);
    }
});
fs.writeFile("./text.txt","Hello!",function(err){
    if(err){
        return console.log(err);
    }
    console.log("File saved succesfully:)");
});