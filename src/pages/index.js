import React from "react"
import { Link } from 'gatsby';
import Nav from '../components/nav';
import Featured from '../components/featured';
import Home from '../components/home';
import Layout from "../components/layout"
import Footer from '../components/footer'
import SEO from "../components/seo"
import './index.css'
import Helmet from 'react-helmet'



const IndexPage = () => (
  <Layout>
    <Helmet>
      <html lang="en" />
      <title>Tamarina Masta Moze Svasta</title>
      <meta name="google-site-verification" content="qnT69VP4ryMoVLO06OnWgYtDKtfezfChQEsfX8KNY-A" />
    </Helmet>

    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Nav />
    <Featured />
    <Home />
    <Link to='/blog' className='viewmore'>Pogledaj sve recepte</Link>
    <Footer />
  </Layout>
)

export default IndexPage
