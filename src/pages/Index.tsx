
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MapView from "@/components/map/MapView";
import ProductFilters from "@/components/filters/ProductFilters";
import ProductCard from "@/components/products/ProductCard";
import SwapMatch from "@/components/match/SwapMatch";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Map, User, Filter } from "lucide-react";

// Demo data - En una aplicación real, esto vendría de una API
const mockProducts = [
  {
    id: "1",
    title: "Bicicleta de montaña en excelente estado",
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e",
    category: "Deportes",
    location: "Palermo, Buenos Aires",
    distance: "1.2 km",
    userRating: 4.7,
    userName: "Carlos M.",
    userAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
    isEco: true,
  },
  {
    id: "2",
    title: "Colección de libros de ciencia ficción",
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
    category: "Libros",
    location: "Recoleta, Buenos Aires",
    distance: "3.5 km",
    userRating: 4.9,
    userName: "Ana S.",
    userAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: "3",
    title: "Cámara DSLR Nikon D3500",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd",
    category: "Tecnología",
    location: "Belgrano, Buenos Aires",
    distance: "5.2 km",
    userRating: 4.3,
    userName: "Martín L.",
    userAvatar: "https://randomuser.me/api/portraits/men/67.jpg",
  },
  {
    id: "4",
    title: "Clases de guitarra (2 meses)",
    image: "https://images.unsplash.com/photo-1525201548942-d8732f6617a0",
    category: "Servicios",
    location: "San Telmo, Buenos Aires",
    distance: "2.8 km",
    userRating: 4.8,
    userName: "Laura G.",
    userAvatar: "https://randomuser.me/api/portraits/women/90.jpg",
    isEco: true,
  },
  {
    id: "5",
    title: "Plantas de interior variadas",
    image: "https://images.unsplash.com/photo-1545241047-6083a3684587",
    category: "Jardinería",
    location: "Núñez, Buenos Aires",
    distance: "6.1 km",
    userRating: 5.0,
    userName: "Javier P.",
    userAvatar: "https://randomuser.me/api/portraits/men/22.jpg",
    isEco: true,
  },
  {
    id: "6",
    title: "Set de vajilla artesanal",
    image: "https://images.unsplash.com/photo-1594763391776-8e06694e1540",
    category: "Hogar",
    location: "Caballito, Buenos Aires",
    distance: "4.3 km",
    userRating: 4.6,
    userName: "Marcela T.",
    userAvatar: "https://randomuser.me/api/portraits/women/28.jpg",
    isEco: true,
  },
];

const Index = () => {
  const [viewMode, setViewMode] = useState<"map" | "grid" | "match">("grid");

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-eco-green to-eco-green-dark text-white py-16">
          <div className="container grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
                Intercambia objetos.<br />
                <span className="text-eco-terracota-light">Construye comunidad.</span>
              </h1>
              <p className="text-lg mb-8 opacity-90">
                Una plataforma de trueque local donde puedes intercambiar objetos, 
                habilidades o alimentos sin dinero. Todo basado en proximidad, 
                reputación y prácticas sustentables.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-eco-green-dark hover:bg-gray-100">
                  Explorar trueques
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  ¿Cómo funciona?
                </Button>
              </div>
            </div>
            <div className="hidden md:block relative">
              <img 
                src="https://images.unsplash.com/photo-1617886322168-72b886573c5d" 
                alt="Personas intercambiando objetos"
                className="rounded-lg shadow-lg" 
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center gap-3">
                  <div className="bg-eco-green-light p-2 rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 14L12 18L4 14M20 10L12 14L4 10M12 2L20 6L12 10L4 6L12 2Z" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium">+5,000</p>
                    <p className="text-gray-500 text-sm">Trueques exitosos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gray-50 rounded-t-[50px]"></div>
        </section>

        {/* Main Content */}
        <section className="container py-12">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold font-heading">Explora Trueques</h2>
              
              {/* Toggle View */}
              <div className="bg-white p-1 rounded-lg shadow-sm border flex">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className={viewMode === "grid" ? "bg-eco-green text-white" : ""}
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Lista
                </Button>
                <Button
                  variant={viewMode === "map" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("map")}
                  className={viewMode === "map" ? "bg-eco-green text-white" : ""}
                >
                  <Map className="w-4 h-4 mr-2" />
                  Mapa
                </Button>
                <Button
                  variant={viewMode === "match" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("match")}
                  className={viewMode === "match" ? "bg-eco-green text-white" : ""}
                >
                  <User className="w-4 h-4 mr-2" />
                  Match
                </Button>
              </div>
            </div>
            
            <ProductFilters />
          </div>

          {viewMode === "grid" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          )}

          {viewMode === "map" && (
            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <div className="h-[600px]">
                <MapView />
              </div>
            </div>
          )}

          {viewMode === "match" && (
            <div className="flex justify-center py-6">
              <SwapMatch />
            </div>
          )}
        </section>

        {/* Features Section */}
        <section className="bg-white py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-heading mb-4">¿Cómo funciona EcoSwap?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Conectamos personas para intercambiar objetos y servicios de forma sostenible, 
                sin dinero de por medio, y creando comunidad local.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 mx-auto bg-eco-green rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold font-heading mb-2">1. Publica lo que ofreces</h3>
                <p className="text-gray-600">
                  Sube fotos y detalles de lo que quieres intercambiar o el servicio que ofreces.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 mx-auto bg-eco-terracota rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold font-heading mb-2">2. Encuentra lo que buscas</h3>
                <p className="text-gray-600">
                  Busca entre los trueques cercanos o usa el sistema de match para descubrir opciones.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 mx-auto bg-eco-blue rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold font-heading mb-2">3. Conecta y haz el trueque</h3>
                <p className="text-gray-600">
                  Chatea con la otra persona, acuerda un punto de encuentro y realiza el intercambio.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold font-heading text-center mb-12">
              Historias de Trueque
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src="https://randomuser.me/api/portraits/women/33.jpg" 
                    alt="Laura P."
                    className="w-12 h-12 rounded-full object-cover" 
                  />
                  <div>
                    <h4 className="font-medium">Laura P.</h4>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-4 h-4 text-eco-terracota" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "Intercambié mis libros de arquitectura por clases de yoga. ¡Una experiencia increíble! Además de deshacerme de cosas que ya no usaba, conocí personas maravillosas de mi barrio."
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>Caballito, Buenos Aires</span>
                  <span className="mx-2">•</span>
                  <span>Hace 2 semanas</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src="https://randomuser.me/api/portraits/men/54.jpg" 
                    alt="Federico M."
                    className="w-12 h-12 rounded-full object-cover" 
                  />
                  <div>
                    <h4 className="font-medium">Federico M.</h4>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-4 h-4 text-eco-terracota" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "Como estudiante con presupuesto limitado, EcoSwap fue una solución genial. Conseguí una guitarra a cambio de clases de matemáticas. ¡Economía circular en su máxima expresión!"
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>Palermo, Buenos Aires</span>
                  <span className="mx-2">•</span>
                  <span>Hace 1 mes</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src="https://randomuser.me/api/portraits/women/68.jpg" 
                    alt="Carla S."
                    className="w-12 h-12 rounded-full object-cover" 
                  />
                  <div>
                    <h4 className="font-medium">Carla S.</h4>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className={`w-4 h-4 ${star <= 4 ? 'text-eco-terracota' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "Participé en una jornada de trueque barrial organizada a través de la app. Llevé ropa que ya no usaba y volví con plantas para mi departamento y productos orgánicos."
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>San Telmo, Buenos Aires</span>
                  <span className="mx-2">•</span>
                  <span>Hace 3 meses</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-eco-green text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold font-heading mb-6">
              ¿Listo para comenzar a intercambiar?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Únete a nuestra comunidad de trueque local y comienza a intercambiar objetos, servicios o alimentos de manera sostenible.
            </p>
            <Button size="lg" className="bg-white text-eco-green-dark hover:bg-gray-100">
              Crear cuenta gratis
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
