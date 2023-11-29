export interface UserProps {
    user: {
        id: number;
        firstName: string;
        lastName: string;
        gender: string;
    };
}

export interface UserProfileData {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    phone: string;
    image: string;
    username: string;
}

export interface UserProfileProps {
    userId: string;
}

export interface UserData {
    id: number;
    firstName: string;
    lastName: string;
    gender: string;
}
