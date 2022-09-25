import Layout from '../components/Layout/Layout'
import Contact from '../components/Main/Contact'
import Hero from '../components/Main/Hero'
import Maintenance from '../components/Main/Maintenance'
import Sales from '../components/Main/Sales'
import Team from '../components/Main/Team'

const Home = ()=> {
  return (
    <Layout>
      <Hero />
      <Maintenance />
      <Team />
      <Sales />
      <Contact />
    </Layout>
  )
}
export default Home
