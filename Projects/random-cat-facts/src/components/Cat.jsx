import { useEffect, useState } from "react";

const FACT_URL = "https://catfact.ninja/fact";
//const IMG_URL = "https://cataas.com/cat/says/hello";
const CAT_URL = "https://api.thecatapi.com/v1/images/search";

const Cat = () => {


    const [fact, setFact] = useState(null);
    const [catImage, setCatImage] = useState(null);

    useEffect(() => {
        const res = fetch(FACT_URL)
            .then(res => res.json())
            .then(data => setFact(data.fact))
            .catch(err => console.log(console.log(err)));
    }, [])

    const firstWord = (text) => {
        let word = text.split(' ', 1)[0];
        return word;
    }

    useEffect(() => {
        if(!fact) return;

        const word = firstWord(fact);

        const img = fetch(CAT_URL)
            .then(res => res.json())
            .then(data => setCatImage(data[0].url))
            .catch(err => console.log(err));

    }, [fact])

    return (
        <div className="fact-cat">
            {fact && <p>
                <span>CAT FACT: </span>
                {fact}
            </p>
            }
            {catImage && <img src={catImage} alt="Cat image realated with forst word of the cat fact..." />}
        </div>

    )

}

export default Cat;