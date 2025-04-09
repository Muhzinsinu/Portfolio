import { Navbar } from "@/components/navbar"

export default function Skills() {
  const frontendSkills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Responsive Design",
  ]

  const backendSkills = [
    "Node.js",
    "Express",
    "MongoDB",
    "SQL",
    "RESTful APIs",
    "Authentication",
    "Server-side Rendering",
  ]

  const toolsSkills = ["Git", "GitHub", "VS Code", "Figma", "Webpack", "npm", "Jest", "Vercel", "Netlify"]

  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-12">My Skills</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SkillCategory title="Frontend Development" skills={frontendSkills} />
          <SkillCategory title="Backend Development" skills={backendSkills} />
          <SkillCategory title="Tools & Platforms" skills={toolsSkills} />
        </div>
      </section>
    </main>
  )
}

function SkillCategory({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="bg-gray-900 p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-purple-500">{title}</h2>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
            <span className="text-gray-300">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
