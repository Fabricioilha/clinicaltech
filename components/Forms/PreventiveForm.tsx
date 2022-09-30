import styled from "styled-components"

// COMPONENT // // COMPONENT // // COMPONENT // // COMPONENT // // COMPONENT //
const PreventiveForm = ()=>{
    return(
        <MyPreventiveForm>
            <div className="container">
                <h1>Manutenção Preventiva</h1>
                <form action="">
                    <label htmlFor=""></label>
                </form>
            </div>
        </MyPreventiveForm>
    )
}

export default PreventiveForm



// STYLESHEET // // STYLESHEET // // STYLESHEET // // STYLESHEET // // STYLESHEET // 
const MyPreventiveForm = styled.section`
    .container{
        ${({theme}) => theme.container} ;
    }
`