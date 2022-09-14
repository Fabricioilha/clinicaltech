import Image from "next/image"
import Link from "next/link"
import styled from "styled-components"
import logo from "../../public/images/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGlobe, faEnvelope} from "@fortawesome/free-solid-svg-icons"
import {faInstagram, faFacebook, faLinkedin} from "@fortawesome/free-brands-svg-icons"

// COMPONENT // // COMPONENT // // COMPONENT // // COMPONENT // // COMPONENT //
const Footer = ()=>{
    return(
        <MyFooter>
            <div className="container">
                <div className="grid">
                    <div className="col-1">
                        <Link href="/">
                            <a>
                                <Image src={logo} width={200} height={120} alt="logo" />
                            </a>
                        </Link>
                        <span className="span"> 
                            <FontAwesomeIcon icon={faGlobe} />
                            <p>www.clinicaltech.com.br</p>                                
                        </span>
                        <span className="span"> 
                            <FontAwesomeIcon icon={faLinkedin} />
                            <p>linkedin/ClinicalTech</p>                                
                        </span>
                        <span className="span"> 
                            <FontAwesomeIcon icon={faInstagram} />
                            <p>instagram/ClinicalTech</p>                                
                        </span>
                        <span className="span"> 
                            <FontAwesomeIcon icon={faFacebook} />
                            <p>facebook/ClinicalTech</p>                                
                        </span>
                        <span className="span"> 
                            <FontAwesomeIcon icon={faEnvelope} />
                            <p>clinicaltech@gmail.com</p>                                
                        </span>
                    </div>
                    <div className="col-2">
                        <h3>Nossos Valores</h3>
                        <ul>
                            <li>Experiência</li>
                            <li>Qualidade</li>
                            <li>Eficiência</li>
                            <li>Respeito</li>
                            <li>Profissionalizmo</li>
                            <li>Competência</li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <div className="map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29423.49549267717!2d-43.22830823695963!3d-22.80480053310227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99782c610b5699%3A0xc958ae1d35006b7d!2sIlha%20do%20Governador!5e0!3m2!1spt-BR!2sbr!4v1663132515230!5m2!1spt-BR!2sbr" width="100%" height="100%" style={{border:0}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>   
                </div>
            </div>
            <div className="copy">
                <span>2022 - Created By &copy;Fabricio Nascimento</span>
            </div>
            
        </MyFooter>
    )
}

export default Footer


// STYLESHEET // // STYLESHEET // // STYLESHEET // // STYLESHEET // // STYLESHEET // 
const MyFooter = styled.footer`
    background-color: ${({theme})=> theme.colors.black};
    padding: 2rem 0;
    & *{
        color: ${({theme})=> theme.colors.white};
    }
    .container{
        ${({theme})=> theme.container};
    }
    .copy{
        text-align: center;
        padding: 3rem;
    }
    .grid{
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        grid-template-areas: 
            "c1 c3 c2"
        ;
        align-items: center;
    }
    .span{
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    .col-1{
        grid-area: c1;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
        gap: 1rem;
        padding: 1rem;
    }
    .col-2{
        grid-area: c2;
        padding: 1rem;
        display: flex;
        flex-direction:column;
        align-items: center;
        justify-content: center;
        &>h3{
            text-transform: uppercase;
            margin-bottom: 2rem;
        }
        &>ul{
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding-left: 2rem;
        }
    }
    .col-3{
        grid-area: c3;
        padding: 1rem;
    }
    .map{
        border-radius: 10px;
        overflow: hidden;
        height: 300px;
    }
    @media only screen and (max-width: 880px) {
        .grid{
            grid-template-columns: 1fr 1fr;
            grid-template-areas: 
            "c3 c3"
            "c1 c2"
            ;
        }
    }
    @media only screen and (max-width: 500px) {
        .grid{
            grid-template-columns: 1fr;
            grid-template-areas: 
            "c3"
            "c2"
            "c1"
            ;
        }
        .col-1{
            align-items: center;
        }
    }
`