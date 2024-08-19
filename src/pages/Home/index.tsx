import { useState } from 'react';
import Header from '../../components/Header';
import MobileHeader from '../../components/MobileHeader';
import Introduction from './sections/Introduction';
import About from './sections/About';
import Service from './sections/Service';

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
        <Introduction />
        <div className="relative z-[30]">
          <About />
          <Service />
        </div>
      </main>
    </>
  )
}
