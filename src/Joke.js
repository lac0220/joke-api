import { useEffect, useState } from "react";

export default function Joke({joke}) {
    const [delivery, setDelivery] = useState('');

    // if joke is "twopart" type from API
    useEffect(() => {
        setDelivery('');
        if (joke.type === 'twopart') {
        setTimeout(() => {
            setDelivery(joke.delivery);
        }, 3000);
        }
    }, [joke]);

    return (
        <div class="mt-5">
            {joke.type === 'single' ? 
                <h1 className="display-5">{joke.joke}</h1>  : 
                <>
                    <h2 className="display-5">{joke.setup}</h2> 
                    <h3 className="pt-3 fst-italic fs-1">{delivery}</h3>
                </>
            }
        </div>
    )
}