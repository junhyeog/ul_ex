import React from 'react';
import {Container} from 'next/app';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
  }
`

const Layout = ({Component}) => {
    return(
    <Container>
        <Head>
            <title>ULIME</title>
        </Head>
        <Component/>
        <GlobalStyle/>
    </Container>);
}

export default Layout;
