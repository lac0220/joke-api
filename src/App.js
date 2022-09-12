import { useEffect, useState } from 'react';
import './App.css';
import Button from './Button';
import Joke from './Joke';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown} from '@fortawesome/free-solid-svg-icons';

export default function App() {
    const [joke, setJoke] = useState(0);
    const url = "https://v2.jokeapi.dev/joke/Any";

    async function fetchData() {
        const resp = await fetch(url);
        const result = await resp.json();
        console.log(result);
        setJoke(result);
    }

    useEffect(() => {
        fetchData();
    }, []);

    if (!joke) {
        return <></>;
    }

    return (
        <div className="container vh-100 mt-3 pt-5 text-center text-white">
            <h1 className="mb-5 display-3">Jokes Generator</h1>
            <h2 className="fs-1">Find the one that makes you laugh...</h2>
            <p><FontAwesomeIcon icon={faArrowAltCircleDown} style={{fontSize: "4.5rem"}}/></p>
            <Button fetchData={fetchData} />
            <Joke joke={joke} />
        </div>
    );
}
