import { faMicrochip } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"
import { ISalesEquipment } from "../../MockData/SalesEquipment"

// COMPONENT // // COMPONENT // // COMPONENT // // COMPONENT // // COMPONENT //
const Card = (props: ISalesEquipment)=>{
    return(
        <MyCard>
            <FontAwesomeIcon icon={faMicrochip} />
            <p>{props.name}</p>
            <p>{props.brand}</p>
            <p>R${props.price},00</p>
        </MyCard>
    )
}

export default Card



// STYLESHEET // // STYLESHEET // // STYLESHEET // // STYLESHEET // // STYLESHEET // 
const MyCard = styled.div`
margin: 1rem;
    display: flex;
    justify-content: space-evenly;
    gap: 1.5rem;
`