import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEdenContext } from '../context/EdenContext';
import Heading from './Heading';
import './Workspace.css'

export default function Workspace({ changeStep }) {
    const [workspaceName, setWorkspaceName] = useState('')
    const [workspaceURL, setWorkspaceURL] = useState('')
    const { dispatch } = useEdenContext()
    const navigate = useNavigate()
    

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({type: 'UPDATE_WORKSPACE', payload: {workspaceName, workspaceURL}})
        changeStep(3)
        navigate('/planning')
    }
    return (
        <div className='welcome'>
            <Heading header='Lets set up a home for all your work' subtitle='You can always create another workspace later.' />
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Workspace Name</span>
                    <input 
                        type='text'
                        onChange={(e) => setWorkspaceName(e.target.value)}
                        value = {workspaceName}
                        placeholder= "Eden"
                        required
                    />
                </label>
                <label>
                    <span>Workspace URL <span className='optional'>(optional)</span></span>
                    <div className='url-div'>
                    <div className='url'>www.eden.com/</div>
                    <input 
                        type='text'
                        onChange={(e) => setWorkspaceURL(e.target.value)}
                        value = {workspaceURL}
                        placeholder = "Example"
                    />
                    </div>
                </label>
                <button>Create Workspace</button>
            </form>
        </div>
    );
}