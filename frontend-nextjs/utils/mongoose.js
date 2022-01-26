// import {connect, connection} from 'mongoose'
const {MongoClient} = requiere ('mongodb')

const url = 'mongodb://localhost:27017'
const client = new MongoClient(url, {
    useUnifiedTopology: true
})

module.exports = async () => {
    await client.connect();
    return client.db(dnName)
}
// export async function dbConnect() {
//   const db =  await connect (process.env.MONGODB_URL)

//   console.log(db.connection[0].readyState)
// }

// connection.on("conneted", () => {
//     console.log("Mongodb is connected")
// })

// connection.on("error", (err) => {
//     console.log(err)
// })