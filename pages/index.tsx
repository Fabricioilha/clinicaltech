import Head from 'next/head'
import Layout from '../components/Layout/Layout'
import Hero from '../components/Main/Hero'
import Maintenance from '../components/Main/Maintenance'
import Mybutton from '../components/utils/MyButton'

const Home = ()=> {
  return (
    <Layout>
      <Hero />
      <Maintenance />
    </Layout>
  )
}
export default Home
