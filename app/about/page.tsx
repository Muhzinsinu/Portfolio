import { Navbar } from "@/components/navbar"

export default function About() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Who I Am</h2>
            <p className="text-gray-300 mb-4">
              I'm a passionate web developer with a strong focus on creating beautiful, functional, and user-friendly
              websites. With expertise in modern web technologies, I strive to deliver high-quality solutions that meet
              client needs.
            </p>
            <p className="text-gray-300">
              My journey in web development started several years ago, and since then, I've been continuously learning
              and improving my skills to stay up-to-date with the latest trends and technologies in the industry.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">My Approach</h2>
            <p className="text-gray-300 mb-4">
              I believe in a user-centered approach to web development. Every project I undertake focuses on creating
              intuitive, accessible, and responsive interfaces that provide an excellent user experience across all
              devices.
            </p>
            <p className="text-gray-300">
              I'm detail-oriented and committed to writing clean, maintainable code that follows best practices. I enjoy
              solving complex problems and finding elegant solutions that balance technical requirements with user
              needs.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
