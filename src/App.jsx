import React from 'react';
import './App.scss';

import Navbar from './Components/1.Navbar/Navbar';
import Header from './Components/2.Header/Header';
import Main from './Components/3.Main/Main';
import Footer from './Components/4.Footer/Footer';

function App() {
  const [lang, setLang] = React.useState('uz');

  return (
    <>
      <Navbar lang={lang} setLang={setLang} />
      <Header lang={lang} />
			<Main />
			<Footer />
    </>
  );
}

export default App;