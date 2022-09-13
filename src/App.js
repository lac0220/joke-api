import './App.css';
import Joke from './Joke';
import Button from './Button';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown} from '@fortawesome/free-solid-svg-icons';

export default function App() {

    const [joke, setJoke] = useState(0);
    const url = "https://v2.jokeapi.dev/joke/Any";

    async function fetchData() {
        const resp = await fetch(url);
        const result = await resp.json();
        // console.log(result);
        setJoke(result);
    }

    useEffect(() => {
        fetchData();
    }, []);

    if (!joke) {
        return <></>;
    }

    return (
        <div className="container vh-100 mt-2 pt-5 text-center text-white">
            <h1 className="mb-4 display-3">Jokes Generator</h1>
            <h2 className="mb-2 fs-1">Find the one that makes you laugh...</h2>
            <p className="mb-1 display-2"><FontAwesomeIcon icon={faArrowAltCircleDown}/></p>
            <Button fetchData={fetchData}/>
            <Joke joke={joke} />
        </div>
    );
}
