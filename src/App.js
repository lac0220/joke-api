import './App.css';
import Joke from './Joke';
import Button from './Button';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown} from '@fortawesome/free-solid-svg-icons';

export default function App() {
    const [joke, setJoke] = useState(0);

    const generateJoke = () => {
        axios.get("https://v2.jokeapi.dev/joke/Any") 
        .then(response => {
            setJoke(response.data)
            console.log(response.data)
        })
        .catch(error => {
            alert("The server is temporarily unable to service your request")
            console.log(error)
        })  
    }

    useEffect(() => {
        generateJoke();
    }, []);

    if (!joke) {
        return <></>;
    }

    return (
        <div className="container vh-100 pt-5 text-center text-white">
            <h1 className="mb-5 display-3">Jokes Generator</h1>
            <p className="mb-2 fs-1">Find the one that makes you laugh...</p>
            <p className="mb-1 display-2"><FontAwesomeIcon icon={faArrowAltCircleDown}/></p>
            <Button generateJoke={generateJoke} />
            <Joke joke={joke} />
            <footer className="pb-4 fs-4">Copyright &copy; Laszlo Nemeth 2023</footer>
        </div>
    );
}
