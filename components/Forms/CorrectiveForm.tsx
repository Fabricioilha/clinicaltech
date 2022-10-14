import styled from "styled-components"

// COMPONENT // // COMPONENT // // COMPONENT // // COMPONENT // // COMPONENT //
const CorrectiveForm = ()=>{
    return(
        <MyCorrectiveForm>
            <div className="container">
                <h1>Manutenção Corretiva</h1>
                <form action="">
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
    }
    .label>p{
        margin: 1rem 0;
    }
    input{
        width: 300px;
        border: none;
        box-shadow: 0 0 3px #00000073;
        border-radius: 3px;
        outline: none;
        padding: 0.5rem;
        margin: 0.5rem 0;
    }
    .btn-submit{
        cursor: pointer;
        transition: all ease .3s;
        text-transform: uppercase;
        font-weight: bold;
    }
    .btn-submit:hover{
        box-shadow: 2px 2px 3px #222;
        color: #03550a;
    }
`