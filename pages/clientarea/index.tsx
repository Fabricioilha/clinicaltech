import { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";
import loading_infinity from '../../public/images/loading_infinity.svg';

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
            <MyClientArea>
                <div className="top">Topo</div>
                <div className="left">Esquerda</div>
                <div className="center">Center</div>
            </MyClientArea>    
        : 
        <LoadingScreen>
            <Image src={loading_infinity} width={300} height={200} />
        </LoadingScreen>
    )
}
export default ClientArea
const MyClientArea = styled.div`
    display: grid;
    grid-template-areas: 
        "top top top top top top"
        "left center center center center center"
    ;
    .top{
        grid-area: top;
        border: 1px solid black;
    }
    .left{
        grid-area: left;
        border: 1px solid black;
    }
    .center{
        grid-area: center;
        border: 1px solid black;
    }
`
const LoadingScreen = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color:${({theme})=> theme.colors.primary};
`