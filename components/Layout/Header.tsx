import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import styled from "styled-components"
import logo from "../../public/images/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBarChart, faArrowAltCircleUp} from "@fortawesome/free-regular-svg-icons"

// COMPONENT // // COMPONENT // // COMPONENT // // COMPONENT // // COMPONENT //
const Header = ()=>{
    const [showMenu, setShowMenu] = useState(false)
    const setMargin = () =>{
        showMenu? setShowMenu(false) : setShowMenu(true)
    }
    useEffect(()=>{ 
        setShowMenu(false) 
    },[])

    return(
        <MyHeader>
            <div className="container">
                <Link href="/">
                    <a><Image src={logo} width={300} height={200} alt="logo" /></a>
                </Link>
                <p onClick={setMargin} className="menuBtn"><FontAwesomeIcon icon={showMenu? faArrowAltCircleUp : faBarChart }/>Menu</p>
                <div className="menu">
                    <div className="menulist" style={{ margin:`${showMenu? "0px": "-150px"}`}}>
                        <ul>
                            <Link href="/#manutencao"><li>Manutenção</li></Link>
                            <Link href="/#vendas" ><li>Vendas</li></Link>
                            <Link href="/#team" ><li>Equipe</li></Link>
                            <Link href="/#contact" ><li>Contato</li></Link>
                            <Link href="/clientarea"><li>Area do Cliente</li></Link>
                        </ul>
                    </div>
                </div>
                <ul>
                    <Link href="/#manutencao"><li>Manutenção</li></Link>
                    <Link href="/#vendas" ><li>Vendas</li></Link>
                    <Link href="/#team" ><li>Equipe</li></Link>
                    <Link href="/#contact" ><li>Contato</li></Link>
                    <Link href="/clientarea"><li>Area do Cliente</li></Link>
                </ul>
            </div>
        </MyHeader>
    )
}

export default Header




// STYLESHEET // // STYLESHEET // // STYLESHEET // // STYLESHEET // // STYLESHEET // 
const MyHeader = styled.header`
    background-color: ${({theme})=> theme.colors.white};
    .container{
        ${({theme}) => theme.container};
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 1rem;
    }
    ul{
        display: flex;
        list-style: none;
    }
    li{
        margin: 0 0.5rem;
        padding: 0.6rem;
        border-radius: 3px;
        cursor: pointer;
        transition: all ease .3s;
        &:hover{
            background-color: ${({theme}) => theme.colors.tertiary};
            color: ${({theme}) => theme.colors.white};
        };
    }
    .menu{
        position: relative;
        display: none;
        width: 100%;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        overflow: hidden;
        .menulist{
            transition: all ease .5s;
            width: 100%;
        }
        .menulist>ul{
            margin-top: 1rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: start;
            gap: 1rem;
        }
        .menulist li{
            text-transform: uppercase;
        }
    }
    .menuBtn{
        display: none;
        top: 0;
        padding: 0.5rem 3rem;
        background-color: ${({theme}) => theme.colors.secondary};
        color:  ${({theme}) => theme.colors.white};
        cursor: pointer;
        border-radius: 5px;
        box-shadow: 0 0 5px #0000008d;
        z-index: 1;
        align-items: center;
        gap: 1rem;
    }
    @media only screen and (max-width: 880px) {
        .container{
            flex-direction: column;
        }
    }
    @media only screen and (max-width: 580px) {
        .container>ul{
            display: none;
        }
        .menu{
            display: flex;
        }
        .menuBtn{
            display: flex;
        }
    }
`