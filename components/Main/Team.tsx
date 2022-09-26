import styled from "styled-components"
import { Employees } from "../../MockData/Employees"

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import imageplaceholder from '../../public/images/userPlaceholder.png'
import Image from "next/image";


// COMPONENT // // COMPONENT // // COMPONENT // // COMPONENT // // COMPONENT //
const Team = () => {

    return (
        <MyTeam id="team">
            <div className="container">
                <h1>Nosso Time de Especialistas</h1>
                <Carousel autoPlay showThumbs={false} emulateTouch infiniteLoop showStatus={false}>
                    {
                        Employees.map((item, index)=>(
                            <div key={index}>
                                
                                <div className="content">
                                    <h2>{item.title}</h2>
                                    <Image src={imageplaceholder} height={300} width={300} style={{borderRadius:"50%"}} />
                                    <p>"{item.name}"</p>                                    
                                    <p>{item.desc}</p>
                                </div>                                                                                 
                            </div>                            
                        ))
                    }
                </Carousel>
            </div>
        </MyTeam>
    )
}

export default Team


// STYLESHEET // // STYLESHEET // // STYLESHEET // // STYLESHEET // // STYLESHEET // 
const MyTeam = styled.section`

.container{
    ${({theme}) => theme.container} ;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
    background-color: ${({theme}) => theme.colors.tertiary};
    color: ${({theme}) => theme.colors.white};
    border-radius: 10px;
    padding: 1rem;
}
.content{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem 1rem;
    p{
        max-width: 300px;
    }
}
`