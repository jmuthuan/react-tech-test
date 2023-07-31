import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StoryLoader from "./StoryLoader";
import { styled } from "styled-components";
import getRelativeTime from "../utils/getRelativeTime";

const URL_STORY = "https://hacker-news.firebaseio.com/v0/item/";

const Header = styled.header`
a{    
    text-decoration: none;
    color: black;
 }

 & > .story-url{
    font-size: 0.9rem;
    color: gray;    
 }
`

const Footer = styled.footer`
    a{    
        text-decoration: none;
        color: gray;
        font-size: 0.8rem;
        margin-right: 0.3rem;
    }
`

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

    let domain = '';
    try {
        domain = new URL(story.url).hostname.replace('www.','');
    } catch {
        
    }

    const relativeTime = getRelativeTime(story.time);
    

    return (
        <article>
            <Header>
                <a href={story.url} target="_blank">{story.title} </a>
                <a className="story-url" href={story.url} target="_blank">({domain})</a>
            </Header>
            <Footer>
                <Link to={`/${id}`}>
                    <span>{story.score} points | </span>
                    <span>by {story.by} | </span>
                    <time>{relativeTime} | </time>
                    <span>{story.kids?.length} comments</span>
                </Link>
            </Footer>


        </article>


    )
}

export default StoryItem;