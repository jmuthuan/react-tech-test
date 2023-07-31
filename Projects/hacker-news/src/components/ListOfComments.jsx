import { styled } from "styled-components";
import Comment from "./Comment";

const CommentsList = styled.li`
    display: block;
    border-left: 1px solid #d3d3d3;
    padding-left: 0.2rem;
`

const ListOfComments = ({ comments }) => {

    return (
        <ul>
            {
                comments.map(id => {
                    return (
                        <CommentsList key={id}>
                            <Comment id={id} />
                        </CommentsList>
                    )
                })
            }
        </ul>
    )
}

export default ListOfComments;