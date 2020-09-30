const express=require('express')
const cors=require('cors')
const bodyparser=require('body-parser')
const app=express()
const port=process.env.PORT||9000
const school=require('./1.json')
school.pop()
school.shift()
console.log(school)
app.use(cors())
app.use(bodyparser.json())

app.get('/schooldetails',(req,res)=>{
    res.status(200).send(school)
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})