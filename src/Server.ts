import app from '../App'
import path from 'path'
require("dotenv").config({path: path.resolve(__dirname, "../.env")})
const port  = process.env.PORT || 3333

app.listen(port,()=>{
    console.log(`Servidor rodando na porta ${port}`)
})