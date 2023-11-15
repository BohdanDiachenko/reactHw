import "./Card.scss";
import { Course } from "../types/types";

const Card = ({ courses }: { courses: Course[] }) => {
    const calculateDuration = (seconds: number): string => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const hoursString = hours > 0 ? `${hours}h` : "";
        const minutesString = minutes > 0 ? ` ${minutes}m` : "";

        return `${hoursString}${minutesString}` || "0m";
    };

    return (
        <div>
            {courses.map((course) => (
                <div className="card" key={course.id}>
                    <div className="image__container">
                        <img src={course.image} alt="" />
                        <div className="level">{course.level}</div>
                    </div>
                    <h3 className="card__title">{course.title}</h3>

                    <div className="card__info">
                        <div className="user">
                            <img
                                src={course.user.avatar}
                                alt={course.user.name}
                            />
                            <p>{course.user.name}</p>
                        </div>
                        <div className="rating">
                            <p>{course.rating}</p>
                        </div>
                    </div>
                    {course.finishedModules ? (
                        <div>
                            <progress
                                value={course.finishedModules}
                                max={course.modules}
                            >
                                {(
                                    (course.finishedModules / course.modules) *
                                    100
                                ).toFixed(2)}
                                %
                            </progress>
                            <div className="card__info">
                                <p>{`${course.finishedModules} / ${course.modules} Modules`}</p>
                                <div>
                                    {(
                                        (course.finishedModules /
                                            course.modules) *
                                        100
                                    ).toFixed(0)}
                                    %
                                </div>
                            </div>
                        </div>
                    ) : (
                        ""
                    )}
                    <div className="card__info">
                        <div>{course.students} Student</div>
                        <div>{course.modules} Modules</div>
                        <div>{calculateDuration(course.duration)}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;
