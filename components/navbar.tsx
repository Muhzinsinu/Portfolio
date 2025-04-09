"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav
      className={`py-4 px-6 w-full fixed top-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/90 backdrop-blur-sm shadow-md" : "bg-transparent"}`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#home" className="text-xl font-bold">
          <span className="text-purple-500">M</span>SN<span className="text-purple-500">.</span>
        </a>

        {/* Mobile menu button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink onClick={() => scrollToSection("home")}>Home</NavLink>
          <NavLink onClick={() => scrollToSection("about")}>About</NavLink>
          <NavLink onClick={() => scrollToSection("skills")}>Skills</NavLink>
          <NavLink onClick={() => scrollToSection("portfolio")}>Portfolio</NavLink>
          <NavLink onClick={() => scrollToSection("experience")}>Experience</NavLink>
          <NavLink onClick={() => scrollToSection("education")}>Education</NavLink>
          <NavLink onClick={() => scrollToSection("contact")}>Contact</NavLink>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-sm z-50 p-4 md:hidden">
            <div className="flex flex-col space-y-4">
              <MobileNavLink onClick={() => scrollToSection("home")}>Home</MobileNavLink>
              <MobileNavLink onClick={() => scrollToSection("about")}>About</MobileNavLink>
              <MobileNavLink onClick={() => scrollToSection("skills")}>Skills</MobileNavLink>
              <MobileNavLink onClick={() => scrollToSection("portfolio")}>Portfolio</MobileNavLink>
              <MobileNavLink onClick={() => scrollToSection("experience")}>Experience</MobileNavLink>
              <MobileNavLink onClick={() => scrollToSection("education")}>Education</MobileNavLink>
              <MobileNavLink onClick={() => scrollToSection("contact")}>Contact</MobileNavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

function NavLink({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button onClick={onClick} className="text-gray-300 hover:text-white transition-colors">
      {children}
    </button>
  )
}

function MobileNavLink({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button onClick={onClick} className="text-gray-300 hover:text-white transition-colors block py-2 w-full text-left">
      {children}
    </button>
  )
}
