import express from 'express'
import barcodeRoutes from './routes/barcode.routes.js'
import qrRoutes from './routes/qr.routes.js'
import historyRoutes from './routes/history.routes.js'
import cors from 'cors'

const app = express() 

app.use(express.json({limit:"10kb"}))
app.use(cors())

//endpoints
app.use("/api",barcodeRoutes)
app.use("/api",qrRoutes)
app.use("/api",historyRoutes)

export default app 