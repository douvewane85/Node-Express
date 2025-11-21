import http from 'http'
const server=http.createServer((request,response)=>{
    
   response.writeHead(200,{
    "content-type":"application/json",
    accept:"application/json"
   })
   response.end(JSON.stringify(
    { 
      id: 1, 
       name: "Alice", 
       email: "alice@mail.com" ,
       password: "1234"
      
     }
   ))
})

server.listen(3000,()=>console.log("Listen sur le port 3000..."));
