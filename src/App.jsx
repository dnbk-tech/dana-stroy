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
<section className="relative py-32 px-6 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

    <div>
      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
        Проектируем и строим
        <br />
        современные дома
      </h1>

      <p className="text-lg text-gray-600 mb-10 max-w-xl">
        Level House — девелоперская компания во Владивостоке.
        Реализуем частные дома под ключ с гарантией,
        прозрачной сметой и соблюдением сроков.
      </p>

      <div className="flex gap-6 flex-wrap">
        <a
          href="#projects"
          className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition"
        >
          Смотреть проекты
        </a>

        <a
          href="#form"
          className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition"
        >
          Получить консультацию
        </a>
      </div>
    </div>

    <div className="relative">
      <img
        src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80"
        alt="Современный дом"
        className="rounded-xl shadow-lg"
      />
      <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-blue-100 rounded-xl -z-10"></div>
    </div>

  </div>
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

      <section id="form" className="py-24 px-6 bg-gray-50">

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="max-w-xl mx-auto bg-white p-10 rounded-2xl shadow"
  >

    <h2 className="text-3xl font-light mb-8 text-center">
      Получить консультацию
    </h2>

    <form className="space-y-6">

      <input
        type="text"
        placeholder="Ваше имя"
        className="w-full p-4 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="tel"
        placeholder="Ваш телефон"
        className="w-full p-4 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 rounded-xl transition-all duration-300 shadow-sm hover:shadow-lg"
      >
        Отправить заявку
      </button>

    </form>

  </motion.div>

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