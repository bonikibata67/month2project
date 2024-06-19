export interface User{
    Id:string,
    Email:string
    Name:string
    Password:string
    isDeleted:number
    isEmailSent:number
    Role:string
}


export interface Payload{
    Sub:string
    Name:string
    role:string
}
