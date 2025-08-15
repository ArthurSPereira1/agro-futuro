import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  Instagram,
  Linkedin,
  Facebook,
  Leaf,
  Users,
  BookOpen
} from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui você pode implementar a lógica de envio do formulário
    console.log('Dados do formulário:', formData)
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve para ajudar você a começar sua jornada na agricultura do futuro.')
    
    // Limpar formulário
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-green-600" />,
      title: "Telefone",
      info: "(11) 99999-9999",
      link: "tel:+5511999999999"
    },
    {
      icon: <Mail className="h-6 w-6 text-green-600" />,
      title: "E-mail",
      info: "contato@agrofuturo.com",
      link: "mailto:contato@agrofuturo.com"
    },
    {
      icon: <MapPin className="h-6 w-6 text-green-600" />,
      title: "Endereço",
      info: "São Paulo, SP",
      link: "#"
    },
    {
      icon: <Clock className="h-6 w-6 text-green-600" />,
      title: "Horário",
      info: "Seg-Sex: 8h às 18h",
      link: "#"
    }
  ]

  const socialLinks = [
    {
      icon: <Instagram className="h-6 w-6" />,
      name: "Instagram",
      color: "hover:text-pink-600"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      name: "LinkedIn",
      color: "hover:text-blue-700"
    },
    {
      icon: <Facebook className="h-6 w-6" />,
      name: "Facebook",
      color: "hover:text-blue-600"
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      name: "WhatsApp",
      color: "hover:text-green-600"
    }
  ]

  const helpOptions = [
    {
      icon: <Leaf className="h-8 w-8 text-green-600" />,
      title: "Começar uma Horta",
      description: "Quer começar sua própria horta hidropônica em casa ou no trabalho?"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Projeto Comunitário",
      description: "Implementar agricultura sustentável em sua comunidade ou escola?"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-purple-600" />,
      title: "Aprender Hidroponia",
      description: "Interessado em nossos cursos e programas educacionais?"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Leaf className="w-4 h-4 mr-2" />
            Vamos Cultivar o Futuro Juntos
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos aqui para ajudar você a começar sua jornada na agricultura do futuro. 
            Seja para uma horta doméstica ou um projeto comercial, temos a solução ideal.
          </p>
        </div>

        {/* Opções de Ajuda */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {helpOptions.map((option, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:bg-gray-100 transition-colors">
              <div className="bg-white rounded-lg p-4 w-fit mx-auto mb-4 shadow-sm">
                {option.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{option.title}</h3>
              <p className="text-gray-600 text-sm">{option.description}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Informações de Contato */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                  >
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{item.title}</div>
                      <div className="text-gray-600">{item.info}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Redes Sociais */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Siga Nossa Jornada Sustentável
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-gray-100 rounded-lg text-gray-600 ${social.color} transition-colors`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Compromisso ODS */}
            <div className="bg-green-600 rounded-xl p-6 text-white">
              <h4 className="text-lg font-semibold mb-3">Nosso Compromisso com a ODS 2</h4>
              <p className="text-green-100 text-sm leading-relaxed">
                Cada projeto que desenvolvemos contribui diretamente para o Objetivo de 
                Desenvolvimento Sustentável 2 da ONU: acabar com a fome, alcançar a 
                segurança alimentar e melhoria da nutrição, e promover a agricultura sustentável.
              </p>
            </div>

            {/* Mapa Placeholder */}
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <MapPin className="h-12 w-12 mx-auto mb-2" />
                <p className="font-medium">Centro de Inovação Agrícola</p>
                <p className="text-sm">Visite nossa fazenda vertical demonstrativa</p>
              </div>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Vamos Conversar sobre seu Projeto
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Interesse *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Selecione seu interesse</option>
                    <option value="horta-residencial">Horta Residencial</option>
                    <option value="sistema-comercial">Sistema Comercial</option>
                    <option value="programa-educacional">Programa Educacional</option>
                    <option value="consultoria">Consultoria</option>
                    <option value="parceria">Parceria</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Conte-nos sobre seu projeto *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                  placeholder="Descreva seu interesse em agricultura sustentável, espaço disponível, objetivos do projeto..."
                ></textarea>
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3"
              >
                Enviar Mensagem
                <Send className="ml-2 h-5 w-5" />
              </Button>

              <p className="text-xs text-gray-500 text-center">
                Ao enviar esta mensagem, você concorda em receber informações sobre 
                agricultura sustentável e soluções hidropônicas.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

