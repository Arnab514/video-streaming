import express from 'express'
import cors from 'cors'
import multer from 'multer'
import { v4 as uuidv4 } from 'uuid'

const app = express()

app.use(
    cors({
        origin : [
            "http://localhost:3000"
        ],
        credentials : true
}))

app.use((req , res , next) => {
    res.header("Access-Contro;-Allow-Headers" , "Origin , X-Requested-With , Content-Type , Accept")
})

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(express.static("uploads"))

app.get('/' , (req , res) => {
    res.json({message: "Hello Brother !!"})
})

app.listen(8000 , () => {
    console.log("Server is running at port 4000...")
})
