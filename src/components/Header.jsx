import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Menu, X, Leaf } from 'lucide-react'

const Header = ({ activeSection, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Início' },
    { id: 'about', label: 'Nossa Missão' },
    { id: 'services', label: 'Soluções' },
    { id: 'contact', label: 'Contato' }
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavClick = (sectionId) => {
    onNavigate(sectionId)
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-green-600 p-2 rounded-lg">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-green-600">
              AgroFuturo
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-gray-700 hover:text-green-600 transition-colors ${
                  activeSection === item.id ? 'text-green-600 font-semibold' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            <Button 
              onClick={() => handleNavClick('contact')}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              Começar Agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-700 hover:text-green-600"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left py-2 px-4 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded transition-colors ${
                    activeSection === item.id ? 'text-green-600 font-semibold bg-green-50' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button 
                onClick={() => handleNavClick('contact')}
                className="mt-4 bg-green-600 hover:bg-green-700 text-white"
              >
                Começar Agora
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header

