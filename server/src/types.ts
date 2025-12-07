type SubscriptionType = "basic" | "premium" | "none"

export interface User {
    id:string, 
    email:string, 
    password:string, 
    subscription: SubscriptionType
}