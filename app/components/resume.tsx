type ResumeSection = {
    role: string;
    company: string;
    period: string;
    bullets: string[];
};

type Resume = {
    name: string;
    title: string;
    summary: string;
    skills: string[];
    experience: ResumeSection[];
    education: { school: string; degree: string; period: string }[];
};

const resume: Resume = {
    name: "Vernord Musran",
    title: "Software Engineer",
    summary: "Hello! I'm Vernord, and I'm passionate about web development and software development. Welcome to my personal website, where I share my journey, skills, and experiences in the world of technology. My journey into software development began with a curiosity for creating digital experiences that are both functional and aesthetically pleasing. Over time, I honed my skills through self-study, online courses, and hands-on projects. My commitment to continuous learning and staying up-to-date with the latest industry trends ensures that I can deliver top-notch solutions to my clients and partners. ",
    skills: ["TypeScript", "React", "Next.js", "C#", "Go", "Docker", "Digital Ocean"],
    experience: [
        {
            role: "Software Engineer",
            company: "Incoline Resources Sdn. Bhd.",
            period: "Nov 2023 - Present",
            bullets: [
                "Implemented and managed cron jobs for automated task scheduling and provisioning workflows.",
                "Contributed to a self-service provisioning platform, developing the automation that binds user domains to servers and deploys websites.",
                "Developed API-triggered APK build automation for streamlined mobile app delivery.",
                "Built a Telegram bot to trigger remote automation scripts on managed servers.",
                "Worked on multi-tenant backend systems using ASP.NET Core, SQL Server, and Docker.",
            ],
        },
        {
            role: "Website and SEO Intern",
            company: "Weave Asia",
            period: "March 2023 - Sept 2023",
            bullets: ["Technical SEO, On-Page Off Page SEO", "Create wordpress theme"],
        },
    ],
    education: [
        {
            school: "Universiti Malaysia Sabah",
            degree: "Bachelors of Computer Science (Software Engineering)",
            period: "2019 - 2023",
        },
    ],
};

export default function Resume() {
    return (
        <div className="flex flex-col gap-4">
            <div>
                <h2 className="text-xl font-semibold">{resume.name}</h2>
                <p>{resume.title}</p>
            </div>

            <div>
                <h3 className="font-semibold">Summary</h3>
                <p>{resume.summary}</p>
            </div>

            <div>
                <h3 className="font-semibold">Skills</h3>
                <div className="flex flex-wrap gap-2">
                    {resume.skills.map((skill) => (
                        <span key={skill}>{skill}</span>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="font-semibold">Experience</h3>
                <div className="flex flex-col gap-3">
                    {resume.experience.map((entry, i) => (
                        <div key={i}>
                            <div className="flex flex-wrap justify-between gap-2">
                                <span className="font-semibold">
                                    {entry.role} -&gt; {entry.company}
                                </span>
                                <span>{entry.period}</span>
                            </div>
                            <ul className="list-disc list-inside">
                                {entry.bullets.map((bullet, j) => (
                                    <li key={j}>{bullet}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="font-semibold">Education</h3>
                <div className="flex flex-col gap-2">
                    {resume.education.map((entry, i) => (
                        <div key={i} className="flex flex-wrap justify-between gap-2">
                            <span>
                                {entry.degree} -&gt; {entry.school}
                            </span>
                            <span>{entry.period}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
