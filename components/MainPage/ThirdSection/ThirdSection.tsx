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
                                source="https://github.com/qiqihe" // TBA
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
                                source="https://github.com/qiqihe" // TBA
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
                                source="https://github.com/qiqihe" // TBA
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

                    {/* {category === "react" && (
                        <>
                            <ProjectItems
                                img={img}
                                title="Create Blog Posts"
                                website="https://serdargokhan-blog.netlify.app/"
                                source="https://github.com/serdargokhan/react-projects/tree/main/5-blog-website"
                                description="I have completed this blog website. It has sign in and sign up utilities. User can sign up, sign in, and create a blog post. sign in and sign up credentials is stored on firebase real-time database. After blog post is created, it will be shown on the home page. I also experienced framer-motion library with this project."
                                stack={
                                    <>
                                        <li>ReactJS</li>
                                        <li>TailwindCSS</li>
                                        <li>Framer-Motion</li>
                                        <li>JavaScript</li>
                                    </>
                                }
                            />
                            
                            
                        </>
                    )} */}
                </div>
            </div>
        </section>
    );
}

export default ThirdSection;
