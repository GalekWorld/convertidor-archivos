import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowLeft, Mail, Phone, MessageSquare, MapPin, Send, Clock } from 'lucide-react'
import Link from 'next/link'

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <MessageSquare className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">ConvertPro - Contacto</span>
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
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Contacto</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ¿Tienes preguntas, sugerencias o necesitas ayuda? Estamos aquí para escucharte. 
              Tu feedback es importante para mejorar ConvertPro.
            </p>
          </div>

          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full">
              <Clock className="h-5 w-5" />
              <span className="font-medium">Tiempo de respuesta: menos de 24 horas</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="shadow-2xl border-0 bg-white">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">Envíanos un mensaje</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Nombre completo</label>
                    <Input placeholder="Tu nombre" className="h-12" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Correo electrónico</label>
                    <Input type="email" placeholder="tu@email.com" className="h-12" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Asunto</label>
                  <Input placeholder="¿Cuál es tu consulta?" className="h-12" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Tipo de consulta</label>
                  <select className="w-full h-12 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">Selecciona una opción</option>
                    <option value="soporte">Soporte técnico</option>
                    <option value="sugerencia">Sugerencia</option>
                    <option value="bug">Reportar un error</option>
                    <option value="empresa">Consulta empresarial</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Mensaje</label>
                  <textarea 
                    placeholder="Describe tu pregunta o problema en detalle..." 
                    className="w-full h-32 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="newsletter" className="rounded" />
                  <label htmlFor="newsletter" className="text-sm text-gray-600">
                    Quiero recibir noticias y actualizaciones de ConvertPro
                  </label>
                </div>
                
                <Button className="w-full h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <Send className="mr-3 h-5 w-5" />
                  Enviar mensaje
                </Button>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="shadow-lg border-0 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Correo electrónico</h3>
                      <p className="text-gray-600">support@convertpro.com</p>
                      <p className="text-sm text-gray-500">Respuesta en menos de 24h</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Teléfono</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                      <p className="text-sm text-gray-500">Lun-Vie 9am-6pm (GMT-5)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <MessageSquare className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Chat en vivo</h3>
                      <p className="text-gray-600">Disponible 24/7</p>
                      <p className="text-sm text-gray-500">Respuesta inmediata</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Oficina principal</h3>
                      <p className="text-gray-600">123 Tech Street</p>
                      <p className="text-gray-600">Silicon Valley, CA 94025</p>
                      <p className="text-sm text-gray-500">Estados Unidos</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Office Hours */}
          <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Horarios de Atención</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="font-semibold text-gray-900 mb-2">Soporte por Email</h3>
                <p className="text-gray-600">24/7</p>
                <p className="text-sm text-gray-500">Respuesta en menos de 24h</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-gray-900 mb-2">Chat en Vivo</h3>
                <p className="text-gray-600">24/7</p>
                <p className="text-sm text-gray-500">Respuesta inmediata</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-gray-900 mb-2">Teléfono</h3>
                <p className="text-gray-600">Lun-Vie</p>
                <p className="text-sm text-gray-500">9am - 6pm (GMT-5)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}