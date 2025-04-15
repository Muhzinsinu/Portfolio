import Image from "next/image"
import { ExternalLink } from "lucide-react"

type PortfolioItemProps = {
  title: string
  category: string
  image: string
  link: string
  description: string
}

export function Portfolio() {
  const portfolioItems: PortfolioItemProps[] = [
    {
      title: "Vagibiom",
      category: "Ecommerce Shopify",
      image:
        "https://raw.githubusercontent.com/Muhzinsinu/avatar/c19c9ce7a676c02d975b5af5bcba2e704fc78f3b/Vagibiom%20(2).png",
      link: "https://vagibiom.com/",
      description:
        "An ecommerce store built with Shopify featuring custom theme modifications and optimized product pages.",
    },
    {
      title: "Savannah Endodontic Associates",
      category: "CMS WordPress",
      image:
        "https://raw.githubusercontent.com/Muhzinsinu/avatar/58f01f20c9950ec90a72b26c844e45613aeec6b6/Savannah.png",
      link: "https://savannahendo.com/",
      description:
        "A professional medical practice website built with WordPress featuring custom design and functionality.",
    },
    {
      title: "Istorestm",
      category: "Electronics & Accessories Ecommerce",
      image:
        "https://raw.githubusercontent.com/Muhzinsinu/avatar/b24116a4e39319fef7f892e57178f2571009661a/Istorestm.png",
      link: "https://istorestm.com/",
      description:
        "A modern ecommerce store built with Shopify featuring custom design and tech-focused product collections.",
    },
    {
      title: "Harken Audiology",
      category: "CMS WordPress",
      image:
        "https://raw.githubusercontent.com/Muhzinsinu/avatar/b24116a4e39319fef7f892e57178f2571009661a/Harken.png",
      link: "https://www.harkenaudiology.com.au/",
      description:
        "A professional audiology site built with WordPress featuring custom design and hearing care service integration.",
    },
    {
      title: "U.S. Pickleball",
      category: "CMS WordPress",
      image:
        "https://raw.githubusercontent.com/Muhzinsinu/avatar/main/Pickleball.png",
      link: "/",
      description:
        "An official sports site built with WordPress featuring custom design and resources for the pickleball community.",
    },
     {
      title: "Kidorable",
      category: "Ecommerce Shopify",
      image:
        "https://raw.githubusercontent.com/Muhzinsinu/avatar/58f01f20c9950ec90a72b26c844e45613aeec6b6/Kidorable.png",
      link: "https://kidorable.com/",
      description: "A children's product ecommerce site with custom Shopify theme and enhanced user experience.",
    },
  ]

  return (
    <section id="portfolio" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">My Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <PortfolioItem
              key={index}
              title={item.title}
              category={item.category}
              image={item.image}
              link={item.link}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function PortfolioItem({ title, category, image, link, description }: PortfolioItemProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-gray-900 h-full flex flex-col">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={400}
          height={300}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-purple-400 mb-2">{category}</p>
        <p className="text-gray-300 text-sm mb-4 flex-grow">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-white bg-purple-500 hover:bg-purple-600 transition-colors px-4 py-2 rounded-md"
        >
          Visit Website <ExternalLink className="ml-1 w-4 h-4" />
        </a>
      </div>
    </div>
  )
}
