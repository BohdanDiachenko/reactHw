export interface User {
    avatar: string;
    name: string;
}

export interface Course {
    id: number;
    image: string;
    level: string;
    title: string;
    user: User;
    rating: number;
    students: number;
    modules: number;
    finishedModules?: number;
    duration: number;
    isMyCourse: boolean;
}