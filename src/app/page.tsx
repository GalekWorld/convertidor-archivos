'use client'

import { useState, useCallback, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Upload, FileText, Download, Loader2, Image, FileVideo, FileAudio, File, Check, Zap, Shield, Star, X, RefreshCw } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import Link from 'next/link'
import Advertisement from '@/components/advertisement'

export default function ConvertidorPage() {
  const [file, setFile] = useState<File | null>(null)
  const [targetFormat, setTargetFormat] = useState<string>('')
  const [converting, setConverting] = useState(false)
  const [downloadUrl, setDownloadUrl] = useState<string>('')
  const [isDragging, setIsDragging] = useState(false)
  const [progress, setProgress] = useState(0)
  const { toast } = useToast()

  const handleFileSelect = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
      setDownloadUrl('')
      setProgress(0)
      
      const fileExtension = selectedFile.name.split('.').pop()?.toLowerCase()
      if (fileExtension) {
        if (['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'tiff'].includes(fileExtension)) {
          setTargetFormat('png')
        } else if (fileExtension === 'pdf') {
          setTargetFormat('jpg')
        } else if (['mp4', 'avi', 'mov', 'mkv'].includes(fileExtension)) {
          setTargetFormat('mp3')
        } else if (['mp3', 'wav', 'ogg', 'flac'].includes(fileExtension)) {
          setTargetFormat('wav')
        }
      }
    }
  }, [])

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    
    const droppedFile = e.dataTransfer.files[0]
    if (droppedFile) {
      setFile(droppedFile)
      setDownloadUrl('')
      setProgress(0)
      
      const fileExtension = droppedFile.name.split('.').pop()?.toLowerCase()
      if (fileExtension) {
        if (['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'tiff'].includes(fileExtension)) {
          setTargetFormat('png')
        } else if (fileExtension === 'pdf') {
          setTargetFormat('jpg')
        } else if (['mp4', 'avi', 'mov', 'mkv'].includes(fileExtension)) {
          setTargetFormat('mp3')
        } else if (['mp3', 'wav', 'ogg', 'flac'].includes(fileExtension)) {
          setTargetFormat('wav')
        }
      }
    }
  }, [])

  const handleRemoveFile = useCallback(() => {
    setFile(null)
    setTargetFormat('')
    setDownloadUrl('')
    setProgress(0)
    setConverting(false)
  }, [])

  const handleConvert = async () => {
    if (!file || !targetFormat) {
      toast({
        title: "Error",
        description: "Por favor selecciona un archivo y un formato de destino",
        variant: "destructive",
      })
      return
    }

    setConverting(true)
    setProgress(0)
    
    try {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('targetFormat', targetFormat)

      // Simular progreso
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 90) {
            clearInterval(progressInterval)
            return 90
          }
          return prev + 10
        })
      }, 200)

      const response = await fetch('/api/convert', {
        method: 'POST',
        body: formData,
      })

      clearInterval(progressInterval)
      setProgress(100)

      if (!response.ok) {
        const errorText = await response.text()
        console.error('Error response:', errorText)
        
        // Intentar parsear como JSON
        let errorData
        try {
          errorData = JSON.parse(errorText)
        } catch {
          errorData = { error: 'Error en la conversión del archivo' }
        }
        
        throw new Error(errorData.error || 'Error en la conversión')
      }

      const blob = await response.blob()
      const url = URL.createObjectURL(blob)
      setDownloadUrl(url)
      
      toast({
        title: "¡Conversión exitosa!",
        description: "Tu archivo ha sido convertido correctamente",
      })
    } catch (error) {
      console.error('Error en handleConvert:', error)
      toast({
        title: "Error",
        description: error.message || "No se pudo convertir el archivo. Intenta de nuevo.",
        variant: "destructive",
      })
    } finally {
      setConverting(false)
    }
  }

  const handleDownload = () => {
    if (downloadUrl && file) {
      const a = document.createElement('a')
      a.href = downloadUrl
      a.download = `${file.name.split('.')[0]}.${targetFormat}`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    }
  }

  const getAvailableFormats = () => {
    if (!file) return []
    
    const fileExtension = file.name.split('.').pop()?.toLowerCase()
    
    if (['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'tiff'].includes(fileExtension || '')) {
      return ['png', 'jpg', 'jpeg', 'gif', 'bmp', 'webp', 'pdf']
    } else if (fileExtension === 'pdf') {
      return ['jpg', 'png', 'webp']
    } else if (['mp4', 'avi', 'mov', 'mkv'].includes(fileExtension || '')) {
      return ['mp3', 'wav', 'ogg', 'flac']
    } else if (['mp3', 'wav', 'ogg', 'flac'].includes(fileExtension || '')) {
      return ['mp3', 'wav', 'ogg', 'flac']
    }
    
    return []
  }

  const getFileIcon = (fileName: string) => {
    const extension = fileName.split('.').pop()?.toLowerCase()
    if (['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'tiff'].includes(extension || '')) {
      return <Image className="h-6 w-6 text-blue-500" />
    } else if (['mp4', 'avi', 'mov', 'mkv'].includes(extension || '')) {
      return <FileVideo className="h-6 w-6 text-green-500" />
    } else if (['mp3', 'wav', 'ogg', 'flac'].includes(extension || '')) {
      return <FileAudio className="h-6 w-6 text-orange-500" />
    } else {
      return <File className="h-6 w-6 text-gray-500" />
    }
  }

  const getFileTypeColor = (fileName: string) => {
    const extension = fileName.split('.').pop()?.toLowerCase()
    if (['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'tiff'].includes(extension || '')) {
      return 'border-blue-200 bg-blue-50'
    } else if (['mp4', 'avi', 'mov', 'mkv'].includes(extension || '')) {
      return 'border-green-200 bg-green-50'
    } else if (['mp3', 'wav', 'ogg', 'flac'].includes(extension || '')) {
      return 'border-orange-200 bg-orange-50'
    } else {
      return 'border-gray-200 bg-gray-50'
    }
  }

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
  <Link href="/caracteristicas" className="text-gray-600 hover:text-gray-900 transition-colors">Características</Link>
  <Link href="/precios" className="text-gray-600 hover:text-gray-900 transition-colors">Precios</Link>
  <Link href="/soporte" className="text-gray-600 hover:text-gray-900 transition-colors">Soporte</Link>
  <Link href="/contacto" className="text-gray-600 hover:text-gray-900 transition-colors">Contacto</Link>
  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
    Actualizar a Pro
  </Button>
</nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Convierte Archivos al Instante
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Más de 10 años transformando archivos para ti. Rápido, seguro y sin límites.
            </p>
            <div className="flex items-center justify-center space-x-8 mt-8">
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <span className="text-gray-700">4.9/5 calificación</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">100% seguro</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-blue-500" />
                <span className="text-gray-700">Conversiones rápidas</span>
              </div>
            </div>
          </div>

          {/* Main Converter */}
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-2xl border-0 bg-white">
              <CardContent className="p-8">
                {/* Upload Area */}
                <div 
                  className={`border-2 border-dashed rounded-xl p-12 text-center transition-all duration-300 ${
                    isDragging 
                      ? 'border-blue-500 bg-blue-50' 
                      : file 
                        ? getFileTypeColor(file.name)
                        : 'border-gray-300 hover:border-gray-400'
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  {!file ? (
                    <>
                      <div className="mb-6">
                        <Upload className="mx-auto h-16 w-16 text-gray-400" />
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-2xl font-semibold text-gray-700">
                          Arrastra tu archivo aquí
                        </h3>
                        <p className="text-gray-500">o haz clic para seleccionar</p>
                        <div className="flex flex-wrap justify-center gap-3 mt-6">
                          {['JPG', 'PNG', 'PDF', 'MP4', 'MP3'].map((format) => (
                            <span key={format} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
                              {format}
                            </span>
                          ))}
                        </div>
                      </div>
                      <Input
                        type="file"
                        onChange={handleFileSelect}
                        className="mt-8 cursor-pointer max-w-md mx-auto"
                        accept=".jpg,.jpeg,.png,.gif,.bmp,.webp,.tiff,.pdf,.mp4,.avi,.mov,.mkv,.mp3,.wav,.ogg,.flac"
                      />
                    </>
                  ) : (
                    <div className="space-y-6">
                      <div className={`flex items-center space-x-4 p-6 rounded-xl border-2 ${getFileTypeColor(file.name)}`}>
                        {getFileIcon(file.name)}
                        <div className="flex-1">
                          <p className="font-semibold text-gray-800 text-lg">{file.name}</p>
                          <p className="text-sm text-gray-500">
                            {(file.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                        <div className="px-4 py-2 bg-white rounded-lg shadow-sm">
                          <span className="text-sm font-semibold text-gray-700">
                            {file.name.split('.').pop()?.toUpperCase()}
                          </span>
                        </div>
                        <Button
                          onClick={handleRemoveFile}
                          variant="outline"
                          size="sm"
                          className="border-red-300 text-red-600 hover:bg-red-50"
                          disabled={converting}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>

                      {/* Progress Bar */}
                      {converting && (
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm text-gray-600">
                            <span>Convirtiendo archivo...</span>
                            <span>{progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${progress}%` }}
                            />
                          </div>
                        </div>
                      )}

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <label className="text-lg font-semibold text-gray-700">Formato de origen:</label>
                          <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                            {getFileIcon(file.name)}
                            <span className="font-medium text-gray-700">
                              {file.name.split('.').pop()?.toUpperCase()}
                            </span>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <label className="text-lg font-semibold text-gray-700">Formato de destino:</label>
                          <Select value={targetFormat} onValueChange={(value) => {
                            console.log('Seleccionando formato:', value)
                            setTargetFormat(value)
                          }}>
                            <SelectTrigger className="h-12 border-2 border-gray-200 hover:border-blue-400 transition-colors">
                              <SelectValue placeholder="Selecciona formato" />
                            </SelectTrigger>
                            <SelectContent>
                              {getAvailableFormats().map((format) => (
                                <SelectItem key={format} value={format} className="cursor-pointer hover:bg-blue-50">
                                  <div className="flex items-center space-x-2">
                                    <span className="font-semibold">{format.toUpperCase()}</span>
                                  </div>
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="flex space-x-4">
                        <Button
                          onClick={handleConvert}
                          disabled={converting || !targetFormat}
                          className="flex-1 h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          {converting ? (
                            <>
                              <Loader2 className="mr-3 h-5 w-5 animate-spin" />
                              Convirtiendo...
                            </>
                          ) : (
                            <>
                              <Zap className="mr-3 h-5 w-5" />
                              Convertir Archivo
                            </>
                          )}
                        </Button>

                        {downloadUrl && (
                          <Button
                            onClick={handleDownload}
                            variant="outline"
                            className="h-14 px-8 border-2 border-green-500 text-green-600 hover:bg-green-50 font-semibold text-lg"
                          >
                            <Download className="mr-3 h-5 w-5" />
                            Descargar
                          </Button>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* ANUNCIO AÑADIDO JUSTO AQUÍ - DEBAJO DEL BOTÓN DE CONVERTIR */}
            <Advertisement />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Por qué elegir ConvertPro?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-6 border-0 shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Ultra Rápido</h3>
              <p className="text-gray-600">Conversiones en segundos con nuestra tecnología optimizada</p>
            </Card>
            <Card className="text-center p-6 border-0 shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">100% Seguro</h3>
              <p className="text-gray-600">Tus archivos se eliminan automáticamente después de 24 horas</p>
            </Card>
            <Card className="text-center p-6 border-0 shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Calidad Premium</h3>
              <p className="text-gray-600">Mantenemos la máxima calidad en todas las conversiones</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl font-bold">ConvertPro</span>
            </div>
            <p className="text-gray-400 mb-6">La herramienta de conversión de archivos más confiable</p>
            <div className="flex items-center justify-center space-x-6">
              <Link href="/privacidad" className="text-gray-400 hover:text-white transition-colors">Privacidad</Link>
              <Link href="/terminos" className="text-gray-400 hover:text-white transition-colors">Términos</Link>
              <Link href="/contacto" className="text-gray-400 hover:text-white transition-colors">Contacto</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
