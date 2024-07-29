import '../styles/globals.css';
import type { AppProps } from 'next/app';
import '@fontsource/jost/400.css';
import '@fontsource/jost/500.css';
import '@fontsource/jost/600.css';
import '@fontsource/jost/700.css';
import '@fontsource/sen/400.css';
import '@fontsource/sen/700.css';

import { NextSeo } from 'next-seo';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title="Vishal | Frontend Developer"
        titleTemplate="Vishal | Frontend Developer"
        defaultTitle="Vishal | Frontend Developer"
        description="Hey! I'm Vishal, A Frontend Developer and a Student!"
        twitter={{
          handle: '@Vishalpraj',
          site: '@Vishalpraj',
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          {
            property: 'keywords',
            content:
              'Frontend Developer, vishal, vishalprj,vishal prajapati, Web Developer, web development, web developer, blogger, tech enthusiast, open source',
          },
        ]}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
