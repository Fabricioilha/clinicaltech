import { NextPage } from "next";
import styled from "styled-components";
import Layout from "../components/Layout/Layout";

const Login: NextPage = ()=>{
    
    return(
        
        <MyLogin>
            <h1>Login Area</h1>
        </MyLogin> 
    )
}
export default Login
const MyLogin = styled.div`
    ${({theme})=> theme.container}
`