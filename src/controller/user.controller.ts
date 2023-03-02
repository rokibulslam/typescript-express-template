import { Request, Response } from 'express'


export function createUserHandler(req:Request, res:Response) {
    try {
        
    } catch (error) {
        return res.status(409).send(error.message)
    }
}