import { NextFunction, Request, Response, Router } from "express";
import { JWT_SECRET, usersMemory } from "..";
import { authMiddleware, customerRequest } from "../middleware";
const jwt = require("jsonwebtoken")
const router = Router();


router.post("/register", (req:Request, res:Response) => {
    const {email, password, subscription, createdAt} = req.body

    if(!email || !password || !subscription){
        res.status(400).json({message:"Missing info"})
        return
    }

    try {
        const user = {
            id:crypto.randomUUID(),
            email, 
            password, 
            subscription, 
            createdAt:Date.now()
    
        }
        usersMemory.push(user)
        
        res.status(200).json({message: "user¬ create", user})
    } catch (error:any) {

        res.status(401).json({error:error.message})
    }
console.log("user: ", usersMemory)
    

})


router.post("/login", (req:Request, res:Response) => {

    const {email, password}:{email:string, password:string} = req.body;

    if(!email || !password){
        res.status(400).json({message:"missing fields"})
        return;
    }

    const logged = usersMemory.find((user) => user.email == email && user.password == password)


    if(logged){
        const token = jwt.sign({userId:logged.id}, JWT_SECRET, {expiresIn:"1h"})
        console.log("token: ", token)
         res.status(200).json({user:{email, id:logged.id},token})
       
    }else{
         res.status(301).json({message:"Wrong credentials."})
        return;
    }

})


router.get("/profile", authMiddleware, async (req:customerRequest, res:Response) => {

    console.log("req => ", req.headers.authorization)

    console.log("req: ", req.user?.userId)

 
        
    const user = usersMemory.find((user) => user.id == req.user?.userId)

    try {
        res.status(201).json({user})
        return
    } catch (error) {

        console.log("error: ", error)
    }
})


router.put("/subscription", async (req:Request, res:Response) => {

    const {id, subscription} = req.body

    const user = usersMemory.find((usr) => usr.id == id)

    if(!user){
        res.status(401).json({message:"User not found"})
        return
    }

    user.subscription = subscription

     res.status(201).json({message:"User Updated successfuly", user})
     return
    



})

router.get("/print", (req:any, res:any) => {
    console.log("userS: ", usersMemory)

    return res.send(usersMemory)
    
})



// router.get("/profile", authMiddleware,async (req: Request, res:Response) => {


// })

const userRoute = router
export default userRoute;