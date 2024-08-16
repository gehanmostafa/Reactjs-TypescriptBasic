import { IUser } from  "../component/Register/index"
interface IForminput {

    label: string,
    type: string,
    id: string,
    name: keyof IUser

}

 export const FormInputFunction:IForminput [] =[{
    label: "username",
    type: "text",
    id: "username",
    name:  "username"

}, {
    label: "Email",
    type: "email",
    id: "email",
    name: "email",

},{
    label: "password",
    type: "password",
    id: "password",
    name: "password",

},{
    label: "address",
    type: "address",
    id: "address",
    name: "address",

}
]