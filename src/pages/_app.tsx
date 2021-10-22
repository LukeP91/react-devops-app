import { AppProps } from 'next/app';
import React, { StrictMode } from 'react';

import { BaseLayout } from '@/components';

import '../styles/app.scss';

function App({ Component, pageProps }: AppProps) {
  return (
    <StrictMode>
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </StrictMode>
  );
}

export default App;
