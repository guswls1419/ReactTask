import './App.css';
import styled from 'styled-components';
import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Main from './pages/Main';

function App() {
  return (
    <React.Fragment>
      <ContentWrap>  
        <Routes>
          <Route path="/" exact element={<Main />} /> 
        </Routes>
      </ContentWrap>
    </React.Fragment>
  );
}

const ContentWrap = styled.div`
  min-height : 100vh;
  box-sizing: border-box;
  background : #F5F5FB;
  
`


export default App;
