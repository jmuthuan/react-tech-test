import Comment from "./Comment";

const ListOfComments = ({ comments }) => {

    return (
        <ul>
            {
                comments.map(id => {
                    return (
                        <li key={id}>
                            <Comment id={id} />
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default ListOfComments;