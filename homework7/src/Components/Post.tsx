import { PostData, UserData } from "../types/types";

import "../index.css";

const Post: React.FC<{ post: PostData; user: UserData }> = ({ post, user }) => (
    <div className="wx-fool">
        <h2 className="text-base font-medium leading-6"> {user.name}</h2>
        <div className="pl-5">
            <h3 className="title font-plus-jakarta-display text-base font-medium leading-6">
                {post.title}
            </h3>
            <p className="title font-plus-jakarta-display text-sm font-normal leading-8">
                {post.body}
            </p>
        </div>
    </div>
);
export default Post;
