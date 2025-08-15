import { Button } from '@/components/ui/button.jsx'
import { 
  Droplets, 
  Leaf, 
  Home, 
  Building2, 
  GraduationCap, 
  Users,
  ArrowRight,
  Sprout,
  Sun,
  Zap
} from 'lucide-react'

const Services = () => {
  const solutions = [
    {
      icon: <Home className="h-12 w-12 text-green-600" />,
      title: "Horta Hidropônica Residencial",
      description: "Sistema compacto para produzir vegetais frescos em casa o ano todo, usando 90% menos água.",
      features: ["Produção contínua", "Fácil manutenção", "Sem pesticidas"],
      benefits: "Ideal para famílias que querem alimentos frescos e nutritivos em casa",
      price: "A partir de R$ 1.200"
    },
    {
      icon: <Building2 className="h-12 w-12 text-blue-600" />,
      title: "Sistema Hidropônico Comercial",
      description: "Soluções escaláveis para produção comercial de vegetais e superalimentos em ambiente controlado.",
      features: ["Alta produtividade", "Controle automatizado", "Monitoramento IoT"],
      benefits: "Para empresários que querem investir na agricultura do futuro",
      price: "A partir de R$ 15.000"
    },
    {
      icon: <GraduationCap className="h-12 w-12 text-purple-600" />,
      title: "Programa Educacional",
      description: "Capacitação em hidroponia e cultivo de superalimentos para escolas e comunidades.",
      features: ["Curso prático", "Material didático", "Suporte técnico"],
      benefits: "Educação para transformar comunidades através da agricultura sustentável",
      price: "A partir de R$ 800"
    },
    {
      icon: <Sprout className="h-12 w-12 text-emerald-600" />,
      title: "Kit Superalimentos",
      description: "Sementes e mudas de superalimentos como spirulina, microgreens e plantas medicinais.",
      features: ["Sementes premium", "Guia de cultivo", "Suporte online"],
      benefits: "Para quem quer cultivar alimentos com alta densidade nutricional",
      price: "A partir de R$ 150"
    },
    {
      icon: <Sun className="h-12 w-12 text-yellow-600" />,
      title: "Sistema Solar Integrado",
      description: "Hortas hidropônicas alimentadas por energia solar para máxima sustentabilidade.",
      features: ["Energia renovável", "Autonomia energética", "Zero emissões"],
      benefits: "Solução 100% sustentável para regiões remotas ou off-grid",
      price: "A partir de R$ 8.500"
    },
    {
      icon: <Users className="h-12 w-12 text-indigo-600" />,
      title: "Consultoria Especializada",
      description: "Assessoria técnica para implementação de projetos de agricultura sustentável.",
      features: ["Análise personalizada", "Projeto customizado", "Acompanhamento"],
      benefits: "Para organizações que querem implementar agricultura do futuro",
      price: "A partir de R$ 2.000"
    }
  ]

  const superfoods = [
    {
      name: "Microgreens",
      nutrition: "40x mais nutrientes que vegetais maduros",
      icon: "🌱"
    },
    {
      name: "Spirulina",
      nutrition: "60% proteína, rica em vitamina B12",
      icon: "🟢"
    },
    {
      name: "Wheatgrass",
      nutrition: "Rico em clorofila e antioxidantes",
      icon: "🌾"
    },
    {
      name: "Kale Hidropônico",
      nutrition: "Vitaminas A, C, K e ferro",
      icon: "🥬"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Droplets className="w-4 h-4 mr-2" />
            Tecnologia Hidropônica
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Soluções para a Agricultura do Futuro
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sistemas inteligentes que usam água e nutrientes de forma eficiente, 
            produzindo mais com menos espaço e contribuindo para a ODS 2.
          </p>
        </div>

        {/* Grid de Soluções */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Ícone */}
              <div className="bg-gray-50 rounded-lg p-4 w-fit mb-6 group-hover:bg-gray-100 transition-colors">
                {solution.icon}
              </div>

              {/* Conteúdo */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {solution.title}
                </h3>
                <p className="text-gray-600">
                  {solution.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Benefício */}
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-green-800 font-medium">
                    {solution.benefits}
                  </p>
                </div>

                {/* Preço */}
                <div className="pt-4 border-t border-gray-100">
                  <div className="text-lg font-semibold text-green-600 mb-4">
                    {solution.price}
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    Saiba Mais
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Seção Superalimentos */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Superalimentos que Cultivamos
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ingredientes ricos em nutrientes que fortalecem a saúde e combatem a má-nutrição, 
              cultivados com tecnologia hidropônica.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {superfoods.map((superfood, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="text-4xl mb-3">{superfood.icon}</div>
                <h4 className="font-semibold text-gray-900 mb-2">{superfood.name}</h4>
                <p className="text-sm text-gray-600">{superfood.nutrition}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vantagens da Hidroponia */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 md:p-12 text-white mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Por que Hidroponia é o Futuro?
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Droplets className="h-12 w-12 mx-auto mb-4 text-blue-200" />
              <h4 className="text-xl font-semibold mb-2">90% Menos Água</h4>
              <p className="text-green-100">Sistema fechado que recircula água e nutrientes</p>
            </div>
            <div className="text-center">
              <Zap className="h-12 w-12 mx-auto mb-4 text-yellow-200" />
              <h4 className="text-xl font-semibold mb-2">Crescimento 3x Mais Rápido</h4>
              <p className="text-green-100">Nutrição otimizada acelera o desenvolvimento das plantas</p>
            </div>
            <div className="text-center">
              <Leaf className="h-12 w-12 mx-auto mb-4 text-green-200" />
              <h4 className="text-xl font-semibold mb-2">Produção o Ano Todo</h4>
              <p className="text-green-100">Ambiente controlado independe do clima externo</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Pronto para Transformar sua Alimentação?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Junte-se à revolução da agricultura sustentável. Comece pequeno em casa 
            ou implemente soluções comerciais para sua comunidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
              Começar Minha Horta
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3"
            >
              Falar com Especialista
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services

