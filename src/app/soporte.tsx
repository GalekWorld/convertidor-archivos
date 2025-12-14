import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Headphones, MessageCircle, Book, Mail, Clock, Users } from 'lucide-react'
import Link from 'next/link'

export default function SoportePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Headphones className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">ConvertPro - Soporte</span>
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
              Estamos Aquí para Ayudarte
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nuestro equipo de soporte está disponible 24/7 para resolver cualquier duda 
              o problema que tengas con ConvertPro.
            </p>
          </div>

          {/* Support Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Chat en Vivo</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-gray-600">
                  Habla instantáneamente con nuestro equipo de soporte.
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <p>• Respuesta inmediata</p>
                  <p>• Disponible 24/7</p>
                  <p>• Sin esperas</p>
                </div>
                <Button className="w-full mt-4" disabled>
                  Próximamente
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Email</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-gray-600">
                  Envíanos un email y te responderemos en menos de 24 horas.
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <p>• Respuesta detallada</p>
                  <p>• Adjunta archivos</p>
                  <p>• Seguimiento de tickets</p>
                </div>
                <Button className="w-full mt-4" variant="outline">
                  support@convertpro.com
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Book className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Base de Conocimiento</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-gray-600">
                  Encuentra respuestas a las preguntas más comunes.
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <p>• Tutoriales paso a paso</p>
                  <p>• Guías completas</p>
                  <p>• Vídeos explicativos</p>
                </div>
                <Button className="w-full mt-4" disabled>
                  Próximamente
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Support Hours */}
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Horarios de Atención</h2>
              <p className="text-gray-600">Estamos disponibles cuando nos necesites</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-center space-x-4">
                <Clock className="h-8 w-8 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Chat en Vivo</h3>
                  <p className="text-gray-600">24/7 - Siempre disponible</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="h-8 w-8 text-green-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">Respuesta en menos de 24h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Common Issues */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Problemas Comunes y Soluciones
            </h2>
            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Mi archivo no se convierte correctamente
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p><strong>Solución:</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Verifica que el formato sea compatible</li>
                      <li>Asegúrate de que el archivo no esté dañado</li>
                      <li>Intenta con un archivo más pequeño</li>
                      <li>Comprueba tu conexión a internet</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    La conversión es muy lenta
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p><strong>Solución:</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Cierra otras pestañas del navegador</li>
                      <li>Usa un navegador actualizado</li>
                      <li>Verifica tu velocidad de internet</li>
                      <li>Intenta en otro momento (menos tráfico)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    No puedo descargar el archivo convertido
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p><strong>Solución:</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Verifica que tu navegador permita descargas</li>
                      <li>Desactiva el bloqueador de pop-ups</li>
                      <li>Limpia la caché del navegador</li>
                      <li>Intenta con otro navegador</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿No encontraste lo que buscabas?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Nuestro equipo está listo para ayudarte con cualquier pregunta
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Contactar Soporte
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600">
              Ver FAQ Completa
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}