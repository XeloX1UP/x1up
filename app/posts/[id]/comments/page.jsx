const fetchSinglePostComment = (id) => {
  return fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  ).then((res) => res.json());
};

export default async function Post({ params }) {
  const { id } = params;
  const comments = await fetchSinglePostComment(id);
  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>
          <h2>{comment.name}</h2>
          <p>{comment.body}</p>
        </li>
      ))}
    </ul>
  );
}
