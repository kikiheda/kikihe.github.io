import { useState } from "react";
// Components
import Categories from "./Categories";
import ProjectItems from "./ProjectItems";

function ThirdSection() {
    const [category, setCategory] = useState("next");

    return (
        <section className="min-h-full w-full bg-white py-20" id="projects">
            <div className="mx-auto w-11/12 max-w-7xl">
                <p className="project-hide project-title font-bold text-primary-100">
                    Projects
                </p>
                <div className="project-container gap-x-30 grid grid-cols-1 gap-y-28 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2">
                    {category === "next" && (
                        <>
                            <ProjectItems
                                // imgId="AWS"
                                title="Project 1"
                                source="https://github.com/kikiheda/ds-projects" // TBA
                                // resume="Resume.pdf" move this resume under About Me
                                description={
                                    <>
                                        Description (TBA)
                                    </>
                                }
                                stack={
                                    <>
                                        <li>Python</li>
                                        <li>Tableau</li>
                                    </>
                                }
                            />
                            <ProjectItems
                                // imgId="Midea"
                                title="Project 2"
                                // resume="Resume.pdf"
                                source="https://github.com/kikiheda/ds-projects" // TBA
                                description={
                                    <>
                                        Description (TBA)
                                    </>
                                }
                                stack={
                                    <>
                                        <li>Python</li>
                                        <li>SQL</li>
                                    </>
                                }
                            />
                            <ProjectItems
                                // imgId="TickMaster"
                                title="Project 3"
                                source="https://github.com/kikiheda/ds-projects" // TBA
                                description={
                                    <>
                                        Description (TBA)
                                    </>
                                }
                                stack={
                                    <>
                                        <li>Machine Learning</li>
                                        <li>Unsupervised</li>
                                        <li>Prediction</li>
                                    </>
                                }
                            />
                        
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}

export default ThirdSection;
