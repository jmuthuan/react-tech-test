import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StoryLoader from "./StoryLoader";

const URL_STORY = "https://hacker-news.firebaseio.com/v0/item/";

const StoryItem = ({ id }) => {
    const [story, setStory] = useState();

    useEffect(() => {
        const item = fetch(`${URL_STORY}${id}.json`)
            .then(res => res.json())
            .then(data => setStory(data))
            .catch(err => alert('An error ocurred. Please try later...'));
    }, [])

    if (!story) return <StoryLoader />
    //console.log(story);

    return (
        <article>
            <header>
                <a href={story.url} target="_blank">{story.title} </a>
                <a href={story.url} target="_blank">({story.url})</a>
            </header>
            <footer>
                <Link to={`/${id}`}>
                    <span>{story.score} points</span>
                    <span>by {story.by}</span>
                    <time>{story.time}</time>
                    <span>{story.kids?.length} comments</span>
                </Link>
            </footer>


        </article>


    )
}

export default StoryItem;