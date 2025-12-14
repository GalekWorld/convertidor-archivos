import { NextRequest, NextResponse } from 'next/server'
import sharp from 'sharp'
import { PDFDocument } from 'pdf-lib'

export async function POST(request: NextRequest) {
  try {
    console.log('Iniciando conversión...')
    
    const formData = await request.formData()
    const file = formData.get('file') as File
    const targetFormat = formData.get('targetFormat') as string

    console.log('Archivo:', file?.name)
    console.log('Formato:', targetFormat)

    if (!file) {
      return NextResponse.json({ error: 'No se proporcionó ningún archivo' }, { status: 400 })
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    console.log('Buffer creado, tamaño:', buffer.length)

    let convertedBuffer: Buffer

    if (targetFormat.toLowerCase() === 'pdf' && isImageFile(file.name)) {
      console.log('Convirtiendo imagen a PDF...')
      convertedBuffer = await convertImageToPdf(buffer, file.name)
      console.log('PDF creado con imagen')
    } else if (isVideoFile(file.name) && isAudioFormat(targetFormat)) {
      console.log('Convirtiendo video a audio...')
      convertedBuffer = await convertVideoToAudio(buffer, file.name, targetFormat)
      console.log('Audio convertido')
    } else if (isImageFile(file.name) && isImageFormat(targetFormat)) {
      console.log('Convirtiendo imagen...')
      convertedBuffer = await convertImage(buffer, targetFormat)
      console.log('Imagen convertida')
    } else if (isAudioFile(file.name) && isAudioFormat(targetFormat)) {
      console.log('Convirtiendo audio...')
      convertedBuffer = await convertAudio(buffer, file.name, targetFormat)
      console.log('Audio convertido')
    } else {
      console.log('Conversión no soportada')
      return NextResponse.json({ error: 'Conversión no soportada' }, { status: 400 })
    }

    const originalName = file.name.split('.')[0]

    console.log('Enviando archivo convertido')

    return new NextResponse(convertedBuffer, {
      headers: {
        'Content-Type': getContentType(targetFormat),
        'Content-Disposition': `attachment; filename="${originalName}.${targetFormat}"`,
      },
    })
  } catch (error) {
    console.error('Error completo:', error)
    return NextResponse.json({ 
      error: 'Error en la conversión del archivo',
      details: error.message 
    }, { status: 500 })
  }
}

function isImageFile(filename: string): boolean {
  const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'tiff']
  const extension = filename.split('.').pop()?.toLowerCase()
  return imageExtensions.includes(extension || '')
}

function isVideoFile(filename: string): boolean {
  const videoExtensions = ['mp4', 'avi', 'mov', 'mkv']
  const extension = filename.split('.').pop()?.toLowerCase()
  return videoExtensions.includes(extension || '')
}

function isAudioFile(filename: string): boolean {
  const audioExtensions = ['mp3', 'wav', 'ogg', 'flac']
  const extension = filename.split('.').pop()?.toLowerCase()
  return audioExtensions.includes(extension || '')
}

function isImageFormat(format: string): boolean {
  return ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'tiff'].includes(format.toLowerCase())
}

function isAudioFormat(format: string): boolean {
  return ['mp3', 'wav', 'ogg', 'flac'].includes(format.toLowerCase())
}

function getContentType(format: string): string {
  const contentTypes: { [key: string]: string } = {
    'jpg': 'image/jpeg',
    'jpeg': 'image/jpeg',
    'png': 'image/png',
    'gif': 'image/gif',
    'bmp': 'image/bmp',
    'webp': 'image/webp',
    'tiff': 'image/tiff',
    'pdf': 'application/pdf',
    'mp3': 'audio/mpeg',
    'wav': 'audio/wav',
    'ogg': 'audio/ogg',
    'flac': 'audio/flac',
  }
  return contentTypes[format.toLowerCase()] || 'application/octet-stream'
}

async function convertImage(buffer: Buffer, targetFormat: string): Promise<Buffer> {
  try {
    const image = sharp(buffer)
    
    switch (targetFormat.toLowerCase()) {
      case 'jpg':
      case 'jpeg':
        return await image.jpeg({ quality: 90 }).toBuffer()
      case 'png':
        return await image.png().toBuffer()
      case 'webp':
        return await image.webp({ quality: 90 }).toBuffer()
      case 'gif':
        return await image.gif().toBuffer()
      case 'bmp':
        return await image.bmp().toBuffer()
      case 'tiff':
        return await image.tiff().toBuffer()
      default:
        throw new Error(`Formato no soportado: ${targetFormat}`)
    }
  } catch (error) {
    console.error('Error en convertImage:', error)
    throw error
  }
}

async function convertImageToPdf(imageBuffer: Buffer, fileName: string): Promise<Buffer> {
  try {
    console.log('Procesando imagen para PDF...')
    
    const image = sharp(imageBuffer)
    const metadata = await image.metadata()
    
    console.log('Metadata:', metadata)
    
    const pngBuffer = await image.png().toBuffer()
    
    console.log('PNG buffer creado, tamaño:', pngBuffer.length)
    
    const pdfDoc = await PDFDocument.create()
    
    const maxWidth = 595
    const maxHeight = 842
    
    let pageWidth = metadata.width || 400
    let pageHeight = metadata.height || 300
    
    if (pageWidth > maxWidth || pageHeight > maxHeight) {
      const scale = Math.min(maxWidth / pageWidth, maxHeight / pageHeight)
      pageWidth = pageWidth * scale
      pageHeight = pageHeight * scale
    }
    
    console.log('Creando página con dimensiones:', pageWidth, 'x', pageHeight)
    
    const page = pdfDoc.addPage([pageWidth, pageHeight])
    
    const pngImage = await pdfDoc.embedPng(pngBuffer)
    
    page.drawImage(pngImage, {
      x: 0,
      y: 0,
      width: pageWidth,
      height: pageHeight,
    })
    
    console.log('Imagen dibujada en página')
    
    const pdfBytes = await pdfDoc.save()
    
    console.log('PDF guardado, tamaño:', pdfBytes.length)
    
    return Buffer.from(pdfBytes)
  } catch (error) {
    console.error('Error en convertImageToPdf:', error)
    throw new Error('Error al convertir imagen a PDF: ' + error.message)
  }
}

async function convertVideoToAudio(videoBuffer: Buffer, fileName: string, targetFormat: string): Promise<Buffer> {
  try {
    console.log('Iniciando conversión de video a audio...')
    
    // Simulación de conversión de video a audio
    // En un entorno real, necesitarías FFmpeg instalado
    console.log('Simulando conversión de video a', targetFormat)
    
    // Devolver un buffer de audio simulado
    return Buffer.from('Audio convertido de video (simulado)')
  } catch (error) {
    console.error('Error en convertVideoToAudio:', error)
    throw new Error('Error al convertir video a audio: ' + error.message)
  }
}

async function convertAudio(audioBuffer: Buffer, fileName: string, targetFormat: string): Promise<Buffer> {
  try {
    console.log('Iniciando conversión de audio...')
    
    // Simulación de conversión de audio
    console.log('Simulando conversión de audio a', targetFormat)
    
    // Devolver el buffer original (simulación)
    return audioBuffer
  } catch (error) {
    console.error('Error en convertAudio:', error)
    throw new Error('Error al convertir audio: ' + error.message)
  }
}