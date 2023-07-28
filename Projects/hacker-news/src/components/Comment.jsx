import { useEffect, useState } from "react";
import ListOfComments from "./ListOfComments";
import CommentLoader from "./CommentLoader";

const URL_COMMENT = "https://hacker-news.firebaseio.com/v0/item/";

const Comment = ({id})=> {

    const [comment, setComment] = useState();
    
    useEffect(()=>{
        fetch(`${URL_COMMENT}${id}.json`)
        .then(res => res.json())
        .then(data => setComment(data))
        .catch(err => alert('An error ocurred. Please try later...'));
    }, [])

    if(!comment?.text) return <CommentLoader />
    
    return(    
        <>
        <details>
            <summary>
               <span>by {comment.by}</span>
               <span>.</span>
               <span>RELATIVE TIME TODO</span>
            </summary>
             <p>{comment.text}</p>
        </details>

        {comment.kids?.length >0 && <ListOfComments comments={comment.kids.slice(0,10)}/>}
        </>    
        
    )
}

export default Comment;