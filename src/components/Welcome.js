import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEdenContext } from '../context/EdenContext';
import Heading from './Heading';
import './Welcome.css'

export default function Welcome({ changeStep }) {
    const [fullName, setFullName] = useState('')
    const [displayName, setDisplayName] = useState('')
    const navigate = useNavigate()
    const { dispatch } = useEdenContext()
    

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({type: 'UPDATE_WELCOME', payload: {fullName, displayName}})
        changeStep(2)
        navigate('/workspace')
    }
    return (
        <div className='welcome'>
            <Heading header='Welcome! First things first...' subtitle='You can always change them later.' />
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Full Name</span>
                    <input 
                        type='text'
                        onChange={(e) => setFullName(e.target.value)}
                        value = {fullName}
                        placeholder= "Steve Jobs"
                        required
                    />
                </label>
                <label>
                    <span>Display Name</span>
                    <input 
                        type='text'
                        onChange={(e) => setDisplayName(e.target.value)}
                        value = {displayName}
                        placeholder = "Steve"
                        required
                    />
                </label>
                <button>Create Workspace</button>
            </form>
        </div>
    );
    }
