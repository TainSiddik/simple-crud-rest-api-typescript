import express, { Application } from "express"
import cors from "cors"
import "dotenv/config"
import db from "./config/dbConnection"
import userRoute from "./routes/userRoute"

const app: Application = express()
const PORT = process.env.PORT;

const dbSync = async (): Promise<void> => {
    try {
        await db.authenticate()
        console.log("Database has connected")
        // await db.sync()
    } catch (error) {
        console.log(`Database connection has failed ${error}`)
    }
}
dbSync()

app.use(cors())
app.use(express.json())
app.use("/api", userRoute)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
