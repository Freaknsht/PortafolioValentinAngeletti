
const projects =[
    {
        id:1,
        titulo:"Cofradía de la Merced",
        descripcion:"Participé en el desarrollo backend y frontend de una plataforma web interna destinada a la gestión de datos sensibles de socios, automatización de correos electrónicos, y generación de reportes dinámicos. Trabajé con Django, PostgreSQL y JavaScript, aplicando buenas prácticas de programación y control de versiones con Git. El proyecto fue implementado con éxito y utilizado por empleados de la organización.",
        imagen:"",
        url:"",
        tags:["Python", "Django", "PostgreSQL", "HTML", "CSS", "JavaScript", "Git", "Docker"]
    },
    {
        id:2,
        titulo:"Caritas Felices",
        descripcion:"Diseñé y programé junto a mi equipo el frontend del sitio institucional de un comedor comunitario. Implementamos las secciones “Sobre nosotros” y “Contáctanos” utilizando HTML, CSS y JavaScript, priorizando la accesibilidad y el diseño responsivo. Usamos GitHub para la colaboración y control de versiones.",
        imagen:"/projects/caritasFelices-sobreNosotros.png",
        url:"https://caritasfelices.com.ar/sobre-nosotros",
        tags:["HTML", "CSS", "JavaScript", "Git", "Diseño Web"]
    },
    {
        id:3,
        titulo:"Gestión de Sismos (React)",
        descripcion:"En un trabajo universitario colaborativo, desarrollé el frontend completo en React siguiendo el diagrama de secuencia. Realicé la conexión con el backend (API REST), mostrando información dinámica desde la base de datos. También participé en la elaboración de diagramas UML (clases, secuencia, estados, despliegue y componentes) bajo metodología Scrum.",
        imagen:"/projects/caritasFelices-sobreNosotros.png",
        url:"",
        tags:["React", "JavaScript", "API REST", "Git", "Scrum", "Diagramación UML"]
    },
    {
        id:4,
        titulo:"Clon de YouTube (Curso de HTML/CSS)",
        descripcion:"Desarrollé un clon visual del sitio de YouTube utilizando únicamente HTML y CSS. El enfoque estuvo en maquetado, responsividad y organización de elementos visuales, aplicando buenas prácticas de estructura semántica.",
        imagen:"/projects/youtube-HTML.png",
        url:"https://freaknsht.github.io/HTML---Youtube/",
        tags:["HTML", "CSS", "Diseño Web", "Responsivo"]
    },
    {
        id:4,
        titulo:"Clon de Amazon (Curso de JavaScript)",
        descripcion:"Participé en la construcción de un clon funcional de Amazon centrado en la lógica con JavaScript puro. Implementé funcionalidades como carrito de compras, renderizado dinámico de productos y manipulación del DOM, aplicando principios de programación estructurada y buenas prácticas.",
        imagen:"/projects/caritasFelices-sobreNosotros.png",
        url:"https://freaknsht.github.io/HTML---Youtube/",
        tags:["JavaScript", "HTML", "CSS", "DOM", "Lógica de Programación"]
    }
];


export const Projects = () =>{
    return <section id="projects" className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-5xl mx-auto px-4 ">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent text-center">Proyectos Destacados</h2>
            <p className="text-center text-gray-300 text-secondary mb-12 max-w-2xl mx-auto">
                Algunos de los proyectos en los que trabaje:
            </p>
        

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                {projects.map((project,key)=>(
                    <div key={key} className="group bg-card rounded-xl overflow-hidden shadow-xs card-hover rounded-xl border border-white/10 hover:border-blue-500/50 hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246, 0.2)] transition-all flex flex-col justify-between flex-1 ">
                        <div className="h-45 overflow-hidden">
                            <img src={project.imagen} alt={project.titulo} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <div className="p-6">
                            <div className="flex flex-wrap gap-3 mb-4">
                                {project.tags.map((tag)=>(
                                    <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                                    hover:shadow-[0_2px_8px_rgba(59,130,246, 0.1)] transition">
                                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <h3 className="pl-3 text-xl font-bold text-gray-300 mb-2 text-secondary">
                            {project.titulo}
                        </h3>
                        <p className="pl-4 text-gray-400 text-muted-foreground text-sm mb-4">
                            {project.descripcion}
                        </p>
                        
                        <div className="mt-6 flex space-x-3">
                                <a target="_blank" href={project.url} className="mt-auto text-blue-400 hover:text-blue-300 px-2 py-2 transition-colors duration-300 inline-flex items-center gap-2">
                                    <i className="fas fa-external-link-alt"></i>
                                </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>;
}