import { Navbar } from "@/components/navbar"

export default function Education() {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "University of Technology",
      period: "2016 - 2018",
      description:
        "Specialized in Web Technologies and User Interface Design. Completed thesis on Responsive Web Design Patterns for Modern Applications.",
    },
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "State University",
      period: "2012 - 2016",
      description:
        "Focused on software development and web technologies. Participated in various hackathons and coding competitions.",
    },
  ]

  const certifications = [
    {
      name: "Advanced React and Redux",
      issuer: "Udemy",
      date: "2022",
    },
    {
      name: "Full Stack Web Development",
      issuer: "Coursera",
      date: "2021",
    },
    {
      name: "UI/UX Design Fundamentals",
      issuer: "Interaction Design Foundation",
      date: "2020",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-12">Education & Certifications</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-purple-500">Education</h2>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-purple-500">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-purple-500 rounded-full"></div>
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center text-gray-400 mt-1 mb-2">
                    <span className="text-purple-500">{edu.institution}</span>
                    <span className="hidden sm:block sm:mx-2">•</span>
                    <span>{edu.period}</span>
                  </div>
                  <p className="text-gray-300">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6 text-purple-500">Certifications</h2>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gray-900 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold">{cert.name}</h3>
                  <div className="flex justify-between text-gray-400 mt-1">
                    <span>{cert.issuer}</span>
                    <span>{cert.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
