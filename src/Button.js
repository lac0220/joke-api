import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWandSparkles } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';

export default function ButtonAndCounter(props) {
    const [counting, setCounting] = useState(1);
    const [countdown, setCountdown] = useState();
    const [countButton, setCountButton] = useState(false);
    const [delaying, setDelaying] = useState(false);

    // Generating new joke and count number of jokes    
    const handleClickCount = () => {
        setCounting(counting + 1) || props.generateJoke()
    }
    
    // Delaying button click   
    const handleClickDelay = () => {
        setDelaying(true);
    }

    useEffect(() => {
        let timerId = null;
        if (delaying) {
            timerId = setTimeout(() => {
                setDelaying(false);
            }, 3000);
        }
  
        return () => {
            clearTimeout(timerId);
        };
    }, [delaying]);

    // 3 sec countdown starting on the button    
    const handleClickCountdown = () => {
        setCountButton(true);
        setCountdown(3);
    }

    useEffect(() => {
        let timerId = null;
        if (countButton && countdown > 0) {
            timerId = setTimeout(() => {
                setCountdown(countdown - 1);
            }, 1000);
        } else if (countdown === 0) {
            setCountButton(false);
        }
    
        return () => {
            clearTimeout(timerId);
        };
    }, [countdown, countButton]);
    
    return (
        <div>
            <p className="mb-4 fs-2">You have been reading {counting} jokes</p>
            <Button className="mx-auto text-center fs-3" aria-label="Next joke" variant="success" active disabled={delaying || countButton} 
                onClick={() => {handleClickCount(); handleClickDelay(); handleClickCountdown()}} > 
                {countButton ? `... ${countdown}` : 'Press for the next'} <FontAwesomeIcon icon={faWandSparkles} style={{marginLeft: "5px"}}/>
            </Button>   
        </div>
    );
}
