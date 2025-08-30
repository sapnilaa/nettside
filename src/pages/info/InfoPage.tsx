import info from '../../assets/cv/cv.json'


function InfoPage() {

    return (
        <main>
            <header>
                <h1 className="text-4xl text-center">{info.personal_info.name}</h1>
            </header>

            <article className="flex justify-center items-center">
                <ul>
                    {info.experience.map((e, index) => (
                        <li key={index}>
                            <h2 className="text-2xl text-center">{e.title}</h2>
                            <p className="text-center">{e.period}</p>
                            <p>{e.info}</p>
                        </li>
                    ))}
                </ul>
            </article>

            <article className="flex justify-center items-center">
                    <ul>
                        {info.projects.map((p, index) => (
                            <li key={index}>
                                <h2 className="text-2xl text-center">{p.title}</h2>

                                <ul className="flex justify-center items-center">
                                    {p.technologies.map((t, index) => (
                                        <li key={index} className="inline mr-4">
                                            <p className="text-center">{t}</p>
                                        </li>
                                    ))}
                                </ul>

                                <p className="text-center">{p.info}</p>
                            </li>
                        ))}
                    </ul>
            </article>

            <article className="flex justify-center items-center">
                <ul>
                    {[...info.education].reverse().map((e, index) => (
                        <li key={index}>
                            <h2 className="text-2xl">{e.name}</h2>
                            <p className="text-center">{e.years}</p>
                            <p className="text-center">{e.degree}</p>

                            <ul>
                                {e.semsters?.reverse().map((m, index) => (
                                    <li key={index}>
                                        {'semester' in m ? (
                                            <>
                                                <p>Semester: {m.semester}</p>

                                                <ul>
                                                    {m.courses.map((course, index) => (
                                                        <li key={index}>
                                                            <p>{course.courseCode} - {course.courseName}</p>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </>
                                        ) : (
                                            <p>{m.courseCode} - {m.courseName}</p>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </article>

            <article className="flex justify-center items-center">
                <h2 className="text-2xl">Teknologier</h2>
                <ul>
                    {info.technologies.map((tech, index) => (
                        <li key={index}>
                            <p className="text-center">{tech}</p>
                        </li>
                    ))}
                </ul>
            </article>

        </main>
    )
}

export default InfoPage;