import Post from "../Components/Post";
import useFetch from "../hooks/useFetch";
import { PostData, UserData } from "../types/types";

const Posts = () => {
    const { data, isLoading, error, refetch } = useFetch<PostData[]>(
        "https://jsonplaceholder.typicode.com/posts"
    );
    const usersFetch = useFetch<UserData[]>(
        "https://jsonplaceholder.typicode.com/users"
    );
    return (
        <div>
            <h2 className="mb-4  text-gray-900  lg:text-3xl  text-center">
                Posts
            </h2>
            <button
                onClick={() => {
                    refetch(), usersFetch.refetch();
                }}
                className="px-3 py-2 mb-7 bg-green-100 rounded-lg hover:bg-green-200"
            >
                REFETCH
            </button>
            {isLoading && <p>Loading posts...</p>}
            {error && <p>Error loading posts: {error}</p>}
            {data && usersFetch.data && (
                <ul className="list-none ">
                    {data.map((post) => {
                        const user = usersFetch.data.find(
                            (u) => u.id === post.userId
                        );
                        return user ? (
                            <li
                                className="mb-6 bg-gray-100 bg-opacity-40 rounded-lg px-7 py-3 "
                                key={post.id}
                            >
                                <Post post={post} user={user} />
                            </li>
                        ) : null;
                    })}
                </ul>
            )}
        </div>
    );
};
export default Posts;
