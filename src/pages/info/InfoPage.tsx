import info from '../../assets/cv/cv.json'


function InfoPage() {

    const sectonCardStyle = "flex-col justify-center items-center border-black rounded-xl bg-purple-400 m-5 p-5"

    return (
        <main className="bg-purple-200">
            <header className="flex justify-center items-center pt-4">
                <h1 className="text-4xl text-center text-purple-500 font-bold">{info.personal_info.name}</h1>
            </header>

            <article className="grid grid-cols-2">
                <section className={sectonCardStyle}>
                    <h2 className="text-3xl text-center text-purple-900 font-bold">Erfaringer</h2>
                    <ul>
                        {info.experience.map((e, index) => (
                            <li key={index} className="mt-4 mb-4">
                                <h2 className="text-2xl text-start font-bold text-purple-900">{e.title}</h2>
                                <p className="text-start font-semibold">{e.period}</p>
                                <p className="text-start">{e.info}</p>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className={sectonCardStyle}>
                    <h2 className="text-3xl text-center text-purple-900 font-bold">Prosjekter</h2>
                        <ul>
                            {info.projects.map((p, index) => (
                                <li key={index}>
                                    <h3 className="text-2xl text-center font-bold text-purple-900">{p.title}</h3>

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
                </section>

                <section className={sectonCardStyle}>
                    <h2 className="text-3xl text-center text-purple-900 font-bold">Utdanning</h2>
                    <ul>
                        {[...info.education].reverse().map((e, index) => (
                            <li key={index}>
                                <h3 className="text-2xl font-bold text-purple-900">{e.name}</h3>
                                <p className="text-center">{e.years}</p>
                                <p className="text-center">{e.degree}</p>

                                <ul>
                                    {e.semsters?.reverse().map((m, index) => (
                                        <li key={index}>
                                            <p>Semester: {m.semester}</p>

                                            <ul>
                                                {m.courses.map((course, index) => (
                                                    <li key={index}>
                                                        <p>{course.courseCode} - {course.courseName}</p>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className={sectonCardStyle}>
                    <h2 className="text-3xl text-center font-bold text-purple-900">Teknologier</h2>
                    <ul>
                        {info.technologies.map((tech, index) => (
                            <li key={index}>
                                <p className="text-center">{tech}</p>
                            </li>
                        ))}
                    </ul>
                </section>
            </article>

        </main>
    )
}

export default InfoPage;