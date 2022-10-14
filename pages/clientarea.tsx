import { NextPage } from "next";
import styled from "styled-components";
import Layout from "../components/Layout/Layout";

const ClientArea: NextPage = ()=>{
    const changeClass = ()=>{
        const span = document.querySelector("#spanId")
        span.classList.remove("span_center");
        span.classList.add("span_top");
    }
    return(
        <Layout>
            <MyClientArea>
                <h1>Area do CLiente</h1>
            </MyClientArea>    
        </Layout>
    )
}
export default ClientArea
const MyClientArea = styled.div`
    ${({theme})=> theme.container}
`