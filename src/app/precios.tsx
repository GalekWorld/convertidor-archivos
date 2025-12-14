import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check, Star, Zap } from 'lucide-react'
import Link from 'next/link'

export default function PreciosPage() {
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Precios</h1>
            <p className="text-xl text-gray-600">Elige el plan perfecto para ti</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="text-center">
                <CardTitle>Gratis</CardTitle>
                <CardDescription>Perfecto para uso ocasional</CardDescription>
                <div className="text-3xl font-bold">$0<span className="text-lg text-gray-500">/mes</span></div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>10 conversiones al día</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Archivos hasta 10MB</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Formatos básicos</span>
                </div>
                <Button variant="outline" className="w-full">Comenzar gratis</Button>
              </CardContent>
            </Card>

            <Card className="border-blue-500 shadow-lg">
              <CardHeader className="text-center bg-gradient-to-r from-blue-50 to-purple-50">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <span className="text-sm font-semibold text-blue-600">POPULAR</span>
                </div>
                <CardTitle>Pro</CardTitle>
                <CardDescription>Ideal para profesionales</CardDescription>
                <div className="text-3xl font-bold">$9.99<span className="text-lg text-gray-500">/mes</span></div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Conversiones ilimitadas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Archivos hasta 100MB</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Todos los formatos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Procesamiento prioritario</span>
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Actualizar a Pro
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <CardTitle>Enterprise</CardTitle>
                <CardDescription>Para equipos y empresas</CardDescription>
                <div className="text-3xl font-bold">$29.99<span className="text-lg text-gray-500">/mes</span></div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Todo lo de Pro</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Archivos hasta 500MB</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>API access</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Soporte dedicado</span>
                </div>
                <Button variant="outline" className="w-full">Contactar ventas</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
