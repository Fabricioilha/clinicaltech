import { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Layout from "../components/Layout/Layout";
import loading_infinity from '../public/images/loading_infinity.svg'

const ClientArea: NextPage = ()=>{
    const [logged, setLogged] = useState(false)

    const isLogged = async()=>{
        setTimeout(() => {
            setLogged(true)
        }, 1000);
    }

    useEffect(()=>{
        isLogged()
    },[])

    return(
        logged?
            <Layout>
                <MyClientArea>
                    <h1>Area do CLiente</h1>
                </MyClientArea>    
            </Layout>
        : 
        <LoadingScreen>
            <Image src={loading_infinity} width={300} height={200} />
        </LoadingScreen>
    )
}
export default ClientArea
const MyClientArea = styled.div`
    ${({theme})=> theme.container}
`
const LoadingScreen = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color:${({theme})=> theme.colors.primary};
`