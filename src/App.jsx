import { motion } from "framer-motion";
import residence1 from "./assets/residence1.jpg";
import residence2 from "./assets/residence2.jpg";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `Здравствуйте! Меня зовут ${name}. Мой номер: ${phone}. Хочу консультацию по строительству.`;
    const url = `https://wa.me/79268163949?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
 <div className="bg-white text-gray-800 font-sans">

      {/* HEADER */}
<header className="sticky top-0 bg-white border-b border-gray-200 z-50">
  <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

    <div>
      <div className="text-xl font-bold text-gray-900">
        Level House
      </div>
      <div className="text-xs text-gray-500">
        Строительная компания
      </div>
    </div>

    <div className="hidden md:flex gap-8 text-gray-600">
      <a href="#projects" className="hover:text-blue-600 transition">Проекты</a>
      <a href="#form" className="hover:text-blue-600 transition">Заявка</a>
      <a href="https://wa.me/79268163949" className="hover:text-blue-600 transition">WhatsApp</a>
    </div>

    <a
      href="#form"
      className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
    >
      Связаться
    </a>

  </div>
</header>

      {/* HERO */}
<section className="relative h-[100vh] flex items-center justify-center overflow-hidden">

  {/* Фон */}
  <motion.img
    src={residence1}
    initial={{ scale: 1.1 }}
    animate={{ scale: 1 }}
    transition={{ duration: 4 }}
    className="absolute inset-0 w-full h-full object-cover"
    alt="Дана Строй"
  />

  {/* Градиент */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>

  {/* Контент */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="relative text-center text-white px-6"
  >
    <h1 className="text-6xl md:text-7xl font-light tracking-wide mb-8">
      Архитектура<br />нового уровня
    </h1>

    <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
      Дана Строй — современная девелоперская компания.
      Проектируем и реализуем частные резиденции премиум-класса.
    </p>

    <a
      href="#projects"
      className="inline-block border border-white px-10 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-300"
    >
      Смотреть проекты
    </a>
  </motion.div>

</section>

   {/* PROJECTS */}
<section id="projects" className="py-32 px-6 bg-white">
  <div className="max-w-6xl mx-auto space-y-32">

    {/* Проект 1 */}
    <div className="grid md:grid-cols-2 gap-16 items-center">
      <img
       src={residence1}
        className="w-full h-[500px] object-cover"
      />

      <div>
        <h2 className="text-4xl font-light mb-6">
          LH Residence 210
        </h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Частная резиденция площадью 210 м².
          Современная архитектура, панорамное остекление,
          индивидуальные планировочные решения.
        </p>
        <p className="text-black font-medium">
          от 10 500 000 ₽
        </p>
      </div>
    </div>

    {/* Проект 2 */}
    <div className="grid md:grid-cols-2 gap-16 items-center md:flex-row-reverse">
      <img
        src={residence2}
        className="w-full h-[500px] object-cover"
      />

      <div>
        <h2 className="text-4xl font-light mb-6">
          LH Residence 160
        </h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Архитектурный проект с акцентом на минимализм
          и функциональность пространства.
        </p>
        <p className="text-black font-medium">
          от 7 800 000 ₽
        </p>
      </div>
    </div>

  </div>
</section>


{/* TRUST BLOCK */}
<section className="py-28 px-6 bg-white">
  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Почему выбирают Level House
      </h2>
      <p className="text-gray-600">
        Мы строим не просто дома — мы создаём надёжные проекты
      </p>
    </div>

    <div className="grid md:grid-cols-4 gap-12 text-center">

      <div>
        <div className="w-16 h-16 mx-auto mb-6 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 text-2xl">
          ✓
        </div>
        <h3 className="font-semibold text-lg mb-2">
          Договор
        </h3>
        <p className="text-gray-600 text-sm">
          Работаем официально с прозрачными условиями
        </p>
      </div>

      <div>
        <div className="w-16 h-16 mx-auto mb-6 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 text-2xl">
          ✓
        </div>
        <h3 className="font-semibold text-lg mb-2">
          Фиксированная смета
        </h3>
        <p className="text-gray-600 text-sm">
          Стоимость не меняется в процессе строительства
        </p>
      </div>

      <div>
        <div className="w-16 h-16 mx-auto mb-6 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 text-2xl">
          ✓
        </div>
        <h3 className="font-semibold text-lg mb-2">
          Контроль сроков
        </h3>
        <p className="text-gray-600 text-sm">
          Строго соблюдаем график работ
        </p>
      </div>

      <div>
        <div className="w-16 h-16 mx-auto mb-6 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 text-2xl">
          ✓
        </div>
        <h3 className="font-semibold text-lg mb-2">
          Гарантия
        </h3>
        <p className="text-gray-600 text-sm">
          Даём гарантию на выполненные работы
        </p>
      </div>

    </div>

  </div>
</section>
   
   {/* PHILOSOPHY */}
<section className="py-40 px-6 bg-gray-50 text-center">
  <div className="max-w-4xl mx-auto">

    <h2 className="text-5xl font-light mb-12 leading-tight">
      Мы создаём пространство,<br />
      в котором хочется жить
    </h2>

    <p className="text-xl text-gray-600 leading-relaxed">
      Level House — девелоперская компания,
      специализирующаяся на современных частных резиденциях.
      Мы объединяем архитектуру, инженерные решения
      и безупречное исполнение.
    </p>

  </div>
</section>


      {/* ADVANTAGES */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-center">

          <div>
            <p className="text-4xl font-bold text-blue-600 mb-2">10+</p>
            <p className="text-gray-700">лет опыта</p>
          </div>

          <div>
            <p className="text-4xl font-bold text-blue-600 mb-2">50+</p>
            <p className="text-gray-700">реализованных проектов</p>
          </div>

          <div>
            <p className="text-4xl font-bold text-blue-600 mb-2">100%</p>
            <p className="text-gray-700">гарантия качества</p>
          </div>

        </div>
      </section>

      {/* CALL TO ACTION */}
<section className="py-28 px-6 bg-blue-600 text-white text-center">
  <div className="max-w-4xl mx-auto">

    <h2 className="text-4xl font-bold mb-6">
      Получите расчёт стоимости вашего дома
    </h2>

    <p className="text-lg mb-10 text-blue-100">
      Бесплатная консультация и предварительная смета
      в течение 24 часов.
    </p>

    <a
      href="#form"
      className="bg-white text-blue-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
    >
      Оставить заявку
    </a>

  </div>
</section>

      {/* FORM */}
      <section id="form" className="py-20 px-6">
        <div className="max-w-2xl mx-auto bg-white border rounded-xl p-10 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Получить консультацию
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
  <input
    type="text"
    required
    className="peer w-full p-4 border border-gray-300 rounded-xl bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-transparent"
    placeholder="Ваше имя"
  />
  <label className="absolute left-4 top-4 text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-600 bg-white px-1">
    Ваше имя
  </label>
</div>

            <input
              type="tel"
              placeholder="Ваш телефон"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border px-4 py-3 rounded-lg"
            />

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 rounded-xl transition-all duration-300 shadow-sm hover:shadow-lg">
                Отправить заявку
        </button>
          </form>
        </div>
      </section>
{/* FOOTER */}
<footer className="bg-gray-900 text-gray-400 py-14 px-6">
  <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

    <div>
      <h3 className="text-white font-semibold mb-4">
        Level House
      </h3>
      <p className="text-sm">
        Строительство современных домов под ключ во Владивостоке.
      </p>
    </div>

    <div>
      <h4 className="text-white font-semibold mb-4">
        Навигация
      </h4>
      <div className="space-y-2 text-sm">
        <a href="#projects" className="block hover:text-white transition">Проекты</a>
        <a href="#form" className="block hover:text-white transition">Заявка</a>
      </div>
    </div>

    <div>
      <h4 className="text-white font-semibold mb-4">
        Контакты
      </h4>
      <p className="text-sm mb-2">Владивосток</p>
      <p className="text-sm">+7 (926) 816-3949</p>
    </div>

  </div>

  <div className="text-center text-xs text-gray-500 mt-12">
    © 2026 Level House. Все права защищены.
  </div>
</footer>
{/* FLOATING WHATSAPP */}
<a
  href="https://wa.me/79268163949"
  className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
>
  💬
</a>
    </div>
  );
}