import { useState } from "react"
import styled from "styled-components"
import Layout from "../components/Layout/Layout"
import CorrectiveForm from "../components/Forms/CorrectiveForm"
import PreventiveForm from "../components/Forms/PreventiveForm"
import { NextPage } from "next"

// COMPONENT // // COMPONENT // // COMPONENT // // COMPONENT // // COMPONENT //
const Budget: NextPage = () => {
    const [maintenance, setMaintenance] = useState(false)

    const toggleMaintence = () =>{
        maintenance ? setMaintenance(false) : setMaintenance(true)
    }

    return (
        <Layout>
            <MyBudget>
                <div className="container">
                <button className="btn" onClick={toggleMaintence}>{maintenance? "Manutenção Preventiva ":"Manutenção Corrretiva"}</button>
                    {maintenance ? <CorrectiveForm /> : <PreventiveForm />}
                </div>
            </MyBudget>
        </Layout>
    )
}

export default Budget



// STYLESHEET // // STYLESHEET // // STYLESHEET // // STYLESHEET // // STYLESHEET // 
const MyBudget = styled.section`
    .container{
        ${({ theme }) => theme.container} ;
    }
    .btn{
        padding: 0.5rem;
        border: none;
        box-shadow: 0 0 3px #00000081;
        margin: 0.5rem 0;
        cursor: pointer;
    }
`