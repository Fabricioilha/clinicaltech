import styled from "styled-components"

// COMPONENT // // COMPONENT // // COMPONENT // // COMPONENT // // COMPONENT //
const MenuLeft = ()=>{
    return(
        <MyMenuLeft>
            <ul>
                <li>Equipamentos</li>
                <li>Orçamentos</li>
                <li>Dados Cadastrais</li>
                <li>Suporte</li>
                <li>Sair</li>
            </ul>
        </MyMenuLeft>
    )
}

export default MenuLeft



// STYLESHEET // // STYLESHEET // // STYLESHEET // // STYLESHEET // // STYLESHEET // 
const MyMenuLeft = styled.section`
    ul>li{
        margin: 1rem 0 1rem .5rem;
        cursor: pointer;
        padding: .5rem;
        border-radius: 5px;
        :hover{
            background-image: linear-gradient(to right, ${({theme})=> theme.colors.primary}, white);
            color: ${({theme})=> theme.colors.white}
        }
    }
`