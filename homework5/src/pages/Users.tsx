import React, { useEffect, useState } from "react";
import User  from "../components/User/User";
import UserProfile from "../components/UserProfile/UserProfile";
import { Link } from "react-router-dom";
import { UserData } from "../types/types";

import "./Users.scss";


const Users: React.FC = () => {
    const [users, setUsers] = useState<UserData[]>([]);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const res = await fetch("https://dummyjson.com/users");
                const data = await res.json();
                setUsers(data.users);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };
        getUsers();
    }, []);

    return (
        <>
            <ul className="users-list">
                {users.length > 0 &&
                    users.map((user) => (
                        <li key={user.id}>
                        <Link to={`${user.id}`} >
                            <User user={user} />
                        </Link>
                        </li>
                    ))}
            </ul>
            <div><UserProfile/></div>
        </>
    );
};

export default Users;
