"use client"
import { useState, useEffect } from "react"

const Navigation = () => {
    const [activeSection, setActiveSection] = useState("inicio")

    const menuItems = [
        { id: "inicio", label: "Início", href: "#inicio" },
        { id: "sobre", label: "Sobre", href: "#sobre" },
        { id: "projetos", label: "Projetos", href: "#projetos" },
        { id: "contato", label: "Contato", href: "#contato" }
    ]

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            const sections = menuItems.map(item => item.id)
            const scrollPosition = window.scrollY + 100

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i])
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i])
                    break
                }
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo/Nome */}
                    <div className="flex-shrink-0">
                        <button 
                            onClick={(e) => {
                                e.preventDefault()
                                scrollToSection("inicio")
                            }}
                            className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-indigo-400 hover:to-pink-400 transition-all duration-300"
                        >
                            Yan Campêlo
                        </button>
                    </div>

                    {/* Menu Desktop */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {menuItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        scrollToSection(item.id)
                                    }}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative ${
                                        activeSection === item.id
                                            ? "text-white"
                                            : "text-gray-300 hover:text-white"
                                    }`}
                                >
                                    {item.label}
                                    {activeSection === item.id && (
                                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full"></div>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Menu Mobile */}
                    <div className="md:hidden">
                        <MobileMenu menuItems={menuItems} activeSection={activeSection} scrollToSection={scrollToSection} />
                    </div>
                </div>
            </div>
        </nav>
    )
}

const MobileMenu = ({ menuItems, activeSection, scrollToSection }: {
    menuItems: Array<{id: string, label: string, href: string}>,
    activeSection: string,
    scrollToSection: (id: string) => void
}) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleItemClick = (id: string) => {
        scrollToSection(id)
        setIsOpen(false)
    }

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    {isOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>

            {isOpen && (
                <div className="absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-md border-b border-gray-800">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {menuItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={(e) => {
                                    e.preventDefault()
                                    handleItemClick(item.id)
                                }}
                                className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-all duration-300 ${
                                    activeSection === item.id
                                        ? "text-white bg-gray-800"
                                        : "text-gray-300 hover:text-white hover:bg-gray-700"
                                }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}

export default Navigation

