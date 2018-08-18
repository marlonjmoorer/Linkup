const app = require('express')()
const PORT = process.env.PORT || 5000
const server=app .listen(PORT, () => console.log(`Listening on ${ PORT }`))
const io=require('socket.io')(server)
const path = require('path')
const Bundler = require('parcel-bundler');
const file = path.join(__dirname,"..","client","index.html")
const bundler= new Bundler(file,{watch:true, sourceMaps: true})
app.use(bundler.middleware())






