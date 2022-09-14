import { faUser } from "@fortawesome/free-regular-svg-icons"
import { faArrowAltCircleLeft, faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { IEmployees } from "../../MockData/Employees"

type Iprops = {
    data: IEmployees[],
    wdth: number,
    autoplay?:boolean
}

// COMPONENT // // COMPONENT // // COMPONENT // // COMPONENT // // COMPONENT //
const Carousel = (props: Iprops) =>{
    const [margin, setMargin] = useState(0)
    useEffect(()=>{
        if(props.autoplay){
            setInterval(()=>{rightClick()}, 5000)
        }
    },[margin])

    const leftClick = ()=>{
        if(margin == 0 ){
            setMargin(-(props.wdth * (props.data.length - 1)))
        }else{
            setMargin(margin + props.wdth)
        }       
    }
    const rightClick = ()=>{
        if(margin == -(props.wdth * (props.data.length - 1)) ){
            setMargin(0)
        }else{
            setMargin(margin - props.wdth)
        } 
    }
    return(
        <MyCarousel style={{width:props.wdth}}>
            <div className="content" style={{width:`${(props.data.length)*props.wdth}px`, marginLeft:margin}}>
                {
                    props.data.map((item, index)=>(
                        <div className="box" style={{width:props.wdth}} key={index}>
                            <FontAwesomeIcon icon={faUser} size="8x" />
                            <h1>{item.name} - {item.age}</h1>
                            <p>{item.title}</p>
                        </div>
                    ))
                }
            </div>
            <div className="leftArrow" onClick={leftClick}>
                <FontAwesomeIcon icon={faArrowAltCircleLeft} />
            </div>
            <div className="rightArrow" onClick={rightClick}>
                <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </div>
        </MyCarousel>
    )
}

export default Carousel


// STYLESHEET // // STYLESHEET // // STYLESHEET // // STYLESHEET // // STYLESHEET // 
const MyCarousel = styled.div`
    position: relative;
    overflow: hidden;
    
    .content{
        display: flex;
        transition: all ease .5s;
    }
    .box{
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        flex-direction: column;
    }
    .leftArrow{
        left: 0;
    }
    .rightArrow{
        right: 0;
    }
    .leftArrow, .rightArrow{
        position: absolute;
        top: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 0.8rem;
        cursor: pointer;
        &:hover{
            background-color: #00000036;
        }
    }
`