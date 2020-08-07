import axios from 'axios';
const Post = ({ id, comments }) => (
    <>
        <h1>Comments for post #{id}!</h1> 
        {comments.map(comment => (
            <Comment {...comment} key={comment.id}/>
        ))}
    </>
);
const Comment = ({ email, body }) => (
    <div>
        <h5>{email}</h5>
        <p>{body}</p>
    </div>
);
Post.getInitialProps = async ({ query }) => {
    const res =  await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${query.id}`);
    const { data } = res;
    return {...query, comments: data};
}
export default Post;