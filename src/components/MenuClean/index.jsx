import {MyButton, MyMenu} from "./styles" 
import { useNavigate } from "react-router-dom";
function SecCenter(){
    const navigate = useNavigate();
    return(
        <MyMenu>
            <img onClick={() => navigate("/")} src="/logo.jpeg" alt="logo" />
        

            <div>
             <MyButton to={"/"}>Voltar ao inicio</MyButton>
            </div>
           
        </MyMenu>
    )
}



export default SecCenter;