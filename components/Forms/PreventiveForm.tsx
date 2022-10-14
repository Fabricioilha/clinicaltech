import styled from "styled-components"
import Contact from "../Main/Contact"

// COMPONENT // // COMPONENT // // COMPONENT // // COMPONENT // // COMPONENT //
const PreventiveForm = ()=>{
    return(
        <MyPreventiveForm>
            <div className="container">
                <h1>Manutenção Preventiva</h1>
                <br />
                <br />
                <h2>Para manutenção preventiva é necessário marcar uma reunião.</h2>

                <Contact />
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