import React from "react";
import { UserProps } from "../../types/types";

const User: React.FC<UserProps> = ({ user }) => {
    return (
        <div>
            <p>
                {user.firstName} {user.lastName}
            </p>
        </div>
    );
};

export default User;
