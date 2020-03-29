import '@babel/polyfill'
import express from 'express'
import path from 'path'
import cors from 'cors'
import usersRoute from './src/server/routes/usersRoute'
import adminRoute from './src/server/routes/adminRoute'
import tripRoute from './src/server/routes/tripRoute'
import busRoute from './src/server/routes/busRoute'
import bookingRoute from './src/server/routes/bookingRoute'

const app = express()
app.use(cors())

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/api/v1', usersRoute)
app.use('/api/v1', adminRoute)
app.use('/api/v1', tripRoute)
app.use('/api/v1', busRoute)
app.use('/api/v1', bookingRoute)

app.use(express.static(path.join(__dirname, 'build')))
const serverPort = process.env.PORT || 8080
const serverHost = '0.0.0.0'

app.listen(serverPort, serverHost, () => {
  console.log('Listening on port %d', serverPort)
})
