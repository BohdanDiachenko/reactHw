import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserProfileData } from "../../types/types.tsx";

import "./UserProfile.scss";

const UserProfile: React.FC = () => {
    const { userId } = useParams();

    const [user, setUser] = useState<UserProfileData | null>(null);

    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await fetch(
                    `https://dummyjson.com/users/${userId}`
                );
                const data = await res.json();
                setUser(data);
            } catch (error) {
                console.error("Error fetching user:", error);
            }
        };
        getUser();
    }, [userId]);

    return userId && user ? (
        <div className="user-profile">
            <div className="image-wrapper">
                <img src={user.image} alt={user.username}></img>
            </div>
            <div className="user-profile-description">
                <span>{`${user.firstName} ${user.lastName}`}</span>
                <p>Age: {user.age}</p>
                <p>Email: {user.email}</p>
                <p>Phone number: {user.phone}</p>
            </div>
        </div>
    ) : (
        <p>Loading...</p>
    );
};

export default UserProfile;
