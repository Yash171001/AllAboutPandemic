import mongoose from "mongoose"
const connection = async () => {
    try {
        const URL = `mongodb+srv://user:codeforinterview@allaboutpendemic.asqmc.mongodb.net/AllAboutPendemic?retryWrites=true&w=majority`
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
        console.log("Database connected successfuly")
    } catch (error) {
        console.log("Error while connecting to MongoDB ", error)
    }

}
export default connection;