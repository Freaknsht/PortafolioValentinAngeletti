export const About = () => {

    const frontendSkills = ["React","HTML", "CSS", "TailwindCSS", "JavaScript"];

    const backendSkills = ["Django","Python", "Node.js", "PostgreSQL"];


    return <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent text-center">Sobre Mi</h2>

            <dir className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                    Descripcion de mis conocimientos
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                            {frontendSkills.map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                                    hover:shadow-[0_2px_8px_rgba(59,130,2246, 0.2)] transition">
                                                        {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Backend</h3>
                        <div className="flex flex-wrap gap-2">
                            {backendSkills.map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                                    hover:shadow-[0_2px_8px_rgba(59,130,246, 0.2)] transition">
                                                        {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </dir>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4"> Educacion </h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            <strong>Ingenieria en sistemas de Informacion</strong> - UTN 
                            (2019 - Actualidad)
                        </li>
                        <ul >
                            <li><strong>Cursos Relevantes</strong></li>
                            <li className="list-disc list-inside text-gray-300 space-y-2">2023 | Introduccion al desarrollo Backend con NodeJs</li>
                            <li className="list-disc list-inside text-gray-300 space-y-2">2022 | SQL: Consultas basicas a complejas</li>
                        </ul>
                    </ul>
                </div>
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4"> Experiencia de Trabajo </h3>
                    <div className="space-y-4 text-gray-300">
                        <div>
                            <h4 className="font-semibold">2024 | Cofradia de la merced</h4>
                            <ul className="list-disc list-inside text-gray-300 space-y-1">
                                <li>
                                    Implementación de envío automático de correos, filtrado de datos y generación de gráficos para la toma de decisiones.
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold">2024 | Comedor “Caritas felices</h4>
                            <ul className="list-disc list-inside text-gray-300 space-y-1">
                                <li>
                                    Desarrolle junto a un equipo las seccion "Sobre Nosotros" para una organización sin fines de lucro, brindando información sobre su labor.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}