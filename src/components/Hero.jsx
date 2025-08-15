import { Button } from '@/components/ui/button.jsx'
import { ArrowRight, Play, Leaf, Droplets, Heart } from 'lucide-react'

const Hero = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-green-50 to-emerald-100 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo Principal */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Leaf className="w-4 h-4 mr-2" />
                ODS 2 - Fome Zero e Agricultura Sustentável
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Agricultura do
                <span className="text-green-600"> Futuro</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Nossa missão é ajudar a cumprir a ODS 2 da ONU: acabar com a fome, 
                garantir acesso a alimentos saudáveis e promover a agricultura sustentável. 
                Descubra como unir inovação, sustentabilidade e nutrição de qualidade 
                para criar um mundo onde todos tenham acesso a comida boa o ano todo.
              </p>
            </div>

            {/* Botões de Ação */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                Explorar Soluções
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3"
              >
                <Play className="mr-2 h-5 w-5" />
                Ver Como Funciona
              </Button>
            </div>

            {/* Destaques */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Droplets className="h-6 w-6 text-blue-600 mr-2" />
                  <div className="text-2xl font-bold text-green-600">90%</div>
                </div>
                <div className="text-sm text-gray-600">Menos Água</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Leaf className="h-6 w-6 text-green-600 mr-2" />
                  <div className="text-2xl font-bold text-green-600">365</div>
                </div>
                <div className="text-sm text-gray-600">Dias/Ano</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Heart className="h-6 w-6 text-red-500 mr-2" />
                  <div className="text-2xl font-bold text-green-600">100%</div>
                </div>
                <div className="text-sm text-gray-600">Nutritivo</div>
              </div>
            </div>
          </div>

          {/* Área para Imagem/Vídeo */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="bg-gradient-to-br from-green-100 to-emerald-200 rounded-xl h-80 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <div className="text-6xl mb-4">🌱</div>
                  <p className="text-lg font-medium">Horta Hidropônica</p>
                  <p className="text-sm mt-2">Tecnologia que produz mais com menos</p>
                </div>
              </div>
            </div>
            
            {/* Elementos Decorativos */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-400 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-400 rounded-full opacity-20"></div>
            <div className="absolute top-1/2 -left-8 w-12 h-12 bg-yellow-400 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

