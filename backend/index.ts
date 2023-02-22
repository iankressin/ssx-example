import dotenv from 'dotenv'
import { SSXServer, SSXExpressMiddleware } from '@spruceid/ssx-server'
import express from 'express'
import cors from 'cors'

dotenv.config()

const app = express()
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173' 
}))

const ssx = new SSXServer({
    signingKey: 'secret_key'
})

app.use(SSXExpressMiddleware(ssx))

app.listen(8000, () => console.log('Listening...'))

