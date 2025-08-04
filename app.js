const express = require('express')
const app = express()
// request=> middleware => response
const middleware = require('./middleware') //it will invoke the middleware in each route
// api/home/about/items

const authorize = require('./authorize')
app.use([middleware, authorize])

app.get('/',middleware, (req, res)=>{
    res.send('Home')
})
app.get('/about', (req, res)=>{
    res.send('About')
})
app.get('/api/products', (req, res)=>{
    res.send('Products')
})
app.get('/api/items', (req, res)=>{
    res.send('Items')
})
app.listen(5000, ()=>{
    console.log('Server is running on the port!');
}) 
