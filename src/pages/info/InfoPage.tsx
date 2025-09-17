import info from '../../assets/cv/cv.json'


function InfoPage() {

    const sectonCardStyle = "flex-col justify-center items-center border-b-2 border-l-2 rounded-xl m-5 p-5";

    return (
        <main className="">
            <header className="flex justify-center items-center pt-4">
                <h1 className="text-4xl text-center font-medium">{info.personal_info.name}</h1>
            </header>
            
            <article className="grid grid-cols-2 gap-4">
                <section className={sectonCardStyle}>
                    <h2 className="text-3xl text-center font-medium">Erfaringer</h2>
                    <ul>
                        {info.experience.map((e, index) => (
                            <li key={index} className="mt-4 mb-4">
                                <h2 className="text-2xl text-start font-medium">{e.title}</h2>
                                <p className="text-start font-light">{e.period}</p>
                                <p className="text-start">{e.info}</p>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className={sectonCardStyle}>
                    <h2 className="text-3xl text-center font-medium">Prosjekter</h2>
                        <ul>
                            {info.projects.map((p, index) => (
                                <li key={index}>
                                    <h3 className="text-2xl text-center italic">{p.title}</h3>

                                    <ul className="flex">
                                        {p.technologies.map((t, index) => (
                                            <li key={index} className="inline mr-4">
                                                <p className="italic font-extralight">{t}</p>
                                            </li>
                                        ))}
                                    </ul>

                                    <p className="">{p.info}</p>
                                </li>
                            ))}
                        </ul>
                </section>

            </article>

            <article>
                <section className={sectonCardStyle}>
                    <h2 className="text-3xl text-center font-bold">Utdanning</h2>
                    <ul>
                        {[...info.education].reverse().map((e, index) => (
                            <li key={index}>
                                <h3 className="text-2xl font-bold">{e.name}</h3>
                                <p className="">{e.years}</p>
                                <p className="text-center">{e.degree}</p>

                                <ul>
                                    {e.semsters?.reverse().map((m, index) => (
                                        <li key={index}>
                                            <p className="font-light italic">Semester: {m.semester}</p>

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
                    <h2 className="text-3xl text-center font-bold">Teknologier</h2>
                    <ul>
                        {info.technologies.map((tech, index) => (
                            <li key={index}>
                                <p className="">{tech}</p>
                            </li>
                        ))}
                    </ul>
                </section>
            </article>

        </main>
    )
}

export default InfoPage;