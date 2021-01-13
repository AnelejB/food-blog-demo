import React from 'react';
import Layout from '../components/layout';
import Nav from '../components/nav';
import './contact.css';

const Thanks = () => (
    <Layout>
        <Nav />
        <div className='contact__header'></div>
        <div className='contact__thanks'>
            <h1>Hvala, bicemo u kontaktu!</h1>
        </div>
    </Layout>
)

export default Thanks
