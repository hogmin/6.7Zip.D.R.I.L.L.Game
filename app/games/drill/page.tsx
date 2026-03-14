import Link from "next/link";

export default function DrillGame() {
  const collagePhotos = [
    { src: "/2.png", alt: "Анімування персонажа", classes: "md:col-span-2 md:row-span-2" },
    { src: "/3.png", alt: "Існуючі персонажі", classes: "md:col-span-1 md:row-span-1" },
    { src: "/4.png", alt: "3D модель ворога", classes: "md:col-span-1 md:row-span-2" },
    { src: "/5.png", alt: "Накладання скелету", classes: "md:col-span-1 md:row-span-1" },
    { src: "/6.png", alt: "Переміщення павука", classes: "md:col-span-2 md:row-span-1" },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <Link href="/games" className="text-orange-500 hover:text-orange-400 flex items-center gap-2">
        ← Назад до ігор
      </Link>
      
      <div className="space-y-6">
        <h1 className="text-5xl md:text-7xl font-black text-white tracking-widest">
          D.R.I.L.L.
        </h1>
        
        <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 shadow-2xl">
          <h3 className="text-2xl font-bold mb-4 text-orange-400">Про гру</h3>
          <p className="text-lg text-slate-300 mb-4 leading-relaxed">
            D.R.I.L.L. — це атмосферний 3D-симулятор космічного буріння. Ви опиняєтесь у ролі незалежного шахтаря... 
            Гра в жанрі roguelike тож вона базуэться на повторювальності перемішаної з випадковістю, завдяки чому виходить унікальний геймплей.
            Наша ціль відремонтувати корабель щоб повернутись на землю. 
            Ми маємо можливість видобувати в ручну ресурси у пробуреному тунелі, який генерується випадковим чином. 
            Маємо відстрілюватись від агресивно налаштованих мешканців. Оскільки ресурсів в одному тунелі нам не вистачить на повну відбудову кораблю, ми маємо дозаправити його, щоб він пробурився далі. 
            Процес переробки кристалів у паливо шумний, що приманює шкідників. 
            Нам потрібно захищати корабель й себе від волн ворогів. 
            Після переробки палива корабель відправляється далі, а цикл повторюється.
          </p>
        </div>
      </div>

      <section>
        <h2 className="text-3xl font-bold border-b border-slate-800 pb-2 mb-8">
          Фото процесу <span className="text-orange-500">Розробки</span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[150px] md:auto-rows-[200px]">
          {collagePhotos.map((photo, index) => (
            <div 
              key={index} 
              className={`relative group overflow-hidden rounded-xl border border-slate-700 bg-slate-800 ${photo.classes}`}
            >
              <img 
                src={photo.src} 
                alt={photo.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="p-4 text-sm font-bold text-white w-full truncate">
                  {photo.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}