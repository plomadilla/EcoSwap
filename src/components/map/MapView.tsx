
import { useState, useEffect } from 'react';
import { MapPin } from 'lucide-react';

const MapView = () => {
  // En una implementación real, esto usaría una API como Mapbox o Google Maps
  // Para esta demo, crearemos un mapa simulado con ubicaciones
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulación de carga del mapa
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-full min-h-[500px] rounded-lg overflow-hidden border bg-eco-blue-light/20">
      {loading ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="animate-pulse text-eco-green-dark">Cargando mapa...</div>
        </div>
      ) : (
        <div className="relative w-full h-full">
          {/* Mapa simulado - En producción usar Mapbox, Google Maps u otra API */}
          <div className="w-full h-full bg-[url('/map-background.jpg')] bg-cover">
            {/* Este fondo sería reemplazado por un mapa real */}
          </div>
          
          {/* Marcadores simulados */}
          <div className="absolute top-1/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
            <MapMarker active count={3} />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <MapMarker count={8} />
          </div>
          <div className="absolute top-2/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
            <MapMarker count={2} />
          </div>
          <div className="absolute top-1/3 left-2/3 transform -translate-x-1/2 -translate-y-1/2">
            <MapMarker count={5} />
          </div>

          {/* Controles del mapa */}
          <div className="absolute bottom-4 right-4 flex flex-col gap-2">
            <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
            </button>
            <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/></svg>
            </button>
            <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const MapMarker = ({ active = false, count = 1 }: { active?: boolean; count?: number }) => {
  return (
    <div className="relative group">
      <div 
        className={`
          flex items-center justify-center w-10 h-10 rounded-full 
          ${active 
            ? 'bg-eco-green text-white shadow-lg animate-pulse' 
            : 'bg-eco-terracota text-white shadow'
          }
          hover:scale-110 transition-transform cursor-pointer
        `}
      >
        <MapPin size={20} />
        {count > 1 && (
          <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 text-xs font-bold bg-white rounded-full shadow text-eco-green-dark">
            {count}
          </span>
        )}
      </div>
      
      {/* Tooltip on hover */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div className="bg-white shadow-md rounded p-2 text-sm whitespace-nowrap">
          {count} {count === 1 ? 'trueque' : 'trueques'} disponible{count !== 1 ? 's' : ''}
        </div>
      </div>
    </div>
  );
};

export default MapView;
