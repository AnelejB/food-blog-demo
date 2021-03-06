import React from 'react';
import Layout from '../components/layout';
import Nav from '../components/nav';
import Footer from '../components/footer';
import SEO from '../components/seo';

import './contact.css';

const Contact = () => (
    <Layout>
        <SEO title='Contact' description='Kontaktirajte me ako imate predlog ili sugestiju za recepte'/>
        <Nav />
        <div className='contact__header'></div>
        <div className='contact__section'>
            <div className='contact__form'>
                <h1>Kontakt</h1>
                <div className='inner'>
                    <form method='post' name='contact' action='/thanks' data-netlify='true' netlify-honeypot='bot'>
                    <input type='hidden' name='form-name' value='contact' />
                    <div className='field__hidden'>
                        <label>Don't fill this out, human</label>
                        <input name='bot' />
                    </div>
                    <div className='field'>
                        <label>Ime</label>
                        <input type='text' name='name' />
                    </div>
                    <div className='field'>
                        <label>Email</label>
                        <input type='text' name='email' />
                    </div>
                    <div className='field'>
                        <label>Poruka</label>
                        <textarea name='message' rows='6'></textarea>
                    </div>
                    <div className='submit'>
                        <button type='submit' className='btn__med'>Posalji</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
        <Footer />
    </Layout>
)

export default Contact