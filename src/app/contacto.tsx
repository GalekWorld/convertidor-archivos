import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
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
                <Zap className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">ConvertPro</span>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">Inicio</Link>
              <Link href="/caracteristicas" className="text-gray-600 hover:text-gray-900 transition-colors">Características</Link>
              <Link href="/precios" className="text-gray-600 hover:text-gray-900 transition-colors">Precios</Link>
              <Link href="/soporte" className="text-gray-600 hover:text-gray-900 transition-colors">Soporte</Link>
              <Link href="/contacto" className="text-gray-600 hover:text-gray-900 transition-colors">Contacto</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contacto</h1>
            <p className="text-xl text-gray-600">Estamos aquí para ayudarte</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Envíanos un mensaje</CardTitle>
                <CardDescription>
                  Nos pondremos en contacto contigo lo antes posible
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nombre</label>
                  <Input placeholder="Tu nombre" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="tu@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Mensaje</label>
                  <Textarea placeholder="Tu mensaje..." rows={4} />
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Enviar mensaje
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>soporte@convertpro.com</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Horario de atención
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Lunes a Viernes: 9:00 - 18:00</p>
                  <p>Sábado: 10:00 - 14:00</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Ubicación
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Atención online 24/7</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
