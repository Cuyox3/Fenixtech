import React from 'react';

interface TablaServiciosProps {
  servicios: { nombre: string; descripcion: string; logo: string }[]; // Assuming you have a 'logo' field
}

const TablaServicios: React.FC<TablaServiciosProps> = ({ servicios }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {servicios.map((servicio, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center"
        >
          {servicio.logo && (
            <img
              src={servicio.logo}
              alt={`${servicio.nombre} Logo`}
              className="max-h-20 max-w-full mb-2"
            />
          )}
          <h3 className="text-xl font-semibold mb-2 text-center">
            {servicio.nombre}
          </h3>
          <p className="text-gray-600 text-center">{servicio.descripcion}</p>
        </div>
      ))}
    </div>
  );
};

export default TablaServicios;