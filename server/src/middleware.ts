import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { UUID } from "crypto";
import { error } from "console";
import { JWT_SECRET } from ".";
const jwt = require("jsonwebtoken")



console.log("ffffx")


// const app = express();
// app.use(cors());
// app.use(express.json());




export interface customerRequest extends Request {
    user?:{
        userId:string, 
        iat:any, 
        exp:any
    }
}

export function authMiddleware(req:customerRequest, res:Response, next:NextFunction ){

    const authHeader = req.headers.authorization

    const token = authHeader?.split(" ")[1]
    console.log("headerS: ", authHeader)
    console.log("authToken: ", token)

    if(!token){
        res.status(401).json({error:"No token"})
        return
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET)
        req.user = decoded
        next();
    } catch (error) {
        res.status(401).json({error:"Invalid tokenx"})
        return
    }
    


}

