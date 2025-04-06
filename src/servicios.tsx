import React, { useState, useRef, useEffect } from 'react';

interface MenuDesplegableServiciosProps {}

const MenuDesplegableServicios: React.FC<MenuDesplegableServiciosProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const servicios: string[] = [
    'Servicio 1',
    'Servicio 2',
    'Servicio 3',
    'Servicio 4',
    'Servicio 5',
    'Servicio 6',
    'Servicio 7',
    'Servicio 8',
    'Servicio 9',
    'Servicio 10',
    'Servicio 11',
  ];

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (servicio: string): void => {
    console.log(`Enlace a la sección de: ${servicio}`);
    // Aquí iría la lógica para navegar a la otra página y al div específico
    // Por ejemplo: window.location.href = '/otra-pagina#servicio-' + servicio.toLowerCase().replace(/ /g, '-');
    setIsOpen(false); // Cerrar el menú después de hacer clic
  };

  const handleClickOutside = (event: MouseEvent): void => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) && isOpen) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="menu-servicios" ref={dropdownRef}>
      <p onClick={toggleMenu}>Servicios</p>
      {isOpen && (
        <div className="contenedor-links-servicios">
          {servicios.map((servicio, index) => (
            <a
              key={index}
              href={`/otra-pagina#servicio-${servicio.toLowerCase().replace(/ /g, '-')}`}
              onClick={() => handleOptionClick(servicio)}
            >
              {servicio}
            </a>
          ))}
        </div>
      )}
      <style>{`
        .menu-servicios {
          position: relative;
        }

        .contenedor-links-servicios {
          position: absolute;
          top: 100%;
          left: 0;
          background-color: white;
          border: 1px solid #ccc;
          padding: 10px;
          z-index: 10;
        }

        .contenedor-links-servicios a {
          display: block;
          padding: 5px 10px;
          text-decoration: none;
          color: black;
        }

        .contenedor-links-servicios a:hover {
          background-color: #f0f0f0;
        }

        .menu-servicios p {
          cursor: pointer;
          padding: 10px 15px;
        }
      `}</style>
    </div>
  );
};

export default MenuDesplegableServicios;