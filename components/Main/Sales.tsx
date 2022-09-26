import { useEffect, useState } from "react"
import styled from "styled-components"

// COMPONENT // // COMPONENT // // COMPONENT // // COMPONENT // // COMPONENT //
const Sales = ()=>{
    const [data, setData] = useState<any[]>()
    const [showMore, setShowMore] = useState(true)
    const [ qtd, setQtd ] = useState(5)
    
    useEffect(()=>{getJson()},[])

    const getJson = async ()=>{
        const res = await fetch("https://jsonplaceholder.typicode.com/photos")
        const json = await res.json()
        setData(json)
    }
    
    const handleClickLoadMore = () =>{
        setShowMore(false)
        setQtd(20)
        
    }
    const handleClickLoadLess = () =>{
        setShowMore(true)
        setQtd(5)
    }
    return(
        <MySales id="vendas">            
            <div className="container">
                <h2>Venda de Equipamentos Novos e Usados</h2>
                <div className="cards" >
                    {data && data.slice(0,qtd).map((item, index)=>(
                        <div className="card" key={index}>
                            <p>{item.title}</p>
                            <img src={`${item.thumbnailUrl}`} width={100} height={100} />
                            <p>Marca / Modelo</p>
                            <p>R$ <span>123,00</span></p>
                        </div>
                    ))}
                    
                </div>
                    {showMore?
                        <p className="pbtn" onClick={handleClickLoadMore}>Mostrar Mais...</p>:
                        <p className="pbtn" onClick={handleClickLoadLess}>Mostrar Menos...</p>
                    }
            </div>
        </MySales>
    )
}

/*
export const getServerSideProps =  async () => {
    // Fetch data from external API
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos`)
    const data = await res.json()
    // Pass data to the page via props
    return { props: { data } }
  }
*/

export default Sales


// STYLESHEET // // STYLESHEET // // STYLESHEET // // STYLESHEET // // STYLESHEET // 
const MySales = styled.section`
    *{
        transition: all ease .3s;
    }
    background-color: ${({theme})=> theme.colors.primary};
    color:${({theme})=> theme.colors.white};
    .container{
        ${({theme}) => theme.container} ;
        display: flex;
        flex-direction: column;
        padding: 2rem 0.5rem;
        &>h2{
            margin: 2rem 0;
        }
        
    }
    .cards{
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        padding: 2rem 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .card{
        flex-direction: column;
        text-align: center;
        width: 200px;
        height: 300px;
        display: flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;
        //background-color: ${({theme})=> theme.colors.primary}};
        padding: 0.5rem;
        border-radius: 5px;
        gap: 1rem;
        box-shadow: 3px 2px 3px #000000a0, -1px -2px 5px #ffffff4c ;
        cursor: pointer;
        z-index: 0;
    }
    .card:hover{
        transform: scale(1.1);
        z-index: 1;
    }
    .pbtn{
        cursor: pointer;
    }
`