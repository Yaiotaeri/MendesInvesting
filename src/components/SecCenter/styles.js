import styled from "styled-components";
import {Link} from "react-router-dom";
export const MyMenu = styled.header`
    width: 100%;
    height: 5rem;
    display:flex;
    align-items:center;
    padding: 10px;
    justify-content:space-between;
    box-shadow:5px 5px 5px #0000008f;
    img{
        width: 6.8rem;
        border-radius:16px;
    }

    div{
        display:flex;

    }
`

export const MyButton = styled(Link)`
    width:10rem;
    height:2.5rem;
    border-radius:10px;
    background: #002a65;
    color: #eaeaea;
    font-size:20px;
    font-weight:bold;
    text-decoration:none;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:0.5rem;
    transition: all 0.2s ease;

    &:hover{
        transform:scale(0.90);
        background: #012455;
    }
`