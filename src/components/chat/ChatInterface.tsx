
import { useState } from "react";
import { Send, Plus, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export interface Message {
  id: string;
  sender: "user" | "other";
  text: string;
  time: string;
  isRead?: boolean;
}

export interface ChatProps {
  contactId: string;
  contactName: string;
  contactAvatar: string;
  productName: string;
  productImage: string;
  messages: Message[];
}

const ChatInterface = ({
  contactId,
  contactName,
  contactAvatar,
  productName,
  productImage,
  messages: initialMessages,
}: ChatProps) => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const newMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: newMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isRead: false,
    };

    setMessages([...messages, newMsg]);
    setNewMessage("");

    // Simular respuesta después de 1 segundo
    setTimeout(() => {
      const responseMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "other",
        text: "¡Perfecto! Me parece bien. ¿Dónde podríamos encontrarnos para el intercambio?",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, responseMsg]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-[600px] bg-white rounded-lg shadow-sm border overflow-hidden">
      {/* Chat Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={contactAvatar} alt={contactName} />
            <AvatarFallback>{contactName.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-medium">{contactName}</h3>
            <span className="text-xs text-green-500">En línea</span>
          </div>
        </div>
        
        <Button variant="ghost" size="sm">
          Ver perfil
        </Button>
      </div>

      {/* Product Info Bar */}
      <div className="flex items-center gap-3 p-3 bg-gray-50 border-b">
        <div className="h-12 w-12 rounded overflow-hidden">
          <img 
            src={productImage} 
            alt={productName}
            className="h-full w-full object-cover" 
          />
        </div>
        <div className="flex-1">
          <h4 className="font-medium text-sm line-clamp-1">{productName}</h4>
          <p className="text-xs text-gray-500">Propuesta de trueque</p>
        </div>
        <Badge variant="outline" className="text-eco-green border-eco-green">
          Activo
        </Badge>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            {message.sender === "other" && (
              <Avatar className="h-8 w-8 mr-2 mt-1">
                <AvatarImage src={contactAvatar} alt={contactName} />
                <AvatarFallback>{contactName.charAt(0)}</AvatarFallback>
              </Avatar>
            )}
            <div
              className={`max-w-[70%] rounded-lg p-3 ${
                message.sender === "user"
                  ? "bg-eco-green text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              <p className="text-sm">{message.text}</p>
              <div
                className={`flex items-center gap-1 text-xs mt-1 ${
                  message.sender === "user" ? "text-eco-green-light" : "text-gray-500"
                }`}
              >
                <span>{message.time}</span>
                {message.sender === "user" && (
                  <span>{message.isRead ? "✓✓" : "✓"}</span>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* Location Suggestion */}
        <div className="flex justify-start">
          <Avatar className="h-8 w-8 mr-2 mt-1">
            <AvatarImage src={contactAvatar} alt={contactName} />
            <AvatarFallback>{contactName.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="max-w-[70%]">
            <div className="bg-gray-100 text-gray-800 p-2 rounded-lg mb-1">
              <p className="text-sm">¿Te parece bien este lugar para el intercambio?</p>
            </div>
            <div className="rounded-lg overflow-hidden border">
              <div className="relative h-32 bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <MapPin className="text-eco-terracota" size={32} />
                </div>
                <Button className="absolute bottom-2 right-2 bg-white text-gray-700 hover:bg-gray-100 h-8 text-xs py-0">
                  Ver en mapa
                </Button>
              </div>
              <div className="p-2 bg-white">
                <h4 className="font-medium text-sm">Plaza San Martín</h4>
                <p className="text-xs text-gray-500">A 1.2 km de tu ubicación</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Message Input */}
      <div className="p-3 border-t">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-eco-green">
            <Plus />
          </Button>
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Escribe un mensaje..."
            className="flex-1"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSendMessage();
              }
            }}
          />
          <Button 
            onClick={handleSendMessage}
            disabled={!newMessage.trim()}
            size="icon"
            className="bg-eco-green hover:bg-eco-green-dark"
          >
            <Send size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};

// Demo component with sample data
// Demo component with sample data
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

export default ChatInterface;
