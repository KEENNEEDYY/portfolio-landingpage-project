import * as css_app from './css-app';
import { useState } from 'react';
import Header from '../../components/Header';
import MobileHeader from '../../components/MobileHeader';

export default function Home() {

  const [header, setHeader] = useState(false);

  function openHeader() {
    setHeader(true);
  }

  function closeHeader() {
    setHeader(false);
  }

  return (
    <>
      <MobileHeader header={header} closeHeader={closeHeader} />
      <Header openHeader={openHeader} />
      <main>
        <section>
          <h1 className={css_app.title}>Hello Friend</h1>
        </section>
      </main>
    </>
  )
}
