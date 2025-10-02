import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ChevronDown, MapPin, Phone } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Portfolio } from "@/components/portfolio"
import { ContactForm } from "@/components/contact-form"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center">
        <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              Hi, I&apos;m <span className="text-purple-500">Muhassin TP</span>
            </h1>
            <h2 className="text-3xl font-bold">Web Developer</h2>
            <p className="text-gray-300 max-w-md">
              I create modern, responsive websites that combine intuitive user experiences with sleek, creative design.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild className="bg-purple-500 hover:bg-purple-600 rounded-full px-6">
                <a href="#about">About Me</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full px-6 border-purple-500 text-purple-500 hover:bg-purple-500/10"
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
            <div className="flex gap-4 pt-4">
              <a href="https://www.linkedin.com/in/muhassin-tp/" target="_blank" aria-label="LinkedIn" rel="noreferrer">
                <Linkedin className="w-6 h-6 text-white hover:text-purple-500 transition-colors" />
              </a>
              <a href="https://github.com/Muhzinsinu" target="_blank" aria-label="GitHub" rel="noreferrer">
                <Github className="w-6 h-6 text-white hover:text-purple-500 transition-colors" />
              </a>
              <a href="mailto:muhassin573@gmail.com" aria-label="Email">
                <Mail className="w-6 h-6 text-white hover:text-purple-500 transition-colors" />
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              <Image
                src="https://raw.githubusercontent.com/Muhzinsinu/avatar/99568c0ae645a14bd505c4306f486242561d7f32/ChatGPT%20Image%20Apr%208%2C%202025%2C%2011_03_07%20PM.png
"
                alt="Avatar"
                width={400}
                height={500}
                priority
                className="object-contain"
              />
              {/* Replace with your own avatar image */}
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <a href="#about" aria-label="Scroll down">
            <ChevronDown className="animate-bounce w-6 h-6 text-white" />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
              <p className="text-gray-300 mb-4">
                I'm a dedicated web developer with a passion for crafting visually appealing, highly functional, and
                user-centric websites. Leveraging the latest web technologies, I aim to deliver top-notch digital
                experiences tailored to meet each client's unique goals.
              </p>
              <p className="text-gray-300">
                Over the past few years, I’ve immersed myself in web development, continually expanding my skill set and
                staying ahead of the curve with emerging technologies and design trends.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">My Approach</h3>
              <p className="text-gray-300 mb-4">
                I follow a user-centered approach to web development, ensuring every project delivers intuitive,
                accessible, and fully responsive interfaces. My goal is to create seamless user experiences across all
                devices and platforms.
              </p>
              <p className="text-gray-300">
                In addition to web development, I also have a growing passion for data analytics. I'm familiar with
                tools and techniques for gathering, cleaning, and analyzing data to uncover insights that support
                smarter decision-making. This skill set complements my development work by helping me build more
                data-driven, impactful digital solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-black/95">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SkillCategory
              title="Technical Skills"
              skills={["HTML5", "CSS3", "JavaScript", "SQL", "Excel", "Responsive Design"]}
            />
            <SkillCategory
              title="Soft Skills"
              skills={[
                "Communication",
                "Leadership",
                "Teamwork",
                "Problem Solving",
                "Client Coordination",
                "Creative Thinking",
              ]}
            />
            <SkillCategory
              title="Tools & Platforms"
              skills={["Git", "Power BI", "VS Code", "Figma", "Tableau", "npm", "Vercel", "Netlify"]}
            />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          
          <Portfolio />
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-black/95">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Work Experience</h2>
          <div className="space-y-12 max-w-3xl mx-auto">
            <ExperienceItem
              title="Web Designer"
              company="Up2 Tech Kunnamkulam"
              period="2025 - Present"
              description={[
                "Created user-friendly layouts with a focus on UI/UX best practices",
                "Optimized websites for speed, SEO, and mobile compatibility",
                "Maintained and updated existing websites to improve functionality and performance",
              ]}
            />
          </div>
         <div className="space-y-12 max-w-3xl mx-auto mt-[15px]">
            <ExperienceItem
              title="Web Developer"
              company="Up2 Tech Kunnamkulam"
              period="2024 - Present"
              description={[
                "Developed and customized websites using WordPress and Shopify",
                "Built and modified themes to match brand requirements and enhance user experience",
                "Used Figma designs as references to implement responsive and visually appealing layouts",
                "Collaborated with clients and team members to deliver functional, user-friendly sites",
                "Handled site updates, plugin integrations, and performance optimizations",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Education & Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-purple-500">Education</h3>
              <div className="space-y-8">
                <EducationItem
                  degree="Bachelor of Technology in Computer Science"
                  institution="Kerala Technological University"
                  period="2019 - 2023"
                  description="Explored modern frontend development practices through academic coursework and a research project centered on improving web usability across devices."
                />
                <EducationItem
                  degree="Kerala Higher Secondary Education"
                  institution="NCERT"
                  period="2017 - 2019"
                  description="Completed Higher Secondary Education under the Kerala State Board with a focus on Computer Science, gaining foundational knowledge in programming, web technologies, and IT fundamentals."
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-purple-500">Projects</h3>
              <div className="space-y-4">
                <CertificationItem name="FLAVOUR BOX – AI INTEGRATED CHEF" issuer="College Project" date="2023" />
                <CertificationItem name="COVID-19 VACCINATION DASHBOARD" issuer="Personal Project" date="2024" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black/95">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Get In Touch</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-purple-500 mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-gray-300">Tirur, Kerala</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-purple-500 mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-300">Muhassin573@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-purple-500 mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-gray-300">(+971) 56-805-2880</p>
                    <p className="text-gray-300">(+91) 83048-42865</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-semibold mb-4">Connect With Me</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/muhassin-tp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 p-3 rounded-full hover:bg-purple-500 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://github.com/Muhzinsinu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 p-3 rounded-full hover:bg-purple-500 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="mailto:muhassin573@gmail.com"
                    className="bg-gray-800 p-3 rounded-full hover:bg-purple-500 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  )
}

function SkillCategory({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="bg-gray-900 p-6 rounded-lg">
      <h3 className="text-2xl font-semibold mb-4 text-purple-500">{title}</h3>
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

function ExperienceItem({
  title,
  company,
  period,
  description,
}: {
  title: string
  company: string
  period: string
  description: string[]
}) {
  return (
    <div className="relative pl-8 border-l-2 border-purple-500">
      <div className="absolute -left-[9px] top-0 w-4 h-4 bg-purple-500 rounded-full"></div>
      <h3 className="text-2xl font-semibold">{title}</h3>
      <div className="flex flex-col sm:flex-row sm:items-center text-gray-400 mt-1 mb-4">
        <span className="text-purple-500">{company}</span>
        <span className="hidden sm:block sm:mx-2">•</span>
        <span>{period}</span>
      </div>
      <ul className="space-y-2 text-gray-300">
        {description.map((item, idx) => (
          <li key={idx} className="flex items-start">
            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-2"></span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function EducationItem({
  degree,
  institution,
  period,
  description,
}: {
  degree: string
  institution: string
  period: string
  description: string
}) {
  return (
    <div className="relative pl-8 border-l-2 border-purple-500">
      <div className="absolute -left-[9px] top-0 w-4 h-4 bg-purple-500 rounded-full"></div>
      <h4 className="text-xl font-semibold">{degree}</h4>
      <div className="flex flex-col sm:flex-row sm:items-center text-gray-400 mt-1 mb-2">
        <span className="text-purple-500">{institution}</span>
        <span className="hidden sm:block sm:mx-2">•</span>
        <span>{period}</span>
      </div>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}

function CertificationItem({
  name,
  issuer,
  date,
}: {
  name: string
  issuer: string
  date: string
}) {
  return (
    <div className="bg-gray-900 p-4 rounded-lg">
      <h4 className="text-lg font-semibold">{name}</h4>
      <div className="flex justify-between text-gray-400 mt-1">
        <span>{issuer}</span>
        <span>{date}</span>
      </div>
    </div>
  )
}
