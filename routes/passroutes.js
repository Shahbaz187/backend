import { create} from "../controller/passcontroller.js"
import express from 'express'

const routes = express.Router()

routes.post('/create', create )

export default routes