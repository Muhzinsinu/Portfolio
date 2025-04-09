import { Navbar } from "@/components/navbar"

export default function Experience() {
  const experiences = [
    {
      title: "Senior Web Developer",
      company: "Tech Solutions Inc.",
      period: "2021 - Present",
      description: [
        "Led the development of responsive web applications using React and Next.js",
        "Implemented modern UI/UX designs with Tailwind CSS and Framer Motion",
        "Collaborated with cross-functional teams to deliver high-quality products",
        "Mentored junior developers and conducted code reviews",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Digital Creations",
      period: "2018 - 2021",
      description: [
        "Developed and maintained client websites using JavaScript and React",
        "Created responsive layouts and implemented design systems",
        "Optimized website performance and improved page load times",
        "Worked closely with designers to implement pixel-perfect interfaces",
      ],
    },
    {
      title: "Web Design Intern",
      company: "Creative Studio",
      period: "2017 - 2018",
      description: [
        "Assisted in the design and development of client websites",
        "Created wireframes and prototypes using Figma",
        "Implemented responsive designs using HTML, CSS, and JavaScript",
        "Participated in client meetings and brainstorming sessions",
      ],
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-12">Work Experience</h1>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-purple-500">
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-purple-500 rounded-full"></div>
              <h2 className="text-2xl font-semibold">{exp.title}</h2>
              <div className="flex flex-col sm:flex-row sm:items-center text-gray-400 mt-1 mb-4">
                <span className="text-purple-500">{exp.company}</span>
                <span className="hidden sm:block sm:mx-2">•</span>
                <span>{exp.period}</span>
              </div>
              <ul className="space-y-2 text-gray-300">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-2"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
