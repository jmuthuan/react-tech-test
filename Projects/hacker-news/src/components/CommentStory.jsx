import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ListOfComments from "./ListOfComments";

const URL_COMMENT = "https://hacker-news.firebaseio.com/v0/item/";

const CommentStory = () => {

    const { id } = useParams();
    const [kids, setKids] = useState()

    useEffect(() => {
        const data = fetch(`${URL_COMMENT}${id}.json`)
            .then(res => res.json())
            .then(comments => setKids(comments.kids.slice(0,10)))
            .catch(err => alert('An error ocurred. Please try later...'));
    }, [])


    if (!kids) return <div>LOADING...</div>

    return (
        <ListOfComments comments={kids} />
    )
}

export default CommentStory;