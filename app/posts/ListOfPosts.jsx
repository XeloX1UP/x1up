import Link from "next/link";
import { LikeButton } from "../../components/likeButton/LikeButton";

const fetchPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};

export async function ListOfPosts() {
  const posts = await fetchPosts();

  return (
    <section>
      {posts.slice(0, 10).map((post) => (
        <article key={post.id}>
          <Link href="/posts/[id]" as={`/posts/${post.id}`}>
            <h2>{post.title}</h2>
          </Link>
          <p>{post.body}</p>
          <LikeButton id={post.id} />
        </article>
      ))}
    </section>
  );
}
