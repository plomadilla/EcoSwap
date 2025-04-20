
import { useState } from "react";
import { Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";

const categories = [
  { id: "ropa", name: "Ropa y Accesorios" },
  { id: "tecnologia", name: "Tecnología" },
  { id: "libros", name: "Libros y Revistas" },
  { id: "hogar", name: "Hogar y Decoración" },
  { id: "jardineria", name: "Jardinería" },
  { id: "deportes", name: "Deportes" },
  { id: "servicios", name: "Servicios" },
  { id: "alimentos", name: "Alimentos" },
  { id: "arte", name: "Arte y Artesanías" }
];

const ProductFilters = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [distance, setDistance] = useState([10]);
  const [filterCount, setFilterCount] = useState(0);

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories(prev => 
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setDistance([10]);
    setFilterCount(0);
  };

  const applyFilters = () => {
    setFilterCount(selectedCategories.length + (distance[0] !== 10 ? 1 : 0));
    setIsOpen(false);
  };

  return (
    <div className="w-full">
      {/* Filters Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-3">
          <h2 className="text-lg font-medium">Trueques Disponibles</h2>
          {filterCount > 0 && (
            <Badge variant="outline" className="px-2 py-1">
              {filterCount} filtro{filterCount !== 1 ? "s" : ""}
            </Badge>
          )}
        </div>
        
        <div className="flex gap-3">
          <div className="relative">
            <Input
              placeholder="Buscar trueques..."
              className="w-full md:w-60 pl-10"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          
          <Button 
            variant="outline" 
            className={`flex items-center gap-2 ${isOpen || filterCount > 0 ? 'border-eco-green text-eco-green' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <Filter size={16} />
            <span>Filtrar</span>
            {filterCount > 0 && (
              <Badge className="ml-1 h-5 w-5 p-0 flex items-center justify-center bg-eco-green text-white">
                {filterCount}
              </Badge>
            )}
          </Button>
        </div>
      </div>

      {/* Filters Panel */}
      {isOpen && (
        <div className="bg-white border rounded-md p-4 mb-6 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium">Filtros</h3>
            <Button 
              variant="ghost" 
              onClick={clearFilters}
              className="h-8 text-sm text-gray-500 hover:text-eco-green"
            >
              <X size={16} className="mr-1" />
              Limpiar filtros
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Categories */}
            <div>
              <h4 className="text-sm font-medium mb-3">Categorías</h4>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <Badge
                    key={category.id}
                    variant={selectedCategories.includes(category.id) ? "default" : "outline"}
                    className={`
                      cursor-pointer hover:bg-eco-green/10
                      ${selectedCategories.includes(category.id) 
                        ? 'bg-eco-green hover:bg-eco-green-dark' 
                        : 'text-gray-700'
                      }
                    `}
                    onClick={() => toggleCategory(category.id)}
                  >
                    {category.name}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Distance */}
            <div>
              <div className="flex justify-between mb-3">
                <h4 className="text-sm font-medium">Distancia</h4>
                <span className="text-sm text-gray-500">{distance[0]} km</span>
              </div>
              <Slider
                defaultValue={[10]}
                max={50}
                step={1}
                value={distance}
                onValueChange={setDistance}
                className="py-4"
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>1 km</span>
                <span>25 km</span>
                <span>50 km</span>
              </div>
            </div>

            {/* Additional filters */}
            <div>
              <h4 className="text-sm font-medium mb-3">Características</h4>
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded text-eco-green focus:ring-eco-green" />
                  <span className="text-sm">Sólo productos eco-friendly</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded text-eco-green focus:ring-eco-green" />
                  <span className="text-sm">Usuarios con 4+ estrellas</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded text-eco-green focus:ring-eco-green" />
                  <span className="text-sm">Disponible ahora</span>
                </label>
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <Button 
              variant="outline" 
              onClick={() => setIsOpen(false)}
              className="mr-2"
            >
              Cancelar
            </Button>
            <Button onClick={applyFilters} className="bg-eco-green hover:bg-eco-green-dark">
              Aplicar Filtros
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductFilters;
