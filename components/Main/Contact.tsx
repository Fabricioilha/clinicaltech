import styled from "styled-components"

// COMPONENT // // COMPONENT // // COMPONENT // // COMPONENT // // COMPONENT //
const Contact = ()=>{
    return(
        <MyContact>
            <div className="container">
                <div className="form">
                    <form action="" method="post">
                        <label htmlFor="">
                            <p>Seu nome</p>
                            <input type="text" placeholder="Exemplo Da Silva" />
                        </label>
                        <label htmlFor="">
                            <p>Seu email</p>
                            <input type="email" placeholder="exemple@email.com" />
                        </label>
                        <label htmlFor="">
                            <p>Seu Telefone</p>
                            <input type="email" placeholder="21955551111" />
                        </label>
                    </form>
                </div>
                <div className="contacts"></div>
            </div>
        </MyContact>
    )
}

export default Contact



// STYLESHEET // // STYLESHEET // // STYLESHEET // // STYLESHEET // // STYLESHEET // 
const MyContact = styled.section`
    margin: 5rem 0;
    .container{
        ${({theme}) => theme.container} ;
        display: flex;
        flex-wrap: wrap;
        .form{
            width: 50%;
            height: 500px;
            background-color: red;
        }
        .contacts{
            width: 50%;
            height: 500px;
            background-color: green;
        }
    }
`