import { HoverEffect } from "./card-hover-effect";

export default function ProjectsSection() {
    return (
        <div className="mt-20 md:mt-40 max-w-screen-xl px-6 md:px-10 mx-auto" id="projects">
            <h1 className="text-3xl md:text-4xl text-center font-semibold tracking-wide underline underline-offset-8 decoration-cyan-400" data-aos="fade">
                Projects
            </h1>

            <div className="mt-10 flex flex-col lg:flex-row gap-10 lg:gap-20" data-aos="fade-up">
                <HoverEffect items={projects} />
            </div>
        </div>
    );
}

export const projects = [
    {
        title: "Helvi",
        description: "Healthy Environment for Sustainable Smart City",
        link: "https://github.com/xGfrost/projectAF.git",
        tech: ["Node.js", "Express.js", "RESTAPI", "Mysql"],
        url: "/images/Helvi.jpg",
    },
    {
        title: "Annect",
        description: "Academy Connect",
        link: "https://annect.vercel.app/",
        tech: ["Node.js", "Express.js", "RESTAPI", "Mysql"],
        url: "/images/Annect.jpg",
    },
    {
        title: "Diflex",
        description: "Diflex is a platform that provides a geographic information system (GIS) to display the location of wheelchair-friendly and mobility-impaired public facilities. The goal is to help physically challenged users find accessible public facilities easily and safely.",
        link: "https://diflex.vercel.app/",
        tech: ["Express.js", "RESTAPI", "PostgreSQL"],
        url: "/images/diflex.png",
    },
];
