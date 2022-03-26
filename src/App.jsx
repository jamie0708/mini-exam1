import React from 'react';
import './App.scss';
import Authonticated from './Authonticated'
import Unauthonticated from './Unauthonticated'
import { Context } from './Contexts/Authorization/Authrization'

function App() {
  const { state } = React.useContext(Context)

  if (state) {
    return (<Authonticated />);
  } else {
    return (<Unauthonticated />);
  }
}

export default App;