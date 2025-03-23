import React, { useState, useEffect } from 'react';
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
  Menu,
  CircuitBoard,
  Cpu,
  Layers
} from 'lucide-react';


function App() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setShowContactForm(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'specialties', 'benefits', 'contact'];
      const current = sections.find(section => {
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

  const navLinks = [
    { id: 'home', label: 'Inicio' },
    { id: 'about', label: 'Nosotros' },
    { id: 'specialties', label: 'Especialidades' },
    { id: 'benefits', label: 'Beneficios' },
    { id: 'contact', label: 'Contacto' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="fixed w-full z-50 bg-white/10 backdrop-blur-lg border-b-2 border-white border-opacity-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <a href="#home" className="text-2xl font-bold text-gray-800">
              <img src="../logo.png" className='w-40' alt="Logo" />
            </a>
            
            {/* Desktop */}
            <div className="hidden md:flex items-center space-x-2">
              {navLinks.map(link => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    activeSection === link.id
                      ? 'bg-orange-100 text-orange-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile Boton de Menu  */}
            <button
              className="md:hidden text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu size={24} />
            </button>
          </div>

          {/* Mobile */}
          {isMenuOpen && (
            <div className="md:hidden py-4">
              {navLinks.map(link => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`block px-4 py-2 rounded-lg transition-colors ${
                    activeSection === link.id
                      ? 'bg-orange-100 text-orange-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <header id="home" className="relative min-h-[calc(100vh+5rem)] flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-100 to-slate-900 text-white overflow-hidden pt-16">

        {/* Elementos del Background */}
        <div className="absolute inset-0 overflow-hidden">

          {/* patron circuito */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
          </div>

          {/* anillo rotante */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] animate-rotate-slow opacity-20">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-transparent to-orange-500 clip-path-circle"></div>
          </div>
        </div>

        {/* Contenido */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="space-y-8">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-blue-500 blur-xl opacity-30"></div>
              <h1 className="relative text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-orange-200 to-blue-800">
                Innovación y eficiencia en soluciones para fundición y equipos industriales
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-black max-w-3xl mx-auto leading-relaxed">
            En Fenixtech acercamos las mejores tecnologías y equipos industriales a tu alcance, garantizando calidad, reducción de costos y optimización en tus procesos.
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
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-blue-600 rounded-xl opacity-20 blur-xl"></div>
              <div className="relative bg-white p-8 rounded-xl shadow-xl">
                <h2 className="text-4xl font-bold mb-6 text-gray-800">Sobre Nosotros</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                En Fenixtech facilitamos la implementación de proyectos industriales con estrategias eficientes de costeo, proveedores de clase mundial y tecnología avanzada. Nuestro compromiso es ser el enlace que transforma tus ideas en proyectos exitosos mediante soluciones personalizadas, reducción de tiempos y optimización de recursos.
                </p>
                
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <Users size={32} />, title: '+200', desc: 'Clientes Satisfechos' },
                { icon: <Award size={32} />, title: '+10 años', desc: 'de Experiencia' },
                { icon: <Target size={32} />, title: '100%', desc: 'Compromiso' },
                { icon: <Shield size={32} />, title: 'ISO 9001', desc: 'Certificados' }
              ].map((stat, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl text-center hover:bg-gray-100 transition-colors duration-300">
                  <div className="text-orange-500 mb-3 flex justify-center">{stat.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">{stat.title}</h3>
                  <p className="text-gray-600">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Areas */}
      <section id="specialties" className="py-24 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Áreas de Especialización
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre las tecnologías y servicios que ofrecemos, organizados según tus necesidades industriales.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Factory size={40} />,
                title: 'Fundición y Forja',
                desc: 'Tecnología de punta en procesos de fundición industrial con control preciso de temperatura y composición.',
                features: ['Manipuladores y martillos neumáticos para procesos de fundición', 'Sistemas de vaciado automático y equipos de inoculación para metales']
              },
              {
                icon: <Cog size={40} />,
                title: 'Automatización & Procesos',
                desc: 'Sistemas inteligentes que transforman procesos manuales en operaciones eficientes y precisas.',
                features: ['Automatización robótica: corte, rebabeo, soldadura ', 'Sistemas para detectar y medir niveles de metales no férricos ']
              },
              {
                icon: <Recycle size={40} />,
                title: 'Gestión y reciclaje',
                desc: 'Soluciones eco-amigables que maximizan la recuperación de materiales y minimizan el impacto ambiental.',
                features: ['Trituradoras, molinos y cizallas para procesar chatarra', 'Sistemas de separación de metales y reciclaje de aluminio']
              },
              {
                icon: <Brush size={40} />,
                title: 'Acabados de Precisión',
                desc: 'Tecnologías de acabado que garantizan la más alta calidad en cada detalle del producto.',
                features: ['Equipos de granallado para diferentes aplicaciones industriales', 'Líneas de enfriamiento y mesas compactadoras para piezas o materiales']
              },
              {
                icon: <Box size={40} />,
                title: 'Manejo de Materiales',
                desc: 'Sistemas automatizados para el manejo eficiente y seguro de materiales en toda la cadena productiva.',
                features: ['Sistemas de manipulación y transporte para piezas y materiales en procesos industriales', 'Dosificadores y líneas de alimentación optimizadas para mayor eficiencia']
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="p-8">
                  <div className="text-orange-500 mb-4 bg-orange-50 w-16 h-16 rounded-lg flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 mb-6">{item.desc}</p>
                  <ul className="space-y-2">
                    {item.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center text-gray-600">
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
      <section id="benefits" className="py-24 px-4 bg-blue-900 text-white relative overflow-hidden">
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
              Nuestra dedicación a la excelencia y la innovación nos distingue en la industria
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield size={40} />,
                title: 'Tecnología de Vanguardia',
                desc: 'Implementamos las últimas innovaciones tecnológicas para garantizar soluciones de última generación'
              },
              {
                icon: <Users size={40} />,
                title: 'Equipo Experto',
                desc: 'Profesionales altamente capacitados con años de experiencia en la industria'
              },
              {
                icon: <Target size={40} />,
                title: 'Soluciones Personalizadas',
                desc: 'Cada proyecto se adapta específicamente a las necesidades únicas de su empresa'
              },
              {
                icon: <Clock size={40} />,
                title: 'Soporte 24/7',
                desc: 'Asistencia técnica disponible en todo momento para garantizar la continuidad de sus operaciones'
              },
              {
                icon: <Award size={40} />,
                title: 'Calidad Certificada',
                desc: 'Cumplimos con los más altos estándares internacionales de calidad'
              },
              {
                icon: <CheckCircle2 size={40} />,
                title: 'Resultados Garantizados',
                desc: 'Nos comprometemos a alcanzar y superar los objetivos establecidos'
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 hover:bg-white/20 transition-colors duration-300">
                <div className="text-orange-400 mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-200">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24 bg-gradient-to-br from-orange-500 to-orange-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            ¿Listo para impulsar tus proyectos con las mejores soluciones industriales?”
          </h2>
          <p className="text-2xl mb-12 text-orange-100">
            Únase a las empresas líderes que ya han revolucionado sus procesos con FenixTech
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
                {/* Iconos Redes Sociales */}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Contacto Directo</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="text-orange-500" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-orange-500" />
                  <span>contacto@fenixtech.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="text-orange-500" />
                  <span>Av. Industrial 123, Ciudad Tech</span>
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
            <p>&copy; {new Date().getFullYear()} FenixTech. Todos los derechos reservados.</p>
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
            <h3 className="text-2xl font-bold mb-2 text-gray-800">Contáctanos</h3>
            <p className="text-gray-600 mb-6">Cuéntanos sobre tu proyecto y nos pondremos en contacto contigo.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre completo
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Ingresa tu nombre"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Teléfono
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
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