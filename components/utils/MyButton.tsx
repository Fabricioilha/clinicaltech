import styled from "styled-components"

const Mybutton = ()=>{
    return(
        <Btn>
            Solicitar Orçamento
        </Btn>
    )
}

export default Mybutton

const Btn = styled.button`
    padding: 0.5rem 2rem;
    font-size: 1.2rem;
    background-color: ${({theme})=> theme.colors.primary};
    color: ${({theme})=> theme.colors.white};
    border: none;
    border-radius: 5px;
    box-shadow: 0 0 5px #00000088;
    cursor: pointer;
    transition: all ease .3s;
    &:hover{
        background-color: ${({theme})=> theme.colors.white};
        color: ${({theme})=> theme.colors.primary};
        box-shadow: -3px -3px 10px #000;
    }
`