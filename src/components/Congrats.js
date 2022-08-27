import { useEdenContext } from '../context/EdenContext';
import './Congrats.css'
import Heading from './Heading';

export default function Congrats() {
    const { displayName } = useEdenContext()
    return (
        <div className="welcome">
            <div className='tick'>✓</div>
            <Heading header={`Congratulations, ${displayName}!`} subtitle='You have completed onboarding, you can start using the Eden!' />
            <button style={{marginTop: "15px", width: "350px"}}>Launch Eden</button>
        </div>
    );
}