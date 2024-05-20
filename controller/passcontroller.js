import { passModel } from '../models/passmodel.js'

export const create = async(req , res) =>{
    try {
        const passDB = new passModel(req.body)
        const savedData = await passDB.save()
        res.send(savedData)
    } catch (error) {
        console.log(error);
    }
}