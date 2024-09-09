import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";

const AboutSection: React.FC = () => {
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const words = textRef.current?.querySelectorAll<HTMLSpanElement>(".word");

        if (words) {
            gsap.fromTo(
                words,
                { opacity: 0.3 },
                {
                    opacity: 1,
                    duration: 1,
                    ease: "power1.inOut",
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: textRef.current,
                        start: "top 90%",
                        end: "bottom 50%",
                        scrub: 1,
                        toggleActions: "play none none none",
                        once: true,
                    },
                }
            );
        }
    }, []);

    return (
        <div className="max-w-screen-xl px-6 md:px-10 mx-auto" id="about">
            <h1 className="mt-20 text-3xl md:text-4xl text-center font-semibold tracking-wide underline underline-offset-8 decoration-cyan-400" data-aos="fade">
                About
            </h1>

            <div className="mt-20 flex flex-col lg:flex-row gap-10 lg:gap-20" data-aos="fade-up">
                <div className="lg:w-1/2 order-2 lg:order-1">
                    <div ref={textRef}>
                        <p className="md:text-lg font-medium text">
                            {`Hello! My name is Muhammad Fadel Akbar, and I am a backend developer. I specialize in building and managing the behind-the-scenes systems, ensuring that servers, databases, and applications run smoothly and efficiently. With expertise in developing reliable backend solutions, I play a key role in creating strong foundations for high-performing web applications.`.split(" ").map((word, index) => (
                                <span key={index} className="word inline-block opacity-30">
                                    {word}&nbsp;
                                </span>
                            ))}
                        </p>
                        <p className="mt-4 md:text-lg font-medium text">
                            {`I'm passionate about designing scalable, secure, and efficient system architectures, and I continuously learn new technologies to enhance my ability to solve backend development challenges. Outside of work, I enjoy exploring new tools and frameworks to stay at the forefront of technological advancements.`.split(" ").map((word, index) => (
                                <span key={index} className="word inline-block opacity-30">
                                    {word}&nbsp;
                                </span>
                            ))}
                        </p>
                    </div>
                </div>

                <div className="lg:w-1/3 flex justify-center items-center order-1 lg:order-2 mx-auto">
                    <div className="w-4/5 sm:w-1/2 md:w-1/3 lg:w-4/5">
                        <Image src="/images/Fadel.jpeg" height={1000} width={1000} className="rounded-xl" alt="Rivaldo Tandoko" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
