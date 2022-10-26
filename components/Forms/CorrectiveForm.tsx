import styled from "styled-components"

// COMPONENT // // COMPONENT // // COMPONENT // // COMPONENT // // COMPONENT //
const CorrectiveForm = ()=>{
    return(
        <MyCorrectiveForm>
            <div className="container">
                <h1 style={{textAlign:"center"}}>Manutenção Corretiva</h1>
                <form action="">
                    <div className="inputs">
                        <label htmlFor="">
                            <span className="g-responsavel">
                                <p>Responsável</p>
                                <input type="text" /> 
                            </span>
                        </label>
                        <label htmlFor="">
                            <span className="g-empresa">
                                <p>Empresa</p>
                                <input type="text" /> 
                            </span>
                        </label>
                        <label htmlFor="">
                            <span className="g-cnpj">
                                <p>CNPJ</p>
                                <input type="text" /> 
                            </span>
                        </label>
                        <label htmlFor="">
                            <span className="g-email">
                                <p>Email</p>
                                <input type="email" /> 
                            </span>
                        </label>
                        <label htmlFor="">
                            <span className="g-telefone">
                                <p>Telefone</p>
                                <input type="text" /> 
                            </span>
                        </label>
                        <label htmlFor="">
                            <span className="g-endereco">
                                <p>Endereço</p>
                                <input type="text" /> 
                            </span>
                        </label>
                        <label htmlFor="">
                            <span className="g-equipamento">
                                <p>Equipamento</p>
                                <input type="text" /> 
                            </span>
                        </label>
                        <label htmlFor="">
                            <span className="g-marca">
                                <p>Marca / Modelo</p>
                                <input type="text" /> 
                            </span>
                        </label>
                        <label htmlFor="">
                            <span className="g-serie">
                                <p>Número De Série</p>
                                <input type="text" /> 
                            </span>
                        </label>
                        <label htmlFor="">
                            <span className="g-defeito">
                                <p>Defeito</p>
                                <input type="text" /> 
                            </span>
                        </label>
                        <br />
                    </div>
                    <input type="submit" value="Enviar" className="btn-submit" />
                </form>
            </div>
        </MyCorrectiveForm>
    )
}

export default CorrectiveForm



// STYLESHEET // // STYLESHEET // // STYLESHEET // // STYLESHEET // // STYLESHEET // 
const MyCorrectiveForm = styled.section`
    .container{
        ${({theme}) => theme.container} ;
        h1{
            margin: 1rem 0;
        }
        form{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        .inputs{
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            gap: 2rem;
            justify-content: center;
            align-items: center;
            input{
                padding: 0.6rem;
                width: 300px;
                outline: none;
                border: none;
                box-shadow: -1px -1px 0 #211c665c, 0 0 5px #0000006a;
                border-radius: 5px;
            }
        }
        .btn-submit{
            width: 300px;
            padding: .5rem;
            margin: 4rem;
            border: none;
            box-shadow: 0 0 5px #0000006e;
            border-radius: 2px;
            cursor: pointer;
        }
    }
`