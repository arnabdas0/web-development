const express = require("express");
const app = express();

// console.dir(app);
let port = 8080;
app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

// app.use((req, res)=>{
//     console.log("request recieved");
//     let code = "<h1>Fruits</h1><ul><li>apple</li><li>orange</li></ul>"
//     res.send(code);
// });

//get req
// app.get("/",(req, res)=>{
//     console.log("request recieved");
//     res.send("Hello, I am root.");
// });
// app.get("/fruits",(req, res)=>{
//     console.log("request recieved");
//     let code = "<h1>Fruits</h1><ul><li>apple</li><li>orange</li></ul>"
//     res.send(code);
// });
// app.get("*",(req, res)=>{
//     console.log("request recieved");
//     res.send("This path doesn't exists");
// });

// //post req
// app.post("/",(req, res)=>{
//     console.log("request recieved");
//     res.send("You send a post req to root");
// });

//get req with path parameter
app.get("/", (req, res) => {
    res.send("Hello, I am root.");
});
app.get("/:username/:id", (req, res) => {
    let {username, id} = req.params;
    res.send(`This account belongs to @${username} & id of ${id}`);
});

//query strings
app.get("/search", (req, res)=>{
    let {q} = req.query;
    res.send(`Search result: ${q}`);
})