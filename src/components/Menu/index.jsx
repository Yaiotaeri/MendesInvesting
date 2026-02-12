import {MyMenu, MyButton} from "./styles" 
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react"
import { supabase } from "../../supabaseClient";


function Menu(){
    const navigate = useNavigate();

    const [user, setUser] = useState(null)

    useEffect(()=>{
        supabase.auth.getUser().then(({data}) =>{
            setUser(data.user)
        })

        const {data: listener } = supabase.auth.onAuthStateChange(
            (_event, session) =>{
                setUser(session?.user ?? null)
            }
        )

    }, [])

    async function handleLogout(){
        const {error} = await supabase.auth.signOut();

        if(error){
            alert("erro ao sair", error.message)
        } else{
            navigate("/login")
        }
    }

    return(
        <MyMenu>
            <img onClick={() =>navigate("/")}  src="/logo.jpeg" alt="logo" />
        

            <div>

            {user ?(
                <>
                <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                <span style={{color: "#000", fontWeight: "bold"}}>
                    {user.email}
                </span>
                <button style={{width:"4rem", height:"2rem", background:"red", color:"white", fontWeight:"bold",marginLeft:"0.5rem", borderRadius:"10px",
                    cursor:"pointer"
                }} onClick={handleLogout}>Sair</button>
                </div>
                </>
            ) : (
                <>
                <MyButton to={"/login"}>Login</MyButton>
                <MyButton to={"/register"}>Register</MyButton>
                </>
            )}

             
            </div>
           
        </MyMenu>
    )
}



export default Menu;