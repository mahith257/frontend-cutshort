import { Typography } from '@mui/material';
import { useEdenContext } from '../context/EdenContext';
import './Congrats.css'

export default function Congrats() {
    const { displayName } = useEdenContext()
    return (
        <div className="welcome">
            <div className='tick'>✓</div>
            <Typography variant='h4' sx={{fontWeight: "750", fontSize: "24px"}}>Congratulations, {displayName}!</Typography>
            <Typography variant='subtitle2' sx={{ color: "gray" }}>You have completed onboarding, you can start using the Eden!</Typography>
            <button style={{marginTop: "15px", width: "350px"}}>Launch Eden</button>
        </div>
    );
}