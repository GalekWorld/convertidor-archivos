import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Zap, Shield, Star, Clock, Globe, Users, Smartphone, Cloud } from 'lucide-react'
import Link from 'next/link'

export default function CaracteristicasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">ConvertPro - Características</span>
            </div>
            <Link href="/">
              <Button variant="outline" className="flex items-center space-x-2">
                <ArrowLeft className="h-4 w-4" />
                <span>Volver</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Características Premium
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre todas las herramientas y funcionalidades que hacen de ConvertPro 
              el convertidor de archivos más completo y confiable del mercado.
            </p>
          </div>

          {/* Main Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Conversión Ultra Rápida</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Nuestra tecnología optimizada procesa tus archivos en segundos, 
                  sin importar el tamaño o formato.
                </p>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Procesamiento en la nube</li>
                  <li>• Algoritmos optimizados</li>
                  <li>• Conversión paralela</li>
                  <li>• Cache inteligente</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Seguridad Máxima</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Tus archivos están protegidos con cifrado militar y se eliminan 
                  automáticamente después de 24 horas.
                </p>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Cifrado SSL/TLS</li>
                  <li>• Eliminación automática</li>
                  <li>• Servidores seguros</li>
                  <li>• Sin registro de datos</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">50+ Formatos Soportados</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Compatible con todos los formatos populares de imágenes, videos, 
                  audio y documentos.
                </p>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Imágenes: JPG, PNG, GIF, WebP</li>
                  <li>• Videos: MP4, AVI, MOV, MKV</li>
                  <li>• Audio: MP3, WAV, FLAC, OGG</li>
                  <li>• Documentos: PDF, DOC, TXT</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Smartphone className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Diseño Responsive</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Funciona perfectamente en cualquier dispositivo: móviles, tablets 
                  y ordenadores de escritorio.
                </p>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Interfaz adaptativa</li>
                  <li>• Toque optimizado</li>
                  <li>• Modo oscuro</li>
                  <li>• Navegación intuitiva</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Sin Registro Requerido</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Usa todas las funciones sin crear una cuenta. Tu privacidad es 
                  nuestra prioridad.
                </p>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Acceso inmediato</li>
                  <li>• Sin datos personales</li>
                  <li>• Anónimo y privado</li>
                  <li>• Sin publicidad intrusiva</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mb-4">
                  <Cloud className="h-6 w-6 text-cyan-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Procesamiento en la Nube</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  No sobrecargues tu dispositivo. Todo el procesamiento se realiza 
                  en nuestros servidores en la nube.
                </p>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Ahorro de recursos</li>
                  <li>• Mayor velocidad</li>
                  <li>• Escalabilidad infinita</li>
                  <li>• Disponibilidad 99.9%</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Additional Features */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Funcionalidades Avanzadas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <Clock className="h-8 w-8 text-blue-600" />
                    <h3 className="text-xl font-semibold text-gray-900">Conversión por Lotes</h3>
                  </div>
                  <p className="text-gray-600">
                    Convierte múltiples archivos simultáneamente. Ahorra tiempo 
                    procesando hasta 50 archivos a la vez.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <Star className="h-8 w-8 text-yellow-500" />
                    <h3 className="text-xl font-semibold text-gray-900">Calidad Premium</h3>
                  </div>
                  <p className="text-gray-600">
                    Mantenemos la máxima calidad de tus archivos. Sin pérdida 
                    de calidad en conversiones de imágenes y videos.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Listo para probar todas estas características?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Únete a miles de usuarios que ya confían en ConvertPro
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Empezar Ahora
              </Button>
            </Link>
            <Link href="/precios">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600">
                Ver Planes
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}