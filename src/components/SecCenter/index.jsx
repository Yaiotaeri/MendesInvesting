import {MyMenu, MyButton} from "./styles" 
import { Navigate } from "react-router-dom";
function Menu(){
    return(
        <>
        <MyMenu>
            <img src="/logo.jpeg" alt="logo" />
        

            <div>
             <MyButton to={"/"}>Voltar ao inicio</MyButton>
            </div>
           
        </MyMenu>
        </>
    )
}



export default Menu;