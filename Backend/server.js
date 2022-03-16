const express = require("express")
const app = express()
const cors = require("cors")
const member = require("./router/member")
const user = require("./router/user")
const paket = require("./router/paket")
const transaksi = require("./router/transaksi")
const { login } = require("./router/login")
const path =require("path")
// const {auth} = require("./login")
// const {auth} = require("./member")
// const {auth} = require("./paket")
// const {auth} = require("./transaksi")
app.use(cors())
app.use("/laundry/api/member", member)
app.use("/laundry/api/user", user)
app.use("/laundry/api/paket", paket)
app.use("/laundry/api/transaksi", transaksi)
app.use("/laundry/api/auth", login)
// app.use(auth)

app.listen(8000, () => {
    console.log('Server run on port 8000');
})

app.use(
    `/paket_image`,
    express.static(path.join(__dirname, `paket_image`))
)