import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWandSparkles } from '@fortawesome/free-solid-svg-icons';

export default function ButtonJoke(props) {
    return (
        <Button className="mx-auto mb-2 text-center fs-3" variant="success" active onClick={() => props.fetchData()}>Press for the next <FontAwesomeIcon icon={faWandSparkles} style={{marginLeft: "5px"}}/></Button>
    )
}
