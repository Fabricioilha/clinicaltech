import { faAdd, faAddressBook, faExclamationTriangle, faSignOut } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import Link from "next/link"
import styled from "styled-components"
import logo from '../../public/images/logo.png'

// COMPONENT // // COMPONENT // // COMPONENT // // COMPONENT // // COMPONENT //
const Head = ()=>{
    const SignOut = ()=>{}
    return(
        <MyHead>
            <Link href="/" className="llink">
                <a><Image src={logo} width={200} height={150} /></a>
            </Link>
            <div className="content">
                <div className="companyInfo">
                    <p>Bem vindo: Empresa Tal</p>
                    <p>CNPJ: 123.123.23-41</p>
                    <p>Telefone: 99 12345-6789</p>
                    <p>Rua Nome da Rua</p>
                    <p>500, Bairro, Cidade</p>
                </div>
                <FontAwesomeIcon icon={faSignOut} size="2x" onClick={SignOut} />
            </div>
        </MyHead>
    )
}

export default Head



// STYLESHEET // // STYLESHEET // // STYLESHEET // // STYLESHEET // // STYLESHEET // 
const MyHead = styled.section`
    height: 150px;
    display: flex;
    svg{
        cursor: pointer;
    }
    a{
        cursor: pointer;
    }
    icon{
    }
    .content{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-right: 2rem;
    }
    .companyInfo{
        padding: 1rem;
    }
`