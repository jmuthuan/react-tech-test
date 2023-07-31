import { useState, useEffect } from "react";
import StoryItem from "./StoryItem";
import { styled } from "styled-components";

const URL_TOP_STORIES_ID = "https://hacker-news.firebaseio.com/v0/topstories.json";

const ItemLi = styled.li`
    margin: 0.5rem;
    padding-left: 0.5rem;
    text-align: start;
    
    &::marker{
        color: gray;
        font-size: 1rem;    
    }
`

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


    return (
        <div>
            <ol>
                {storiesID && storiesID.slice(0, (10 * size)).map(id => {
                    return (
                        <ItemLi key={id}>
                            <StoryItem id={id} />
                        </ItemLi>
                    )
                })}
            </ol>

            <button type="button" onClick={() => { setSize(size + 1) }}>Load More</button>
        </div>
    )
}

export default StoryList;