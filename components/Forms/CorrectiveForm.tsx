import styled from "styled-components"

// COMPONENT // // COMPONENT // // COMPONENT // // COMPONENT // // COMPONENT //
const CorrectiveForm = ()=>{
    return(
        <MyCorrectiveForm>
            <div className="container">
                <h1>Manutenção Corretiva</h1>
                <form action="">
                    <label htmlFor="">
                        <span className="g-nome">
                            <p>Nome</p>
                            <input type="text" /> 
                        </span>
                    </label>
                    <label htmlFor="">
                        <span className="g-empresa">
                            <p>Empresa</p>
                            <input type="text" /> 
                        </span>
                    </label>

                </form>
            </div>
        </MyCorrectiveForm>
    )
}

export default CorrectiveForm



// STYLESHEET // // STYLESHEET // // STYLESHEET // // STYLESHEET // // STYLESHEET // 
const MyCorrectiveForm = styled.section`
    *{transition:all ease .3s }
    .container{
        ${({theme}) => theme.container} ;
        h1{
            margin: 1rem 0;
        }
    }
    .label>p{
        margin: 1rem 0;
    }
`