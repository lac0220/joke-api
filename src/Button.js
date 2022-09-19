import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWandSparkles } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';

export default function ButtonAndCounter(props) {
    const [count, setCount] = useState(1);
    
    return (
        <div>
            <p className="mb-4 fs-2">You have been reading {count} jokes</p>
            <Button className="mx-auto text-center fs-3" aria-label="Next joke" variant="success" active onClick={() => setCount(count + 1) || props.fetchData()}>Press for the next <FontAwesomeIcon icon={faWandSparkles} style={{marginLeft: "5px"}}/></Button>
        </div>
    );
}
