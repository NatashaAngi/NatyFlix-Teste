import styles from './NovoVideo.module.css'
import React, { useState } from 'react';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Container from '../../components/Container'
import Form from '../../components/Form';

function NovoVideo(){
  return(
    <>
    <Header />

    <Container >

      <Form />

    </Container>
    
    <Footer />
    
    </>
  )
}

export default NovoVideo