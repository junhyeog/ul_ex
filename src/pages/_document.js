import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class CustomDocument extends Document {
    static getInitialProps({ renderPage }) {
        const sheet = new ServerStyleSheet();
        const page = renderPage((App) => (props) =>
          sheet.collectStyles(<App {...props} />),
        );
        const styleTags = sheet.getStyleElement();
        return { ...page, styleTags };
    }
    render() {
        return (
            <Html>
            <Head>
                {this.props.styleTags}
                <link href="https://fonts.googleapis.com/css?family=Pacifico&display=swap" rel="stylesheet"/>    
                <link href="https://fonts.googleapis.com/css?family=Arimo" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css?family=Inconsolata" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css?family=Bitter" rel="stylesheet"/>
                <script src="https://embed.runkit.com"/>    
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
            </Html>
        );
    }
}

export default CustomDocument;
