import Image from "next/image"
import styled from "styled-components"
import banhomaria from '../../public/images/banhomaria.jpg'
import banhomaria2 from '../../public/images/banhomaria.png'
import centribio from '../../public/images/centribio.jpg'
import autoclave from '../../public/images/autoclave.jpg'
import microscopio from '../../public/images/microscopio.jpg'
import estufa from '../../public/images/estufa.png'
import contador from '../../public/images/contador.jpg'
import capela from '../../public/images/Capela.jpg'

// COMPONENT // // COMPONENT // // COMPONENT // // COMPONENT // // COMPONENT //
const Hero = ()=>{
    return(
        <MyHero>
            <div className="container">
                <div className="Aside">
                    <h2>Clinical Tech - Assistência Técnica Especializada</h2>
                    <div className="AsideText">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas blanditiis nulla tempora possimus facere saepe omnis aperiam sit, repellendus error veniam similique illo, dolore nostrum officiis ex reprehenderit eius! Perferendis!
                    </div>
                </div>
                <div className="Bside">
                    <h2>Fazemos manutenção em:</h2>
                    <div className="BsideText">
                        <ul>
                            <li>Banho Maria</li>
                            <li>Centrífuga</li>
                            <li>Microscópio</li>
                            <li>Estufa</li>
                            <li>Contador de Célula</li>
                            <li>Agitadores mecânicos e magnéticos</li>
                            <li>Autoclave</li>
                            <li>Capela de fluxo laminar</li>
                            <li>Entre outros</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="equipment">
                <div className="images">
                    <Image src={banhomaria} width={121} height={120} />
                    <Image src={banhomaria2} width={121} height={120} />
                    <Image src={centribio} width={121} height={120} />
                    <Image src={autoclave} width={121} height={120} />
                    <Image src={microscopio} width={121} height={120} />
                    <Image src={estufa} width={121} height={120} />
                    <Image src={capela} width={121} height={120} />
                    <Image src={contador} width={121} height={120} />
                    <Image src={banhomaria} width={121} height={120} />
                    <Image src={centribio} width={121} height={120} />
                </div>
            </div>
        </MyHero>
    )
}

export default Hero


// STYLESHEET // // STYLESHEET // // STYLESHEET // // STYLESHEET // // STYLESHEET // 
const MyHero = styled.section`
    //background-color: ${({theme}) => theme.colors.tertiary};
    min-height: 50vh;
    & .container{
        ${({theme})=> theme.container}
        padding: 1.5rem 0.5rem;
        display: flex ;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
        h2{
            margin: 2rem 0;
        }
    }
    .Aside, .Bside{
        width: 30rem;
        padding: 1rem;
    }
    .AsideText{
        text-transform: uppercase;
        letter-spacing: 4px;
        line-height: 1.5rem;
    }
    .BsideText{
        font-size: 1.3rem;
    }
    .equipment{
        overflow: hidden;
        padding: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        & .images{
            display: flex;
            flex-wrap: nowrap;
            gap: 3rem;
        }
    }
    
`