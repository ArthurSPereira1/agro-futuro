import { CheckCircle, Target, Globe, Droplets, Leaf, Heart } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: <Target className="h-8 w-8 text-green-600" />,
      title: "ODS 2 - Fome Zero",
      description: "Comprometidos com o Objetivo de Desenvolvimento Sustentável 2 da ONU para acabar com a fome até 2030."
    },
    {
      icon: <Droplets className="h-8 w-8 text-blue-600" />,
      title: "Hidroponia Inteligente",
      description: "Sistemas que usam 90% menos água e produzem alimentos o ano todo, independente do clima."
    },
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Superalimentos",
      description: "Ingredientes ricos em nutrientes que fortalecem a saúde e combatem a má-nutrição global."
    }
  ]

  const benefits = [
    "Produção sustentável",
    "Economia de água",
    "Cultivo o ano todo",
    "Livre de pesticidas",
    "Alta densidade nutricional",
    "Redução do desperdício"
  ]

  const sdgStats = [
    {
      number: "828M",
      label: "Pessoas passam fome",
      description: "no mundo atualmente"
    },
    {
      number: "3B",
      label: "Pessoas não têm acesso",
      description: "a dietas saudáveis"
    },
    {
      number: "149M",
      label: "Crianças menores de 5 anos",
      description: "sofrem de desnutrição"
    },
    {
      number: "2030",
      label: "Meta da ONU",
      description: "para acabar com a fome"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Conteúdo Principal */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                <Globe className="w-4 h-4 mr-2" />
                Nossa Missão Global
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Transformando a Agricultura para um Mundo Sem Fome
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Vivemos em um mundo onde a tecnologia pode resolver os maiores desafios da humanidade. 
                A agricultura do futuro não é apenas sobre produzir mais alimentos - é sobre produzir 
                alimentos melhores, de forma mais inteligente e sustentável.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Através de hortas hidropônicas e superalimentos, estamos criando sistemas que usam 
                recursos de forma eficiente, produzem o ano todo e fornecem nutrição de alta qualidade 
                para combater a fome e a má-nutrição global.
              </p>
            </div>

            {/* Lista de Benefícios */}
            <div className="grid grid-cols-2 gap-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cards de Características */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Seção de Estatísticas ODS 2 */}
        <div className="mt-20 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              O Desafio Global da Fome
            </h3>
            <p className="text-green-100 text-lg max-w-3xl mx-auto">
              Os números mostram a urgência de transformar nossos sistemas alimentares. 
              A tecnologia hidropônica e os superalimentos são parte da solução.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {sdgStats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-yellow-300">
                  {stat.number}
                </div>
                <div className="text-green-100 font-medium">
                  {stat.label}
                </div>
                <div className="text-green-200 text-sm">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-green-50 rounded-2xl p-8 md:p-12">
            <Leaf className="h-16 w-16 text-green-600 mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Juntos Podemos Acabar com a Fome
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Cada horta hidropônica instalada, cada superalimento cultivado, 
              cada pessoa nutrida nos aproxima da meta de Fome Zero até 2030.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

