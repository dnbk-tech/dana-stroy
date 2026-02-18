export default function App() {
  return (
    <div className="font-sans bg-black text-white">

      {/* HEADER */}
      <header className="fixed w-full z-50 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-xl font-bold tracking-widest text-yellow-500">
            ДАНА СТРОЙ
          </h1>
          <a
            href="https://wa.me/79268163949"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-yellow-500 text-yellow-500 px-5 py-2 rounded-lg hover:bg-yellow-500 hover:text-black transition"
          >
            WhatsApp
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        className="h-screen flex items-center justify-center text-center px-6 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1974&auto=format&fit=crop')",
        }}
      >
        <div className="bg-black/70 p-10 rounded-2xl max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-yellow-500">
            Строительство и ремонт во Владивостоке
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-300">
            Надёжные строительные решения под ключ. Работаем официально, по договору и строго в срок.
          </p>
          <a
            href="https://wa.me/79268163949"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-500 text-black px-8 py-4 rounded-xl text-lg font-semibold hover:bg-yellow-400 transition"
          >
            Получить консультацию
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h3 className="text-4xl font-bold text-yellow-500 mb-4">
            Наши услуги
          </h3>
          <p className="text-gray-400">
            Полный комплекс строительных и ремонтных работ
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="bg-zinc-900 p-8 rounded-2xl border border-yellow-500/20 hover:border-yellow-500 transition">
            <h4 className="text-2xl font-semibold mb-4 text-yellow-500">
              Строительство домов
            </h4>
            <p className="text-gray-400">
              Частные дома под ключ — от фундамента до внутренней отделки.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl border border-yellow-500/20 hover:border-yellow-500 transition">
            <h4 className="text-2xl font-semibold mb-4 text-yellow-500">
              Ремонт квартир
            </h4>
            <p className="text-gray-400">
              Капитальный и косметический ремонт любой сложности.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl border border-yellow-500/20 hover:border-yellow-500 transition">
            <h4 className="text-2xl font-semibold mb-4 text-yellow-500">
              Фасады и кровля
            </h4>
            <p className="text-gray-400">
              Монтаж, утепление и отделка фасадов с гарантией качества.
            </p>
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="py-24 px-6 bg-zinc-950 text-center">
        <h3 className="text-4xl font-bold text-yellow-500 mb-12">
          Почему выбирают нас
        </h3>

        <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-300">
          <p>✔ Более 10 лет опыта</p>
          <p>✔ Работаем по официальному договору</p>
          <p>✔ Строгое соблюдение сроков</p>
          <p>✔ Прозрачная смета без скрытых платежей</p>
          <p>✔ Гарантия на все виды работ</p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-24 px-6 text-center bg-black">
        <h3 className="text-4xl font-bold text-yellow-500 mb-6">
          Свяжитесь с нами
        </h3>
        <p className="text-gray-400 mb-8">
          Владивосток | Телефон / WhatsApp: +7 (926) 816-3949
        </p>
        <a
          href="https://wa.me/79268163949"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-500 text-black px-8 py-4 rounded-xl text-lg font-semibold hover:bg-yellow-400 transition"
        >
          Написать в WhatsApp
        </a>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center text-sm text-gray-600 border-t border-yellow-500/20">
        © 2026 Дана Строй. Владивосток. Все права защищены.
      </footer>

    </div>
  );
}
