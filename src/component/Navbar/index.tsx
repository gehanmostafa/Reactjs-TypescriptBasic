
import { FC } from "react";
 import './index.scss'

interface IProp {
    Islogin: boolean,
    setIslogin:(ele:boolean)=>void
}
const Navbar: FC<IProp> = ({Islogin , setIslogin}) => {

return(
    <>
        
        <ul className="list container">
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li className="lastItem">Contact</li>
            <button type="button"  className ="btnNav" onClick={()=>{setIslogin(!Islogin)}}> {(Islogin)  ? "login" : "logout"}</button>
        </ul>

  </>
)
}
export default Navbar