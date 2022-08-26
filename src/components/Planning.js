import { Person, Groups } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEdenContext } from '../context/EdenContext';
import './Planning.css'

export default function Planning({ changeStep }) {

    const [plan, setPlan] = useState('')
    const { dispatch } = useEdenContext()
    const navigate = useNavigate()

    const handleClick = () => {
        if(plan !== ""){
            dispatch({type: 'UPDATE_PLAN', payload: plan})
            changeStep(4)
            navigate('/congrats')
        }
    }

    return (
        <div className='welcome'>
            <Typography variant='h4' sx={{fontWeight: "750", fontSize: "28px", fontFamily: "Inter"}}>How are you planning to use Eden?</Typography>
            <Typography variant='subtitle2' sx={{ color: "gray" }}>We'll streamline your setup experience accordingly.</Typography>
            <div className='plans'>
                <div className={`single-plan ${plan === "For myself" ? "blue" : ""}`} onClick={() => setPlan('For myself')}>
                    <Person />
                    <h5>For myself</h5>
                    <p className='subtitle'>Write better. Think more clearly. Stay organized</p>
                </div>
                <div className={`single-plan ${plan === "With my team" ? "blue" : ""}`} onClick={() => setPlan('With my team')}>
                    <Groups />
                    <h5>With my team</h5>
                    <p className='subtitle'>Wikis, docs, tasks & projects, all in one place</p>
                </div>
            </div>
            <button onClick = {handleClick} style={{width: "350px"}}>Create Workspace</button>
        </div>
    );
}