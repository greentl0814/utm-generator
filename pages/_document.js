import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
 return (
   <Html lang="en">
     <Head>
       <script
         async
         src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6071061687711848"
         crossOrigin="anonymous"
       />
     </Head>
     <body className="antialiased">
       <Main />
       <NextScript />
     </body>
   </Html>
 );
}
