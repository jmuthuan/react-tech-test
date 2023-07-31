import { useEffect, useState } from "react";
import ListOfComments from "./ListOfComments";
import CommentLoader from "./CommentLoader";
import { styled } from "styled-components";
import getRelativeTime from "../utils/getRelativeTime";

const URL_COMMENT = "https://hacker-news.firebaseio.com/v0/item/";

const Details = styled.details`
text-align: start;

& > p{
    margin-top: 0;
    padding-left: 1rem;
}

& > summary > .relative-time{
    color:gray;
    margin-left: 0.5rem;
    font-size: 0.8rem;
}
`

const Comment = ({id})=> {

    const [comment, setComment] = useState();
    
    useEffect(()=>{
        fetch(`${URL_COMMENT}${id}.json`)
        .then(res => res.json())
        .then(data => setComment(data))
        .catch(err => alert('An error ocurred. Please try later...'));
    }, [])

    if(!comment?.text) return <CommentLoader />

    const relativeTime = getRelativeTime(comment.time);
    
    return(    
        <>
        <Details>
            <summary>
               <span>by {comment.by}</span>
               <span>.</span>
               <span className="relative-time">({relativeTime})</span>
            </summary>
            <p>{comment.text}</p>
        </Details>

        {comment.kids?.length >0 && <ListOfComments comments={comment.kids.slice(0,10)}/>}
        </>    
        
    )
}

export default Comment;