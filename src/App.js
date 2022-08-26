import { Typography, styled } from '@mui/material';
import './App.css';
import Eden from './assets/eden.png'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Welcome from './components/Welcome';
import Workspace from './components/Workspace';
import Planning from './components/Planning';
import Congrats from './components/Congrats';
import { useState } from 'react';
import { useEdenContext } from './context/EdenContext';


function App() {

  const [step, setStep] = useState([1])
  const { fullName, displayName, workspaceName, plan } = useEdenContext()

  const changeStep = (val) => {
    setStep([...step, val])
  }

  const StyledDiv = styled("div")({
    display: 'flex',
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    marginTop: "100px",
    // justifyContent: "center"
  })

  const Heading = styled("div")({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "60px"
  })

  const steps = [1,2,3,4]

  return (
    <BrowserRouter>
      <StyledDiv>
        <Heading>
          <img src={Eden} alt="Eden" style={{ transform: "scale(1.2)"}} />
          <Typography variant='h4' sx={{fontWeight: "750", fontSize: "28px", fontFamily: "Inter"}}>Eden</Typography>
        </Heading>
        <div className='steps'>
          {steps.map((s, index) => (
            <div key={s} className='step'>
              <div className={`single-step ${step.includes(s) ? "blue-bg" : ""} `}>
              {s}
              </div>
              {index + 1 < steps.length && <hr className={`${step.includes(s) ? "blue-line" : ""} ${index < step.length - 1 ? "full-line" : ""}`} style={{width: "50px"}} />}
            </div>
          ))}
        </div>
        <Routes>
          <Route exact path='/' element={<Welcome changeStep={changeStep} />} />
          <Route exact path='/workspace' element={(fullName !== '' && displayName !== '') ? <Workspace changeStep={changeStep} /> : <Navigate replace to="/" />} />
          <Route exact path='/planning' element={(workspaceName !== '') ? <Planning changeStep={changeStep}/> : <Navigate replace to="/workspace" />} />
          <Route exact path='/congrats' element={plan !== '' ? <Congrats /> : <Navigate replace to="/planning" />} />
        </Routes>
      </StyledDiv>
    </BrowserRouter>
  );
}

export default App;
