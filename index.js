import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="bg-[#1F3B4D] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">ACCE</h1>
        <p className="text-xl md:text-2xl mb-6">Accedé a oportunidades. Nosotros te acompañamos.</p>
        <button className="bg-[#2A9D8F] px-6 py-2 rounded text-white">Contactanos</button>
      </section>

      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Quiénes somos</h2>
        <p className="text-lg">
          Somos una consultora especializada en compras, contrataciones y financiamiento estratégico. Acompañamos a proveedores, empresas y organizaciones para que puedan participar de procesos públicos y privados con seguridad, estrategia y respaldo.
        </p>
      </section>

      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center">Nuestros servicios</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Inscripción como proveedor",
              "Análisis de pliegos y armado de ofertas",
              "Asistencia legal, técnica y administrativa",
              "Seguimiento de licitaciones",
              "Gestión de financiamiento",
              "Evaluación de riesgos y oportunidades",
            ].map((servicio, index) => (
              <div key={index} className="rounded-2xl shadow-md p-6 text-center bg-white text-base font-medium">
                {servicio}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Contacto</h2>
        <p className="mb-6">¿Querés que te ayudemos? Escribinos por WhatsApp o mandanos tu consulta.</p>
        <div className="flex justify-center gap-4">
          <a href="https://wa.me/5491112345678" className="bg-[#2A9D8F] text-white px-4 py-2 rounded">WhatsApp</a>
          <a href="mailto:info@acce.com" className="border border-gray-400 px-4 py-2 rounded">Enviar mensaje</a>
        </div>
      </section>
    </main>
  );
}
