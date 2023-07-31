import { useState, useEffect, useRef } from "react";
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

const Button = styled.button`
    background: #d3d3d3;
    border: none;
    box-shadow: 4px 4px 4px #a3a3a3;
    padding: 0.5rem;
    font-weight: 700; 
    border-radius: 5px;
    margin-bottom: 2rem;
`

const StoryList = () => {
    const [storiesID, setStoriesID] = useState();
    const [size, setSize] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    const bottomButton = useRef();
    const elChivato = useRef(null);

    useEffect(() => {
        setIsLoading(true);
        const stories = fetch(URL_TOP_STORIES_ID)
            .then(res => res.json())            
            .then(data => {
                setStoriesID(data);
                setIsLoading(false)}
                )
            .catch(err => alert('An error ocurred. Please try later...'));        
    }, [])

    useEffect(()=>{
        scrollToBottom();
    },[size])
    

    const scrollToBottom = ()=>{        
        bottomButton.current.scrollIntoView({behavior: 'smooth' })        
    }


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

            <Button ref={bottomButton} type="button" onClick={()=>{setSize(size+1)}}>Load More</Button>

            {!isLoading && <span ref={elChivato}> </span>}
        </div>
    )
}

export default StoryList;