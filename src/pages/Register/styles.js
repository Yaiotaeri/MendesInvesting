import styled from "styled-components";

export const BaseForm = styled.div`
    width:100%;
    height:calc(100vh - 5rem);
    display:flex;
    align-items:center;
    justify-content:center;

    h1{
        margin-bottom:1rem;
        color: #ffd900;
    }
    form{
        width:100%;
        max-width: 350px;
        border: 2px solid black;
        background: #002a65;
        height:auto;
        padding: 5px;
        display:flex;
        flex-direction:column;
        align-items:center; 
        border-radius:16px;
        box-shadow:5px 5px 5px #0000008a;

        div{
            display:flex;
            flex-direction:column;
            margin-bottom:1rem;
        }

        label{
            font-size:25px;
            color:white;
        }

        input{
            width:18rem;
            height:2.5rem;
            border-radius:12px;
            padding:5px;
            font-size: 18px;
        }

        button{
            width:12rem;
            height:2.5rem;
            border-radius:16px;  
            font-weight:bold;
            font-size:18px;
            cursor: pointer;  
            color:white;
            background:gold ;
            text-shadow: 0 0 25px #00fbff;
            transition: all 0.2s ease;
        }

        button:hover{
            transform:scale(1.06);
           
        }

        button:active{
            transform:scale(0.90);
        }
    }


`

export const DntDiv = styled.header`
    width:100%;
    display:flex;
    margin-bottom:1rem;
    align-items:center;
    justify-content:center;
    p{
        margin-right:0.5rem;
        font-size:16px;
        color:white
    }

    span{
        font-size:18px;
        font-weight:bold;
        cursor: pointer;
        color: gold;
        transition: all 0.2s ease;
    }

    span:hover{
        transform:scale(1.06);
    }

    span:hover:active{
        transform:scale(0.90);
    }
 
`