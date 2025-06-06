import React, { useState, useEffect, useRef } from "react";
import {
  Factory,
  Cog,
  Recycle,
  Brush,
  Box,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  X,
  Clock,
  Shield,
  Users,
  Award,
  Target,
  Zap,
  CheckCircle2,
  ArrowRight,
  Menu as MenuIcon,
} from "lucide-react";

import logo from "./logo.png";
import TablaServicios from "./tabla";
import Clansman from "./img/clansman_logo.png";
import EMI from "./img/emi_logo.png";
import EuroEquip from "./img/euroequip_logo.png";
import RNP from "./img/rnp_logo.png";
import VikingTech from "./img/vikingtech_logo.png";
import JOEST from "./img/joestgroup_logo.png";
import OMSC from "./img/omsc_logo.png";
import Precimete from "./img/precimete_logo.png";
import SirRobotics from "./img/sirrobotics_logo.png";
import Zato from "./img/zato_logo.png";
import Primafond from "./img/primafond_logo.png";
import { ideahub } from "googleapis/build/src/apis/ideahub";



const serviciosData = [
  { nombre: 'CLANSMAN DYNAMICS',
     descripcion: `“Soluciones en automatización y manipulación industrial con Clansman Dynamics” \n 
                    Optimiza tus procesos de fundición y forja con equipos de alta tecnología y precisión.`,
      logo: Clansman,
      id: 'clansman'
    },
  { nombre: 'EMI',
     descripcion: `“Soluciones innovadoras para la industria de fundición” \n 
                   Con más de 35 años de experiencia, EMI es el líder global en equipos de fundición, automatización y procesos de acabado.`,
      logo: EMI,
      id: 'emi'
    },

  { nombre: 'EURO-EQUIP',
     descripcion: 'EuroEquip ofrece soluciones innovadoras en sistemas de fundición, reciclaje y control ambiental, optimizando cada proceso para mayor eficiencia, seguridad y sostenibilidad.',
      logo: EuroEquip,
      id: 'euroequip'
     },
  { nombre: 'RNP',
     descripcion: `"Equipos de Demolición y Construcción Innovadores para las Industrias Más Exigentes" \n 
                   RNP ofrece soluciones avanzadas en equipos especializados para demolición, minería y procesos industriales, diseñados para maximizar la eficiencia y la seguridad.`,
      logo: RNP,
      id: 'rnp'
    },
  { nombre: 'VIKING TECH',
     descripcion: `"Tecnología de Precisión para Fundición y Vacío Automático" \n 
                   Descubre nuestras soluciones avanzadas en sistemas de vaciado automático, equipos de inoculación y tecnología de medición para optimizar tus procesos industriales`,
      logo: VikingTech,
      id: 'vikingtech'
    },
  { nombre: 'JOEST group',
     descripcion: 'Descripción de JOEST group',
      logo: JOEST,
      id: 'joest'
    },
  { nombre: 'OMSC',
     descripcion: `¿Por qué elegir las soluciones de OMSG? \n 
                   OMSG es líder en el diseño y fabricación de granalladoras y equipos de shot-peening, ofreciendo soluciones personalizadas para la industria de fundición. Con más de 60 años de experiencia, proporcionamos equipos que mejoran la calidad superficial de piezas fundidas de metales ferrosos y no ferrosos.`,
      logo: OMSC,
      id: 'omsg'
    },
    { nombre: 'Precimete',
      descripcion: `Soluciones Avanzadas para la Medición y Control de Metales No Ferrosos \n 
                   Precimeter ofrece soluciones innovadoras para la detección y medición de niveles en metales no ferrosos, garantizando precisión y eficiencia en procesos industriales.`,
       logo: Precimete,
       id: 'precimete'
     },
  { nombre: 'Sir Robotics',
     descripcion: `Soluciones Robóticas Personalizadas para la Industria \n 
                   SIR Robotics ofrece soluciones avanzadas de automatización e integración de procesos industriales, mejorando la eficiencia, precisión y seguridad en operaciones clave como corte, rebabeo, esmerilado, ensamblaje de piezas, soldadura y corte por plasma.`,
      logo: SirRobotics,
      id: 'sirrobotics'
    },
  { nombre: 'Zato',
     descripcion: `Soluciones Integrales para el Procesamiento de Chatarra \n 
                   Zato ofrece una gama completa de equipos avanzados para el procesamiento de chatarra, incluyendo trituradoras, molinos de martillos, cizallas y sistemas de separación, diseñados para maximizar la eficiencia y la recuperación de materiales en la industria del reciclaje.`,
      logo: Zato,
      id: 'zato'
    },
  { nombre: 'Primafond',
     descripcion: 'Con más de 30 años de experiencia, Primafond se ha consolidado como líder en la fabricación de maquinaria y equipos para la producción de corazones de arena en fundición. Ofreciendo soluciones personalizadas, colaborando estrechamente con clientes en el desarrollo de nuevas tecnologías y brindando asesoría especializada para resolver desafíos específicos. ',
      logo: Primafond,
      id: 'primafond'
    },
  // ... more services
];

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  activeSection,
  setActiveSection,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpenMobile, setIsServicesOpenMobile] = useState(false); // New state for mobile services submenu
  const servicios = [
    'Clansman Dynamics',
    'Equipment Manufacturers International Inc.',
    'Euro-Equip',
    'Rnp',
    'Viking Technologies',
    'JOEST group',
    'OMSG',
    'Precimete',
    'SIR Robotics',
    'Zato',
    'Primafond',
  ];

  return (
    <nav className="fixed w-full z-50 bg-white backdrop-blur-lg border-b-2 border-black border-opacity-30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="text-2xl font-bold text-gray-800">
            <img src={logo} className="w-40" alt="Logo" />
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center space-x-2">
            <a
              href="#home"
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeSection === 'home'
                  ? 'bg-orange-100 text-orange-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => {
                setActiveSection('home');
              }}
            >
              Inicio
            </a>
            <a
              href="#about"
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeSection === 'about'
                  ? 'bg-orange-100 text-orange-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => {
                setActiveSection('about');
              }}
            >
              Nosotros
            </a>
            <div className="relative group">
              <button className="px-4 py-2 rounded-lg transition-colors text-gray-600 hover:text-gray-900">
                Servicios
              </button>
              <div className="absolute top-full left-0 bg-white border border-gray-300 rounded-md shadow-md z-10 hidden group-hover:block">
                {servicios.map((servicio, index) => (
                  <a
                    key={index}
                    href={`#services`}
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                    onClick={() => {
                      setActiveSection('services');
                    }}
                  >
                    {servicio}
                  </a>
                ))}
              </div>
            </div>
            <a
              href="#specialties"
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeSection === 'specialties'
                  ? 'bg-orange-100 text-orange-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => {
                setActiveSection('specialties');
              }}
            >
              Especialidades
            </a>
            <a
              href="#benefits"
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeSection === 'benefits'
                  ? 'bg-orange-100 text-orange-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => {
                setActiveSection('benefits');
              }}
            >
              Beneficios
            </a>
            <a
              href="#contact"
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeSection === 'contact'
                  ? 'bg-orange-100 text-orange-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => {
                setActiveSection('contact');
              }}
            >
              Contacto
            </a>
          </div>

          {/* Mobile Boton de Menu */}
          <button
            className="md:hidden text-gray-600 hover:text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <MenuIcon size={24} />
          </button>
        </div>

        {/* Mobile */}
        {isMenuOpen && (
          <div className="md:hidden py-4 flex flex-col items-center absolute top-full left-0 w-full bg-white shadow-md rounded-b-md">
            <a
              href="#home"
              className={`w-full block px-4 py-2 rounded-lg transition-colors ${
                activeSection === 'home'
                  ? 'bg-orange-100 text-orange-600'
                  : 'text-gray-600 hover:text-gray-900'
              } text-center`}
              onClick={() => {
                setActiveSection('home');
                setIsMenuOpen(false);
              }}
            >
              Inicio
            </a>
            <a
              href="#about"
              className={`w-full block px-4 py-2 rounded-lg transition-colors ${
                activeSection === 'about'
                  ? 'bg-orange-100 text-orange-600'
                  : 'text-gray-600 hover:text-gray-900'
              } text-center`}
              onClick={() => {
                setActiveSection('about');
                setIsMenuOpen(false);
              }}
            >
              Nosotros
            </a>
            <div className="relative w-full">
              <button
                className={`w-full block px-4 py-2 rounded-lg transition-colors text-center ${
                  activeSection === 'services' || isServicesOpenMobile
                    ? 'bg-orange-100 text-orange-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => {
                  setIsServicesOpenMobile(!isServicesOpenMobile); // Toggle submenu visibility
                }}
              >
                Servicios
              </button>
              {isServicesOpenMobile && (
                <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md shadow-md z-10">
                  {servicios.map((servicio, index) => (
                    <a
                      key={index}
                      href={`#services`}
                      className="block px-4 py-2 hover:bg-gray-100 text-gray-700 text-center"
                      onClick={() => {
                        setActiveSection('services');
                        setIsMenuOpen(false);
                        setIsServicesOpenMobile(false); // Close submenu after selection
                      }}
                    >
                      {servicio}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <a
              href="#specialties"
              className={`w-full block px-4 py-2 rounded-lg transition-colors ${
                activeSection === 'specialties'
                  ? 'bg-orange-100 text-orange-600'
                  : 'text-gray-600 hover:text-gray-900'
              } text-center`}
              onClick={() => {
                setActiveSection('specialties');
                setIsMenuOpen(false);
              }}
            >
              Especialidades
            </a>
            <a
              href="#benefits"
              className={`w-full block px-4 py-2 rounded-lg transition-colors ${
                activeSection === 'benefits'
                  ? 'bg-orange-100 text-orange-600'
                  : 'text-gray-600 hover:text-gray-900'
              } text-center`}
              onClick={() => {
                setActiveSection('benefits');
                setIsMenuOpen(false);
              }}
            >
              Beneficios
            </a>
            <a
              href="#contact"
              className={`w-full block px-4 py-2 rounded-lg transition-colors ${
                activeSection === 'contact'
                  ? 'bg-orange-100 text-orange-600'
                  : 'text-gray-600 hover:text-gray-900'
              } text-center`}
              onClick={() => {
                setActiveSection('contact');
                setIsMenuOpen(false);
              }}
            >
              Contacto
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

function App() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const name = form.elements.namedItem('name')?.value || '';
    const phone = form.elements.namedItem('phone')?.value || '';
    const email = form.elements.namedItem('email')?.value || '';
    const message = form.elements.namedItem('message')?.value || '';

    const mailtoLink = `mailto:contacto@fenixtech.com?subject=Nombre: ${encodeURIComponent(
      name
    )} - Email: ${encodeURIComponent(
      email
    )}&body=Teléfono: ${encodeURIComponent(
      phone
    )}%0D%0AMensaje: ${encodeURIComponent(message)}`;

    window.location.href = mailtoLink;
  };

  const [showContactForm, setShowContactForm] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'home',
        'about',
        'specialties',
        'benefits',
        'contact',
        'services',
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Hero */}
      <header
        id="home"
        className="relative min-h-[calc(100vh+5rem)] flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-100 to-slate-900 text-white overflow-hidden pt-16"
      >
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Circuit pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse-slow"></div>
            <div
              className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl animate-pulse-slow"
              style={{ animationDelay: '2s' }}
            ></div>
          </div>

          {/* Rotating ring */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] animate-rotate-slow opacity-20">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-transparent to-orange-500 clip-path-circle"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="space-y-8">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-blue-500 blur-xl opacity-30"></div>
              <h1 className="relative text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-orange-200 to-blue-800">
                Innovación y eficiencia en soluciones para fundición y equipos
                industriales
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-black max-w-3xl mx-auto leading-relaxed">
              En Fenixtech acercamos las mejores tecnologías y equipos
              industriales a tu alcance, garantizando calidad, reducción de
              costos y optimización en tus procesos.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={() => setShowContactForm(true)}
                className="group relative px-8 py-4 rounded-full overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 transition-transform duration-300 group-hover:scale-105"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-orange-600 to-orange-700"></div>
                <span className="relative flex items-center gap-2 text-lg font-semibold">
                  Contáctanos
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <a
                href="#specialties"
                className="text-black hover:text-white transition-colors duration-300 flex items-center gap-2 group"
              >
                Descubre más
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </header>

      {/* About Us */}
      <section id="about" className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex justify-center"> 
      <div className="relative max-w-7xl">  
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-blue-600 rounded-xl opacity-20 blur-xl"></div>
              <div className="relative bg-white p-8 rounded-xl shadow-xl">
                <h2 className="text-4xl font-bold mb-6 text-gray-800 mx-auto text-center">
                  Sobre Nosotros
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  En Fenixtech facilitamos la implementación de proyectos
                  industriales con estrategias eficientes de costeo, proveedores
                  de clase mundial y tecnología avanzada. Nuestro compromiso es
                  ser el enlace que transforma tus ideas en proyectos exitosos
                  mediante soluciones personalizadas, reducción de tiempos y
                  optimización de recursos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas */}
      <section
        id="specialties"
        className="py-24 bg-gradient-to-b from-gray-50 to-white relative"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Áreas de Especialización
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre las tecnologías y servicios que ofrecemos, organizados
              según tus necesidades industriales.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Factory size={40} />,
                title: 'Fundición y Forja',
                desc:
                  'Tecnología de punta en procesos de fundición industrial con control preciso de temperatura y composición.',
                features: [
                  'Manipuladores y martillos neumáticos para procesos de fundición',
                  'Sistemas de vaciado automático y equipos de inoculación para metales',
                ],
              },
              {
                icon: <Cog size={40} />,
                title: 'Automatización & Procesos',
                desc:
                  'Sistemas inteligentes que transforman procesos manuales en operaciones eficientes y precisas.',
                features: [
                  'Automatización robótica: corte, rebabeo, soldadura ',
                  'Sistemas para detectar y medir niveles de metales no férricos ',
                ],
              },
              {
                icon: <Recycle size={40} />,
                title: 'Gestión y reciclaje',
                desc:
                  'Soluciones eco-amigables que maximizan la recuperación de materiales y minimizan el impacto ambiental.',
                features: [
                  'Trituradoras, molinos y cizallas para procesar chatarra',
                  'Sistemas de separación de metales y reciclaje de aluminio',
                ],
              },
              {
                icon: <Brush size={40} />,
                title: 'Acabados de Precisión',
                desc:
                  'Tecnologías de acabado que garantizan la más alta calidad en cada detalle del producto.',
                features: [
                  'Equipos de granallado para diferentes aplicaciones industriales',
                  'Líneas de enfriamiento y mesas compactadoras para piezas o materiales',
                ],
              },
              {
                icon: <Box size={40} />,
                title: 'Manejo de Materiales',
                desc:
                  'Sistemas automatizados para el manejo eficiente y seguro de materiales en toda la cadena productiva.',
                features: [
                  'Sistemas de manipulación y transporte para piezas y materiales en procesos industriales',
                  'Dosificadores y líneas de alimentación optimizadas para mayor eficiencia',
                ],
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="p-8">
                  <div className="text-orange-500 mb-4 bg-orange-50 w-16 h-16 rounded-lg flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{item.desc}</p>
                  <ul className="space-y-2">
                    {item.features.map((feature, fIndex) => (
                      <li
                        key={fIndex}
                        className="flex items-center text-gray-600"
                      >
                        <CheckCircle2 className="text-green-500 w-5 h-5 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section
        id="benefits"
        className="py-24 px-4 bg-blue-900 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-blue-900 opacity-90"></div>
          <img
            src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80"
            alt="Industrial Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Por qué elegir FenixTech?
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Nuestra dedicación a la excelencia y la innovación nos distingue
              en la industria
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield size={40} />,
                title: 'Tecnología de Vanguardia',
                desc:
                  'Implementamos las últimas innovaciones tecnológicas para garantizar soluciones de última generación',
              },
              {
                icon: <Users size={40} />,
                title: 'Equipo Experto',
                desc:
                  'Profesionales altamente capacitados con años de experiencia en la industria',
              },
              {
                icon: <Target size={40} />,
                title: 'Soluciones Personalizadas',
                desc:
                  'Cada proyecto se adapta específicamente a las necesidades únicas de su empresa',
              },
              {
                icon: <Clock size={40} />,
                title: 'Soporte 24/7',
                desc:
                  'Asistencia técnica disponible en todo momento para garantizar la continuidad de sus operaciones',
              },
              {
                icon: <Award size={40} />,
                title: 'Calidad Certificada',
                desc: 'Cumplimos con los más altos estándares internacionales de calidad',
              },
              {
                icon: <CheckCircle2 size={40} />,
                title: 'Resultados Garantizados',
                desc: 'Nos comprometemos a alcanzar y superar los objetivos establecidos',
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 hover:bg-white/20 transition-colors duration-300"
              >
                <div className="text-orange-400 mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-200">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="py-24 bg-gradient-to-br from-orange-500 to-orange-600 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            ¿Listo para impulsar tus proyectos con las mejores soluciones
            industriales?”
          </h2>
          <p className="text-2xl mb-12 text-orange-100">
            Únase a las empresas líderes que ya han revolucionado sus procesos
            con FenixTech
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              Solicitar cotización
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => setShowContactForm(true)}
              className="bg-orange-700 hover:bg-orange-800 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Contactar ahora
              <Mail className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section
        id="services"
        className="py-24 bg-gray-50 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Servicios
          </h2>
          <div className="menu-container">
            <TablaServicios servicios={serviciosData} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-evenly">
            <div>
              <h3 className="text-2xl font-bold mb-6">FenixTech</h3>
              <p className="text-gray-400 mb-6">
                Innovación y excelencia en cada proyecto industrial
              </p>
              <div className="flex space-x-4">
                {/* Social Media Icons */}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Contacto Directo</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="text-orange-500" />
                  <span>contacto@fenixtech.com</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Horario</h4>
              <div className="space-y-2 text-gray-400">
                <p>Lunes - Viernes: 8:00 - 18:00</p>
                <p>Sábado: 9:00 - 13:00</p>
                <p>Domingo: Cerrado</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} FenixTech. Todos los derechos
              reservados. | Design by: Cuyox3
            </p>
          </div>
        </div>
      </footer>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full relative">
            <button
              onClick={() => setShowContactForm(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X size={24} />
            </button>
            <h3 className="text-2xl font-bold mb-2 text-gray-800">
              Contáctanos
            </h3>
            <p className="text-gray-600 mb-6">
              Cuéntanos sobre tu proyecto y nos pondremos en contacto contigo.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  placeholder="Ingresa tu nombre"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="telefono"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  placeholder="Cuéntanos sobre tu proyecto o necesidades..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                Enviar mensaje
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;