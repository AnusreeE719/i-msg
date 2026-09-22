import express from 'express'
import 'dotenv/config'

const app = express();
const port = process.env.PORT
console.log("dburl: ", process.env.DB_URL)
app.listen(port, () => console.log("Server is running on PORT:", port))