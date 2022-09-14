import styled from "styled-components"
import Carousel from "../utils/Carousel"
import { Employees } from "../../MockData/Employees"
import { useEffect } from "react"


// COMPONENT // // COMPONENT // // COMPONENT // // COMPONENT // // COMPONENT //
const Team = ()=>{
    
    return(
        <MyTeam id="team">
            <div className="container">
                    <h1>Nosso Time de Especialistas</h1>
                <div className="carousel">
                    <Carousel data={Employees} wdth={700}/>
                </div>
            </div>
        </MyTeam>
    )
}

export default Team


// STYLESHEET // // STYLESHEET // // STYLESHEET // // STYLESHEET // // STYLESHEET // 
const MyTeam = styled.section`
    .container{
        ${({theme})=> theme.container} ;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem 0;
        flex-direction: column;
        gap: 10rem;
        margin-bottom: 5rem;
    }
`