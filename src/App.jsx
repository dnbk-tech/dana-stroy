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
<section id="projects" className="bg-white py-40 px-6">

  <div className="max-w-6xl mx-auto space-y-40">

    {/* PROJECT 1 */}
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="grid md:grid-cols-2 gap-16 items-center"
    >
      <div className="relative overflow-hidden rounded-2xl">
        <img
          src={residence1}
          className="w-full h-[600px] object-cover transition duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div>
        <h2 className="text-5xl font-light mb-8">
          Residence 210
        </h2>

        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          Современная резиденция площадью 210 м²
          с панорамным остеклением и архитектурной подсветкой.
        </p>

        <p className="text-2xl font-medium mb-8">
          от 10 500 000 ₽
        </p>

        <a
          href="#form"
          className="inline-block border border-black px-8 py-3 rounded-full hover:bg-black hover:text-white transition-all duration-300"
        >
          Запросить консультацию
        </a>
      </div>
    </motion.div>


    {/* PROJECT 2 */}
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="grid md:grid-cols-2 gap-16 items-center"
    >
      <div className="order-2 md:order-1">
        <h2 className="text-5xl font-light mb-8">
          Residence 160
        </h2>

        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          Минималистичная архитектура с продуманной планировкой
          и приватным двором.
        </p>

        <p className="text-2xl font-medium mb-8">
          от 7 800 000 ₽
        </p>

        <a
          href="#form"
          className="inline-block border border-black px-8 py-3 rounded-full hover:bg-black hover:text-white transition-all duration-300"
        >
          Запросить консультацию
        </a>
      </div>

      <div className="relative overflow-hidden rounded-2xl order-1 md:order-2">
        <img
          src={residence2}
          className="w-full h-[600px] object-cover transition duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
    </motion.div>

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
<section className="bg-gray-50 py-48 px-6">

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="max-w-5xl mx-auto text-center"
  >

    <h2 className="text-6xl md:text-7xl font-light leading-tight mb-16 text-gray-900">
      Пространство<br />
      для жизни нового уровня
    </h2>

    <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
      Дана Строй — девелоперская компания,
      создающая современные частные резиденции
      с продуманной архитектурой и инженерией.
    </p>

  </motion.div>

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
<section id="form" className="py-40 px-6 bg-white">

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="max-w-3xl mx-auto text-center"
  >

    <h2 className="text-5xl font-light mb-16 text-gray-900">
      Обсудить проект
    </h2>

    <form className="space-y-8 text-left">

      <div>
        <input
          type="text"
          placeholder="Ваше имя"
          className="w-full border-b border-gray-300 py-4 text-lg focus:outline-none focus:border-black transition"
        />
      </div>

      <div>
        <input
          type="tel"
          placeholder="Ваш телефон"
          className="w-full border-b border-gray-300 py-4 text-lg focus:outline-none focus:border-black transition"
        />
      </div>

      <button
        type="submit"
        className="mt-10 border border-black px-10 py-4 rounded-full hover:bg-black hover:text-white transition-all duration-300"
      >
        Отправить заявку
      </button>

    </form>

  </motion.div>

</section>
<footer className="bg-gray-100 py-20 px-6">
  <div className="max-w-6xl mx-auto text-center text-gray-600 text-sm">
    © 2026 Дана Строй — Владивосток
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