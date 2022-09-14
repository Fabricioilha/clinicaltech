import Image from "next/image"
import styled from "styled-components"
import user from '../../public/images/user.png'
import Mybutton from "../utils/MyButton"


// COMPONENT // // COMPONENT // // COMPONENT // // COMPONENT // // COMPONENT //
const Maintenance = ()=>{
    return(
        <MySection id="manutencao">
            <div className="userImage">
                <Image src={user} height={400} width={300} alt="boneco"/>
            </div>
            <div className="container">
                <div className="sections">
                    <div className="sectionSideA">
                        <h2>Manutenção corretiva</h2>
                        <br />
                        <ul>
                            <li>Reparo de placas e circuitos elétricos</li>
                            <li>Reparo em articulações mecânicas</li>
                            <li>Correção de ferrugem</li>
                            <li>Reconstituição de estruturas danificadas</li>
                            <li>Troca de peças danificadas</li>
                            <li>Rearranjo e fixação de cabos e conexões </li>
                            <li>Correção de velocidades, temperaturas e leituras</li>
                        </ul>
                    </div>
                    <div className="sectionSideB">
                        <h2>Manutenção preventiva</h2>
                        <br />
                        <ul>
                            <li>Limpeza de quipamentos</li>
                            <li>Lubrificação das partes mecânicas</li>
                            <li>Testes periódicos</li>
                            <li>Reposição de vedações e borrachas</li>
                            <li>Pintura preventiva</li>
                            <li>Ajustes finos </li>
                            <li>Insturções de boas práticas de uso</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="btn">
                <Mybutton />
            </div>
        </MySection>
    )
}

export default Maintenance


// STYLESHEET // // STYLESHEET // // STYLESHEET // // STYLESHEET // // STYLESHEET // 
const MySection = styled.section`
    background-color: ${({theme}) => theme.colors.secondary};
    margin: 5rem 0;
    display: flex;
    flex-direction: column;
    color: ${({theme}) => theme.colors.white};
    position: relative;

    .container{
        ${({theme})=> theme.container};
        width: 100%;
    }
    .sections{
        position: relative;
        padding: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 3rem;
        flex-wrap: wrap;
        justify-content: center;
        line-height: 2rem;
        min-height: 385px;
        z-index: 2;
        font-weight: bolder;
    }
    .btn{
        border-top: 1px solid #ffffff71;
        padding: 2rem 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    .userImage{
        position: absolute;
        z-index: 0;
        
    }
    @media only screen and (max-width: 1000px) {
        .userImage{
            font-size: 1rem;
            display: none;
        }
    }
`