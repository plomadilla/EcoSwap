
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatInterface, { Message } from "@/components/chat/ChatInterface";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, X } from "lucide-react";

// Interfaces
interface ChatContact {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  lastTime: string;
  unread: number;
  online: boolean;
  product: {
    name: string;
    image: string;
  };
}

const Mensajes = () => {
  const [activeChat, setActiveChat] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data - En una aplicación real, esto vendría de una API
  const contacts: ChatContact[] = [
    {
      id: "1",
      name: "Martín L.",
      avatar: "https://randomuser.me/api/portraits/men/67.jpg",
      lastMessage: "Te las envío en unos minutos. ¿Te parece bien encontrarnos para ver ambos productos?",
      lastTime: "10:40",
      unread: 2,
      online: true,
      product: {
        name: "Bicicleta de montaña en excelente estado",
        image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e"
      }
    },
    {
      id: "2",
      name: "Ana S.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      lastMessage: "Perfecto, ¿podríamos encontrarnos el sábado en la plaza?",
      lastTime: "Ayer",
      unread: 0,
      online: false,
      product: {
        name: "Colección de libros de ciencia ficción",
        image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
      }
    },
    {
      id: "3",
      name: "Laura G.",
      avatar: "https://randomuser.me/api/portraits/women/90.jpg",
      lastMessage: "Me interesa tu oferta. ¿Podemos hablar más sobre las condiciones del trueque?",
      lastTime: "Lun",
      unread: 1,
      online: true,
      product: {
        name: "Clases de guitarra (2 meses)",
        image: "https://images.unsplash.com/photo-1525201548942-d8732f6617a0"
      }
    },
    {
      id: "4",
      name: "Carlos M.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      lastMessage: "Gracias por el intercambio. Me encantó conocerte, fue una experiencia genial.",
      lastTime: "Mar",
      unread: 0,
      online: false,
      product: {
        name: "Set de vajilla artesanal",
        image: "https://images.unsplash.com/photo-1594763391776-8e06694e1540"
      }
    }
  ];

  // Filtrar contactos según búsqueda
  const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Mock messages para cada chat, en una app real esto vendría de una API
  const sampleMessages: Message[] = [
    {
      id: "1",
      sender: "other",
      text: "Hola! Vi tu publicación sobre la bicicleta. Me interesa hacer un trueque por mi cámara fotográfica.",
      time: "10:30",
    },
    {
      id: "2",
      sender: "user",
      text: "¡Hola! Gracias por contactarme. Me interesa, ¿qué modelo de cámara es?",
      time: "10:32",
      isRead: true,
    },
    {
      id: "3",
      sender: "other",
      text: "Es una Nikon D3500, tiene poco uso. Puedo enviarte fotos si quieres.",
      time: "10:35",
    },
    {
      id: "4",
      sender: "user",
      text: "Suena bien! Me gustaría ver algunas fotos, sobre todo del estado general.",
      time: "10:38",
      isRead: true,
    },
    {
      id: "5",
      sender: "other",
      text: "¡Claro! Te las envío en unos minutos. ¿Te parece bien encontrarnos para ver ambos productos?",
      time: "10:40",
    }
  ];

  const getActiveContact = () => {
    return contacts.find(contact => contact.id === activeChat);
  };

  const currentContact = getActiveContact();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-1 container py-8">
        <h1 className="text-2xl font-bold font-heading mb-6">Mensajes</h1>
        
        <div className="bg-white rounded-lg shadow-sm border overflow-hidden flex h-[600px]">
          {/* Sidebar de chats */}
          <div className="w-full max-w-xs border-r">
            <div className="p-3 border-b">
              <div className="relative">
                <Input
                  placeholder="Buscar conversaciones..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                {searchTerm && (
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400 hover:text-gray-600"
                    onClick={() => setSearchTerm("")}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                )}
              </div>
            </div>
            
            <div className="overflow-y-auto h-[calc(600px-56px)]">
              {filteredContacts.length === 0 ? (
                <div className="p-4 text-center text-gray-500">
                  No se encontraron conversaciones
                </div>
              ) : (
                filteredContacts.map(contact => (
                  <div 
                    key={contact.id}
                    className={`
                      p-3 border-b cursor-pointer transition-colors 
                      ${activeChat === contact.id ? 'bg-gray-100' : 'hover:bg-gray-50'}
                    `}
                    onClick={() => setActiveChat(contact.id)}
                  >
                    <div className="flex gap-3">
                      <div className="relative">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={contact.avatar} alt={contact.name} />
                          <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        {contact.online && (
                          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center mb-1">
                          <h3 className="font-medium truncate">{contact.name}</h3>
                          <span className="text-xs text-gray-500 shrink-0">{contact.lastTime}</span>
                        </div>
                        <p className="text-sm text-gray-600 truncate mb-1">{contact.lastMessage}</p>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-md overflow-hidden bg-gray-100 shrink-0">
                            <img 
                              src={contact.product.image} 
                              alt={contact.product.name}
                              className="w-full h-full object-cover" 
                            />
                          </div>
                          <span className="text-xs text-gray-500 truncate">{contact.product.name}</span>
                        </div>
                      </div>
                      
                      {contact.unread > 0 && (
                        <Badge className="bg-eco-green text-white h-5 min-w-5 p-0 flex items-center justify-center rounded-full shrink-0">
                          {contact.unread}
                        </Badge>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
          
          {/* Área de chat */}
          <div className="flex-1">
            {activeChat ? (
              currentContact && (
                <ChatInterface 
                  contactId={currentContact.id}
                  contactName={currentContact.name}
                  contactAvatar={currentContact.avatar}
                  productName={currentContact.product.name}
                  productImage={currentContact.product.image}
                  messages={sampleMessages}
                />
              )
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center p-6">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2 font-heading">Tus mensajes</h3>
                <p className="text-gray-500 max-w-md">
                  Selecciona una conversación de la lista para ver los mensajes o inicia una nueva conversación al hacer match con un trueque.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Mensajes;
