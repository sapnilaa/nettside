import info from '../../assets/cv/cv.json'

const coursePageLinks = [
    { key: "IN1000", value: "https://www.uio.no/studier/emner/matnat/ifi/IN1000/" },
    { key: "IN1020", value: "https://www.uio.no/studier/emner/matnat/ifi/IN1020/" },
    { key: "EXPHIL03", value: "https://www.uio.no/studier/emner/hf/ifikk/EXPHIL03/" },
    { key: "IN1010", value: "https://www.uio.no/studier/emner/matnat/ifi/IN1010/" },
    { key: "IN1030", value: "https://www.uio.no/studier/emner/matnat/ifi/IN1030/" },
    { key: "IN1150", value: "https://www.uio.no/studier/emner/matnat/ifi/IN1150/" },
    { key: "IN2010", value: "https://www.uio.no/studier/emner/matnat/ifi/IN2010/" },
    { key: "IN2029", value: "https://www.uio.no/studier/emner/matnat/ifi/IN2090/" },
    { key: "IN2120", value: "https://www.uio.no/studier/emner/matnat/ifi/IN2120/" },
    { key: "IN2000", value: "https://www.uio.no/studier/emner/matnat/ifi/IN2000/" },
    { key: "IN2140", value: "https://www.uio.no/studier/emner/matnat/ifi/IN2140/" },
    { key: "IN2040", value: "https://www.uio.no/studier/emner/matnat/ifi/IN2040/" },
    { key: "IN3040", value: "https://www.uio.no/studier/emner/matnat/ifi/IN3040/" },
    { key: "AST1010", value: "https://www.uio.no/studier/emner/matnat/astro/AST1010/" },
    { key: "IN2031", value: "https://www.uio.no/studier/emner/matnat/ifi/IN2031/" },
    { key: "IN2110", value: "https://www.uio.no/studier/emner/matnat/ifi/IN2110/" },
    { key: "IN2150", value: "https://www.uio.no/studier/emner/matnat/ifi/IN2150/" },
    { key: "IN3240", value: "https://www.uio.no/studier/emner/matnat/ifi/IN3240/" },
]

const createHyperlinkToCourse = (courseCode: string, courseTitle: string) => {
    const match = coursePageLinks.find(({key}) => key === courseCode);

    if (match) {
        return <a className ="hover:underline" href={match.value}>{match.key} - {courseTitle}</a>;
    } else {
        return null;
    }
}  


function InfoPage() {

    const sectonCardStyle = "flex-col justify-center items-center border-b-2 border-l-2 rounded-xl m-5 p-5";

    return (
        <main className="">
            <article className="grid grid-cols-2 gap-4 mt-4">
                <section className={sectonCardStyle}>
                    <h2 className="text-3xl text-center font-medium mb-4">Erfaringer</h2>
                    <ul>
                        {info.experience.map((e, index) => (
                            <li key={index} className="mt-4 mb-4">
                                <h3 className="text-xl text-center italic">{e.title}</h3>
                                <p className="text-start font-light">{e.period}</p>
                                <p className="text-start">{e.info}</p>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className={sectonCardStyle}>
                    <h2 className="text-3xl text-center font-medium mb-4">Prosjekter</h2>
                        <ul>
                            {info.projects.map((p, index) => (
                                <li key={index}>
                                    <h3 className="text-xl text-center italic">{p.title}</h3>

                                    <ul className="flex overflow-scroll no-scrollbar">
                                        {p.technologies.map((t, index) => (
                                            <li key={index} className="inline mr-4">
                                                <p className="italic font-extralight whitespace-nowrap">{t}</p>
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
                    <h2 className="text-3xl text-center font-medium">Utdanning</h2>
                    <ul>
                        {[...info.education].reverse().map((e, index) => (
                            <li key={index}>
                                <h3 className="text-xl text-center italic mt-8">{e.degree}</h3>
                                <p className="font-extralight text-center">{e.years}</p>
                                <p className="font-medium text-center">{e.name}</p>

                                <ul className="grid grid-cols-2">
                                    {e.semsters?.reverse().map((m, index) => (
                                        <li key={index}>
                                            <p className="font-light italic mt-4 underline">{m.semester}. semester</p>

                                            <ul>
                                                {m.courses.map((course, index) => (
                                                    <li key={index}>
                                                        {/* <p>{course.courseCode} - {course.courseName}</p> */}
                                                        {createHyperlinkToCourse(course.courseCode, course.courseName)}
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
                    <h2 className="text-3xl text-center font-bold mb-4">Teknologier</h2>
                    <ul className="flex overflow-scroll no-scrollbar">
                        {info.technologies.map((tech, index) => (
                            <li key={index} className="inline mr-4">
                                <p className="whitespace-nowrap">{tech}</p>
                            </li>
                        ))}
                    </ul>
                </section>
            </article>

        </main>
    )
}

export default InfoPage;