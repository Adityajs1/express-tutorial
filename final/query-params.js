const express = require('express')  
const app = express()
const { products } = require('./data')

app.get('/', (req, res)=>{
    res.json('<h1> My name is Aditya <a href = "/api/products">products</a>')
})

app.get ('/api/products', (req, res)=>{
   const newProducts = products.map((products)=>{
    const {id, name , image} = products;
    return (id , name , image)
   })
   res.json(newProducts)
})

// :productId id route param used for customised id's for a large data
app.get('/api/products/:productId',(req, res)=>{
    const {productId} = req.params
    const firstProduct = products.find((products)=>Number(productId))
    res.json(firstProduct)
    if(!firstProduct){
        res.status(404).send('Product does not exist')
    }
    return res.json(firstProduct)
})

app.get('/api/v1/query', (req, res)=>{
    console.log(req.query);
    const{search, limit} = req.query;
    let sortedProducts = [...products]
    
    if(search){
        sortedProducts = sortedProducts.filter((products)=>{
            products.name.startsWith(search)
        })
    if(limilt){
        sortedProducts = sortedProducts.slice(0, Number(limit))
    } 
    if (sortedProducts.length < 1){
        //res.status(200).send('Your search didnt matched!')
        return res.json().send({sucess : true, data: []})
    } 
    res.status(200).json(sortedProducts)  
    }
})


app.listen(5000, ()=>{
    console.log("Server is running on the port...");
    
})