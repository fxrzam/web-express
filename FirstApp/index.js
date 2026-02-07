const express = require("express");
const app = express();

app.listen(3000, () =>{
    console.log('listening on port 3000')
})


app.get('/r/:subreddit' ,(req, res)=>{
    const {subreddit} = req.params;
    res.send(`<h1> browsing the ${subreddit} subreddit`)
})

app.get('/r/:subreddit/:postID' ,(req, res)=>{
    const {subreddit, postID} = req.params;
    res.send(`<h1>veiwing the post ID:${postID} in the subreddit of ${subreddit}</h1>`)
})

app.get('/cats' ,(req, res)=>{
    res.send('meow')
})
app.get('/dogs' ,(req, res)=>{
    res.send('woof')
})
app.get('/' ,(req, res)=>{
    res.send('this is the home page')
})

app.use((req, res)=>{
    res.send('<h1>this is my web page</h1>')
})




