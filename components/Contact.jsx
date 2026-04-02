export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Contáctame
        </h2>

        <p className="text-gray-400 mb-8">
          ¿Tienes una idea, proyecto o quieres trabajar conmigo?
          Escríbeme y lo hacemos realidad 🚀
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">

          <a
            href="mailto:tuemail@gmail.com"
            className="px-6 py-3 bg-white text-black rounded-xl font-semibold hover:scale-105 transition"
          >
            Enviar Email
          </a>

          <a
            href="https://github.com/pjosed"
            target="_blank"
            className="px-6 py-3 border border-white rounded-xl font-semibold hover:bg-white hover:text-black transition"
          >
            GitHub
          </a>

        </div>

      </div>
    </section>
  );
}