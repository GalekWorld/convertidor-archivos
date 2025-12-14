export default function TutorialesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Tutoriales de Conversión</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Cómo convertir JPG a PDF</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Paso a paso para convertir tus imágenes a PDF...</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Extraer audio de MP4</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Aprende a convertir videos a archivos de audio...</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
