import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en" data-wf-domain="ai-bot-template.webflow.io" data-wf-page="6398008a5a4ad6da87f1cc13" data-wf-site="6398008a5a4ad6e37cf1cc10">
      <Head>
        <title>LightSpeed</title>
        <meta name="description" content="LightSpeed = AI Document Creator & Assessment Creator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="template.css" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/" rel="preconnect" />
        <link href="https://fonts.gstatic.com/" rel="preconnect" crossOrigin="anonymous" />
        <Script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" type="text/javascript"></Script>
        <Script type="text/javascript" src="font.js"></Script>
        <script src="jquery.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
