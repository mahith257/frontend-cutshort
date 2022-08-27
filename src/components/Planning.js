import { Person, Groups } from '@mui/icons-material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEdenContext } from '../context/EdenContext';
import Heading from './Heading';
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
            <Heading header='How are you planning to use Eden?' subtitle="We'll streamline your setup experience accordingly." />
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