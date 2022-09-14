import styled from "styled-components"

// COMPONENT // // COMPONENT // // COMPONENT // // COMPONENT // // COMPONENT //
const Exemple = ()=>{
    return(
        <MyExemple>
            <div className="container">
                <h1>Exemple</h1>
            </div>
        </MyExemple>
    )
}

export default Exemple



// STYLESHEET // // STYLESHEET // // STYLESHEET // // STYLESHEET // // STYLESHEET // 
const MyExemple = styled.section`
    .container{
        ${({theme}) => theme.container} ;
    }
`