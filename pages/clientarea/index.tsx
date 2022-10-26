import { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Head from "../../components/ClientArea/Head";
import MenuLeft from "../../components/ClientArea/MenuLeft";
import Footer from "../../components/Layout/Footer";
import Header from "../../components/Layout/Header";
import { SalesEquipment } from "../../MockData/SalesEquipment";
import loading_infinity from '../../public/images/loading_infinity.svg';

const ClientArea: NextPage = ()=>{
    const [logged, setLogged] = useState(false)
    const[ toShow, setToShow] = useState(1)

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
                <div className="top">{<Head />}</div>
                <div className="left">
                    {<MenuLeft />}
                </div>
                <div className="center">
                    Center
                </div>
            </MyClientArea>    
        : 
        <LoadingScreen>
            <Image src={loading_infinity} width={300} height={200} />
        </LoadingScreen>
    )
}
export default ClientArea
const MyClientArea = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 1fr 8fr;
    grid-template-areas: 
        "top top top "
        "left center center"
    ;
    padding-right: 2rem;
    .top{
        grid-area: top;
    }
    .left{
        grid-area: left;
    }
    .center{
        height: 80vh;
        grid-area: center;
        overflow-y: scroll;
        box-shadow: -5px 5px 10px #0000006f, -10px 10px 20px #413f03ba;
        border-radius: 10px;
        padding: .5rem;
        background-color: #d4d4d4;
    }
    .box1{
        height: 89vh;
    }
    .box2{
        height: 80vh;
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