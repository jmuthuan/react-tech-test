import { useState, useEffect } from "react";
import StoryItem from "./StoryItem";
import StoryLoader from "./StoryLoader";

const URL_TOP_STORIES_ID = "https://hacker-news.firebaseio.com/v0/topstories.json";


const StoryList = () => {
    const [storiesID, setStoriesID] = useState();
    const [size, setSize] = useState(1);

    useEffect(() => {
        const stories = fetch(URL_TOP_STORIES_ID)
            .then(res => res.json())
            //.then(data => setStoriesID(data.slice(0, 10)))
            .then(data => setStoriesID(data))
            .catch(err => alert('An error ocurred. Please try later...'))
    }, [])


    //if (!storiesID) return <StoryLoader />

    return (
        <div>
            <ol>
                {storiesID && storiesID.slice(0,(10*size)).map(id => {
                    return (
                        <li key={id}>
                            <StoryItem id={id} />
                        </li>
                    )
                })}
            </ol>

                <button type="button" onClick={()=>{setSize(size+1)} }>Load More</button>
        </div>
    )
}

export default StoryList;