import { NextPage } from 'next'
import Layout from '../components/Layout/Layout'
import Contact from '../components/Main/Contact'
import Hero from '../components/Main/Hero'
import Maintenance from '../components/Main/Maintenance'
import Sales from '../components/Main/Sales'
import Team from '../components/Main/Team'
import { ISalesData } from '../types/index/SalesData'

type Props = {
  data: ISalesData
}
const Home:NextPage = ({data}:Props)=> {
  
  return (
    <Layout>
      <Hero />
      <Maintenance />
      <Team />
      <Sales data={data} />
      <Contact />
    </Layout>
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

export default Home
