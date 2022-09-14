import styled from "styled-components"
import { SalesEquipment } from "../../MockData/SalesEquipment"
import Card from "../utils/Card"

// COMPONENT // // COMPONENT // // COMPONENT // // COMPONENT // // COMPONENT //
const Sales = ()=>{
    return(
        <MySales>
            <div className="container">
                <h2>Venda de Equipamentos Novos e Usados</h2>
                {
                    SalesEquipment.map((item, index)=> (
                        <Card name={item.name} brand={item.brand} image_url={item.image_url} price={item.price} />
                    ))
                }

            </div>
        </MySales>
    )
}

export default Sales



// STYLESHEET // // STYLESHEET // // STYLESHEET // // STYLESHEET // // STYLESHEET // 
const MySales = styled.section`
    background-color: ${({theme})=> theme.colors.primary};
    color:${({theme})=> theme.colors.white};
    .container{
        ${({theme}) => theme.container} ;
        display: flex;
        flex-direction: column;
        &>h2{
            margin: 5rem 0;
        }
    }
`