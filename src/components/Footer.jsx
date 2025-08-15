import { 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Linkedin, 
  Facebook, 
  MessageCircle,
  ArrowUp,
  Leaf,
  Globe,
  Heart,
  Users
} from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Nossa Missão', href: '#about' },
    { name: 'Soluções', href: '#services' },
    { name: 'Contato', href: '#contact' }
  ]

  const solutions = [
    'Horta Residencial',
    'Sistema Comercial',
    'Programa Educacional',
    'Kit Superalimentos',
    'Sistema Solar',
    'Consultoria'
  ]

  const resources = [
    'Guia de Hidroponia',
    'Cultivo de Superalimentos',
    'ODS 2 - Fome Zero',
    'Agricultura Sustentável',
    'Blog AgroFuturo',
    'Casos de Sucesso'
  ]

  const socialLinks = [
    {
      icon: <Instagram className="h-5 w-5" />,
      name: "Instagram",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      name: "LinkedIn",
    },
    {
      icon: <Facebook className="h-5 w-5" />,
      name: "Facebook",
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      name: "WhatsApp",
    }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Conteúdo Principal do Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Informações da Empresa */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="bg-green-600 p-2 rounded-lg">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white">
                AgroFuturo
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Transformando a agricultura através da tecnologia hidropônica e superalimentos. 
              Comprometidos com a ODS 2 da ONU para acabar com a fome e promover 
              agricultura sustentável até 2030.
            </p>
            
            {/* Informações de Contato */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-5 w-5 text-green-400" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-5 w-5 text-green-400" />
                <span>contato@agrofuturo.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="h-5 w-5 text-green-400" />
                <span>São Paulo, SP</span>
              </div>
            </div>

            {/* Compromisso ODS */}
            <div className="bg-green-800 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Globe className="h-5 w-5 text-green-300" />
                <span className="font-semibold text-green-100">Compromisso ODS 2</span>
              </div>
              <p className="text-green-200 text-sm">
                Contribuindo para acabar com a fome e promover agricultura sustentável.
              </p>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Navegação
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-green-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Soluções */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Nossas Soluções
            </h4>
            <ul className="space-y-3">
              {solutions.map((solution, index) => (
                <li key={index}>
                  <span className="text-gray-300 hover:text-green-400 transition-colors cursor-pointer">
                    {solution}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Recursos
            </h4>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <span className="text-gray-300 hover:text-green-400 transition-colors cursor-pointer">
                    {resource}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Newsletter AgroFuturo
              </h4>
              <p className="text-gray-300 mb-4">
                Receba dicas de cultivo, novidades sobre hidroponia e atualizações 
                sobre agricultura sustentável.
              </p>
            </div>
            <div className="flex">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-green-400 text-white"
              />
              <button className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-r-lg transition-colors">
                <Mail className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Redes Sociais e Impacto */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Nosso Impacto
              </h4>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-400">500+</div>
                  <div className="text-gray-400 text-sm">Hortas Instaladas</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400">50k+</div>
                  <div className="text-gray-400 text-sm">Pessoas Alimentadas</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400">1M+</div>
                  <div className="text-gray-400 text-sm">Litros de Água Economizados</div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Siga Nossa Jornada
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 rounded-lg text-gray-300 hover:text-white hover:bg-green-600 transition-colors"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Linha Divisória */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} AgroFuturo. Todos os direitos reservados. 
              Contribuindo para a ODS 2 da ONU.
            </div>

            {/* Links Legais */}
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Sustentabilidade
              </a>
            </div>

            {/* Botão Voltar ao Topo */}
            <button
              onClick={scrollToTop}
              className="p-2 bg-green-600 hover:bg-green-700 rounded-lg text-white transition-colors"
              title="Voltar ao topo"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

