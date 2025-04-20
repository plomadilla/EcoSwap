
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ProductCard from "@/components/products/ProductCard";
import { Medal, Heart, Award, Star, MapPin, MessageSquare, Check } from "lucide-react";

const Perfil = () => {
  const [activeTab, setActiveTab] = useState("mis-trueques");

  // Mock data - En una aplicación real, esto vendría de una API
  const userStats = {
    truequesConcretados: 28,
    valoracionPromedio: 4.8,
    medallas: [
      { id: "eco", name: "Eco Warrior", descripcion: "10+ trueques sustentables", icon: <Award className="h-5 w-5" /> },
      { id: "local", name: "Vecino/a Activo/a", descripcion: "20+ trueques en tu barrio", icon: <MapPin className="h-5 w-5" /> },
      { id: "trusted", name: "Confiable", descripcion: "20+ valoraciones positivas", icon: <Star className="h-5 w-5" /> },
    ],
    reviews: [
      { id: "1", user: "Ana S.", userAvatar: "https://randomuser.me/api/portraits/women/44.jpg", rating: 5, text: "Excelente experiencia. Muy puntual y el producto en perfecto estado.", date: "hace 2 semanas" },
      { id: "2", user: "Federico L.", userAvatar: "https://randomuser.me/api/portraits/men/32.jpg", rating: 5, text: "Todo muy bien, cumplió con lo acordado y la transacción fue muy fluida.", date: "hace 1 mes" },
      { id: "3", user: "Lucía M.", userAvatar: "https://randomuser.me/api/portraits/women/62.jpg", rating: 4, text: "Buena comunicación y el intercambio se realizó sin problemas.", date: "hace 2 meses" },
    ]
  };

  const misTrueques = [
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
      title: "Set de jardinería completo",
      image: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e",
      category: "Jardinería",
      location: "Palermo, Buenos Aires",
      distance: "1.8 km",
      userRating: 4.7,
      userName: "Carlos M.",
      userAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
      isEco: true,
    },
  ];

  const favoritos = [
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
  ];

  const historial = [
    {
      id: "5",
      title: "Intercambio: Libros por plantas",
      image: "https://images.unsplash.com/photo-1460400408855-36abd76648b9",
      date: "15/03/2025",
      withUser: "Laura G.",
      withUserAvatar: "https://randomuser.me/api/portraits/women/90.jpg",
      rating: 5,
    },
    {
      id: "6",
      title: "Intercambio: Ropa por servicios",
      image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f",
      date: "02/02/2025",
      withUser: "Martín L.",
      withUserAvatar: "https://randomuser.me/api/portraits/men/67.jpg",
      rating: 4,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-1 container py-8">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div className="relative">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md">
                <img 
                  src="https://randomuser.me/api/portraits/women/42.jpg" 
                  alt="Perfil de usuario"
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-eco-green text-white p-1 rounded-full">
                <Check className="h-5 w-5" />
              </div>
            </div>
            
            <div className="flex-1">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-heading font-bold">Sofía Rodríguez</h1>
                  <p className="text-gray-500 flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    Palermo, Buenos Aires
                  </p>
                  <div className="flex items-center mt-1">
                    <span className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-4 w-4 ${
                            star <= Math.round(userStats.valoracionPromedio)
                              ? "text-eco-terracota fill-eco-terracota"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </span>
                    <span className="ml-2 text-sm font-medium">
                      {userStats.valoracionPromedio} ({userStats.reviews.length} reseñas)
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Mensaje
                  </Button>
                  <Button className="bg-eco-green hover:bg-eco-green-dark">
                    Editar Perfil
                  </Button>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3 mt-4">
                {userStats.medallas.map(medalla => (
                  <Badge key={medalla.id} variant="outline" className="px-3 py-1 flex items-center gap-1 border-eco-green text-eco-green">
                    {medalla.icon}
                    {medalla.name}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6 pt-6 border-t">
            <div className="text-center">
              <div className="text-2xl font-bold text-eco-green">{userStats.truequesConcretados}</div>
              <div className="text-sm text-gray-500">Trueques exitosos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-eco-terracota">{userStats.medallas.length}</div>
              <div className="text-sm text-gray-500">Medallas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-eco-blue">{misTrueques.length}</div>
              <div className="text-sm text-gray-500">Disponibles</div>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent mb-6">
            <TabsTrigger 
              value="mis-trueques" 
              className={`pb-3 pt-2 px-4 border-b-2 rounded-none data-[state=active]:border-eco-green data-[state=active]:bg-transparent data-[state=active]:text-eco-green-dark data-[state=active]:shadow-none`}
            >
              Mis Trueques
            </TabsTrigger>
            <TabsTrigger 
              value="favoritos" 
              className={`pb-3 pt-2 px-4 border-b-2 rounded-none data-[state=active]:border-eco-green data-[state=active]:bg-transparent data-[state=active]:text-eco-green-dark data-[state=active]:shadow-none`}
            >
              Favoritos
            </TabsTrigger>
            <TabsTrigger 
              value="historial" 
              className={`pb-3 pt-2 px-4 border-b-2 rounded-none data-[state=active]:border-eco-green data-[state=active]:bg-transparent data-[state=active]:text-eco-green-dark data-[state=active]:shadow-none`}
            >
              Historial
            </TabsTrigger>
            <TabsTrigger 
              value="valoraciones" 
              className={`pb-3 pt-2 px-4 border-b-2 rounded-none data-[state=active]:border-eco-green data-[state=active]:bg-transparent data-[state=active]:text-eco-green-dark data-[state=active]:shadow-none`}
            >
              Valoraciones
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="mis-trueques">
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-xl font-bold font-heading">Mis Trueques Disponibles</h2>
              <Button className="bg-eco-green hover:bg-eco-green-dark">
                Publicar Nuevo
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {misTrueques.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="favoritos">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {favoritos.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="historial">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {historial.map((item) => (
                <div key={item.id} className="flex bg-white rounded-lg shadow-sm border overflow-hidden">
                  <div className="w-24 h-24 md:w-32 md:h-32">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div className="flex-1 p-4">
                    <h3 className="font-medium mb-1">{item.title}</h3>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <span>Fecha: {item.date}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <img 
                        src={item.withUserAvatar} 
                        alt={item.withUser}
                        className="w-6 h-6 rounded-full" 
                      />
                      <span className="text-sm">Con: {item.withUser}</span>
                    </div>
                    <div className="flex mt-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-4 w-4 ${
                            star <= item.rating
                              ? "text-eco-terracota fill-eco-terracota"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="valoraciones">
            <div className="space-y-4">
              {userStats.reviews.map((review) => (
                <div key={review.id} className="p-4 bg-white rounded-lg shadow-sm border">
                  <div className="flex items-start gap-4">
                    <img 
                      src={review.userAvatar} 
                      alt={review.user}
                      className="w-10 h-10 rounded-full" 
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-medium">{review.user}</h4>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                      <div className="flex mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-4 w-4 ${
                              star <= review.rating
                                ? "text-eco-terracota fill-eco-terracota"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-gray-600">{review.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default Perfil;
