const express = require('express')
const path = require('path')
const PORT = process.env.port || 3000;
const HOSTNAME='127.0.0.1'
const connection = require('./connection')
const temp = require('./measurement')
var cors = require('cors')
const app = express()

connection()
app.use(express.json());
app.use(express.static("dist"));
app.use('/public', express.static(__dirname + '/public'));

var corsOptions = {
    origin: '*'
}

app.use(cors())

app.get('/', (req, res) => {
    //res.send('hello world')
    res.json('Hello from Express Server!')
    })
   
app.get('/welcome', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/index.html'));

    })


app.post('/temp',(req,res)=>{
    const data= new temp(req.body)
    data.save()
    .then(temp=>
        {
            console.log('temp saved!',temp)
            res.json({sucess:true, temp})
        })
    .catch(err=> console.log(err))
})
app.get("/temps", async (req, res) => {
    try {
        const temps = await temp.find()
        res.status(200).json(temps)
    } catch (error) {
       
        res.status(400).send({ "code": 400, "method": "get", "message": error.name })
    }

})
app.listen(PORT)
console.log('Server is working on http://'+HOSTNAME +":"+ PORT)