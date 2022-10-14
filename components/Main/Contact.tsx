import styled from "styled-components"

// COMPONENT // // COMPONENT // // COMPONENT // // COMPONENT // // COMPONENT //
const Contact = ()=>{
    return(
        <MyContact id="contact">
            <div data-aos="fade-right"><h2>Fale Conosco</h2></div>
            <div className="container">
                <div className="form">
                    <form action="" method="post">
                        <label htmlFor="">
                            <p>Seu nome</p>
                            <input type="text" placeholder="Exemplo Da Silva" />
                        </label>
                        <label htmlFor="">
                            <p>Seu email</p>
                            <input type="email" placeholder="exemple@email.com" />
                        </label>
                        <label htmlFor="">
                            <p>Seu Telefone</p>
                            <input type="email" placeholder="21955551111" />
                        </label>
                        <label htmlFor="">
                            <p>Mensagem</p>
                            <textarea rows={10} />
                        </label>
                        <input type="submit" value="Enviar" className="submit"/>
                    </form>
                </div>

                <div className="emails">
                    <div className="email">
                        <p>Comercial</p>
                        <p><span>comercial@clinicaltech.com.br</span></p>
                    </div>
                    <div className="email">
                        <p>Suporte Técnico</p>
                        <p><span>suporte@clinicaltech.com.br</span></p>
                    </div>
                    <div className="email">
                        <p>Ouvidoria</p>
                        <p><span>ouvidoria@clinicaltech.com.br</span></p>
                    </div>
                </div>
                
            </div>
        </MyContact>
    )
}

export default Contact



// STYLESHEET // // STYLESHEET // // STYLESHEET // // STYLESHEET // // STYLESHEET // 
const MyContact = styled.section`
    margin: 5rem 0;
    .container{
        ${({theme}) => theme.container} ;
        display: flex;
        position: relative;
        padding: 1rem;
        justify-content: space-between;
    }
    p{
        margin: 1rem 0;
    }
    .form{
        width: 50%;
    }
    .emails{
        width: 50%;
        display: flex;
        flex-direction: column;
        text-align: center;
        
    }
    input{
        width: 100%;
        height: 2rem;
        padding: 0.5rem;
        border: none;
        box-shadow: 0 0 5px #0000009e;
        outline: none;
        border-radius: 5px;
    }
    textarea{
        padding: 1rem;
        border: none;
        box-shadow: 0 0 5px #0000009e;
        outline: none;
        width:100%;
    }
    
    h2{
        text-align: center;
        margin: 2rem 0;
    }
    .submit{
        margin: 1rem 0;
        cursor: pointer;
    }
    .emails{
        display: flex;
        flex-direction:column;
        gap: 1.5rem;
        font-size: 1.3rem 
    }
    @media only screen and (max-width: 600px) {
        .container{
            flex-direction: column;
        }
        .form{
            width: 100%;
        }
        .emails{
            width: 100%;
        }
    }
`