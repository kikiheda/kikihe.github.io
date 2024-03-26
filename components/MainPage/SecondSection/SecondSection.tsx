import Image from "next/image";
// Assets
// import AboutGif from "public/SecondSection/About.gif";
const AboutGif = "SecondSection/About.gif"

function SecondSection() {
    return (
        <section
            className="flex min-h-screen w-full items-center py-20"
            id="about"
        >
            <div className="mx-auto about-content-container">
                <div>
                    <h1 className="hide about-title text-8xl text-primary-100 font-bold">
                        About me
                    </h1>
                </div>
                <div className=" mx-auto about-image-text-container max-w-7xl cursor-default items-center justify-between gap-5">
                    <div className="hide about-image-container">
                        <div>
                            <img style={{width:"100%"}} src={AboutGif} alt="About Me Section gif"></img>
                        </div>
                    </div>
                    <div className="hide delay about-text-container flex w-full flex-col gap-6 text-justify">
                        <p className="font-semibold text-black">
                            Hey! My name is Kiki and welcome again to my page!
                            I have been working with data for five years and graduated from University of Toronto with my master degree in 2024.
                            Web development is one of my part-time hobbies.
                        </p>
                        <p className="font-semibold text-black">
                            I started my data science journey in 2017. It all started with an idea: <strong>HOW</strong> can I book hotels and plane tickets at cheaper prices? 
                            I was obssessed with travelling and I always wanted to find out what caused the prices go up and down. 
                            Then it hit me: <em>why don't I learn data science and see the answers myself?</em>
                        </p>
                        <p className="font-semibold text-black">
                            Upon completiong of a technical diploma, I decided to go further and became a graduate student at UofT, eager to absorb as much knowledge
                            as possible to Data Science and have done multiple projects on classification and regression. While I work as a data analyst at the same time, I managed to finish  my degree on time.
        
                        </p>
                        <p className="font-semibold text-black">
                            Thanks to my passion for programming and willingness to learn new things, I am open to all the possibilities and ready for challenges!

                        </p>
                    </div>
                </div>
                {/* <div className="hide more-about flex justify-content-center">
                    <a
                        href="/moreAboutMe"
                        rel="noopener noreferrer"
                        className="flex justify-center text-2xl rounded-lg border-2 border-primary-100 px-3 py-2 text-primary-100 hover:bg-primary-200 hover:border-primary-200 hover:text-white md:w-1/3"
                    >More about me...</a>
                </div> */}
            </div>
        </section>
    );
}

export default SecondSection;
