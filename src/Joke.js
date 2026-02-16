import { useEffect, useState } from "react";

export default function Joke({ joke, onRevealStart, onRevealEnd }) {
    const [delivery, setDelivery] = useState('');

    useEffect(() => {
        if (!joke) return;

        setDelivery('');

        if (joke.type === 'twopart') {
            onRevealStart();

            const timer = setTimeout(() => {
                setDelivery(joke.delivery);
                onRevealEnd();
            }, 3000);

            return () => clearTimeout(timer);
        } else {
            onRevealEnd();
        }
    }, [joke.id]);

    return (
        <div className="mt-5 overflow-auto" style={{ height: "23rem" }}>
            {
                joke.type === 'single'
                    ? <h2 className="display-5">{joke.joke}</h2>
                    : <>
                        <h2 className="display-5">{joke.setup}</h2>
                        <h3 className="pt-5 fst-italic fs-1">{delivery}</h3>
                      </>
            }
        </div>
    );
}