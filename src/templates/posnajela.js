import React from 'react';
import { Link, graphql, navigate } from 'gatsby';
import { window } from 'browser-monads';
import Layout from '../components/layout';
import Nav from '../components/nav';
import Footer from '../components/footer';
import SEO from '../components/seo';
import '../components/home/home.css';
import './archive.css';

import headerImg from '../images/general-header-image.jpg';

const Posnajela = (props) => {

    const blogContent = props.data.allContentfulBlog
    const { currentPage, numPages } = props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? '/category/posna-jela' : `/category/posna-jela/${currentPage - 1}`
    const nextPage = `/category/posna-jela/${currentPage + 1}`

    return (
        <Layout>
        <SEO title='Blog' keywords={['recepti', 'brzi rucak', 'hrana']} />
        <Nav />

        <header>
            <div className='archive__section'>
                <div className='archive__hero' style={{backgroundImage: `url(${headerImg})`}}></div>
                <div className='archive__nav'>
                    <Link to='/blog' className={window.location.href.indexOf('/blog') > 0 ? 'archive__nav--link selected' : 'archive__nav--link'}>Svi recepti</Link>
                    <Link to='/category/brzi-rucak' className={window.location.href.indexOf('category/brzi-rucak') > 0 ? 'archive__nav--link selected' : 'archive__nav--link'}>Brzi Rucak</Link>
                    <Link to='/category/hrana-za-bebe' className={window.location.href.indexOf('category/hrana-za-bebe') > 0 ? 'archive__nav--link selected' : 'archive__nav--link'}>Hrana za Bebe</Link>
                    <Link to='/category/posna-jela' className={window.location.href.indexOf('category/posna-jela') > 0 ? 'archive__nav--link selected' : 'archive__nav--link'}>Posna Jela</Link>
                    <Link to='/category/poslastice' className={window.location.href.indexOf('category/poslastice') > 0 ? 'archive__nav--link selected' : 'archive__nav--link'}>Poslastice</Link>
                    <Link to='/category/hleb-i-pecivo' className={window.location.href.indexOf('category/hleb-i-pecivo') > 0 ? 'archive__nav--link selected' : 'archive__nav--link'}>Hleb i Pecivo</Link>
                    <Link to='/category/prilozi-i-salate' className={window.location.href.indexOf('category/prilozi-i-salate') > 0 ? 'archive__nav--link selected' : 'archive__nav--link'}>Prilozi i Salate</Link>
                    <Link to='/category/slana-jela' className={window.location.href.indexOf('category/slana-jela') > 0 ? 'archive__nav--link selected' : 'archive__nav--link'}>Slana Jela</Link>
                    <Link to='/category/supe-i-corbe' className={window.location.href.indexOf('category/supe-i-corbe') > 0 ? 'archive__nav--link selected' : 'archive__nav--link'}>Supe i Čorbe</Link>
                </div>
            </div>
        </header>

        <div className='feed'>
            {blogContent.edges.map(edge => (
                <div key={edge.node.id} className='card'
                style={{
                    backgroundImage: `linear-gradient(
                    to bottom,
                    rgba(10,10,10,0) 0%,
                    rgba(10,10,10,0) 50%,
                    rgba(10,10,10,0.7) 100%),
                    url(${edge.node.featuredImage.fluid.src})`  
                }}
            onClick={() => navigate(`/blog/${edge.node.slug}`)}
            >
            {edge.node.category.map(category => (
            <p className='card__category'>{category.title}</p>
            ))}
            <p className='card__title'>{edge.node.title}</p>
            </div>
            ))}
        </div>

        <div className='pagination'>
            <div className='pagination__item'>
                {!isFirst && (
                    <Link to={prevPage} rel='prev'>
                        <div className='arrow__back'></div>
                    </Link>
                )}
            </div>
            <div className='pagination__item'>
                {!isLast && (
                    <Link to={nextPage} rel='next'>
                        <div className='arrow__next'></div>
                    </Link>
                )}
            </div>
        </div>
        <Footer />
        </Layout>
    )
}

export default Posnajela

export const pageQuery = graphql` 
 query PosnajelaQuery ($skip: Int!, $limit: Int!) {
   allContentfulBlog(
       sort: { fields: [createdAt], order: DESC }
       filter: {
       node_locale: {eq: "en-US",}
       category: {elemMatch: {title: {eq: "Posna Jela"}}}
    }
       skip: $skip
       limit: $limit
     ) {
     edges {
       node {
         id
         slug
         title
         createdAt
         category {
           title
           id
         }
         featuredImage {
           fluid(maxWidth: 1200, quality: 85) {
             src
             ...GatsbyContentfulFluid
           }
         }
       }
     }
   }
 }
`