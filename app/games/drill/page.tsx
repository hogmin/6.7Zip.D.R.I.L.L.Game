import Link from "next/link";

/**
 * Сторінка гри `D.R.I.L.L.`.
 * * @remarks
 * Відображає розширений опис основного проєкту,
 * а також фотогалерею з матеріалами процесу розробки.
 * * @component
 */
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
      <Link href="/games" className="flex items-center gap-2 font-medium" style={{ color: "var(--accent)" }}>
        ← Назад до ігор
      </Link>

      <div className="space-y-6">
        <h1 className="text-5xl md:text-7xl font-black tracking-widest" style={{ color: "var(--text-strong)" }}>
          D.R.I.L.L.
        </h1>

        <div className="theme-card-strong rounded-[1.75rem] p-8">
          <h3 className="mb-4 text-2xl font-bold" style={{ color: "var(--accent)" }}>
            Про гру
          </h3>
          <p className="mb-4 text-lg leading-relaxed" style={{ color: "var(--muted-strong)" }}>
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
        <h2 className="mb-8 border-b pb-2 text-3xl font-bold" style={{ borderColor: "var(--border)", color: "var(--text-strong)" }}>
          Фото процесу <span className="text-orange-500">Розробки</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[150px] md:auto-rows-[200px]">
          {collagePhotos.map((photo, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl border ${photo.classes}`}
              style={{ background: "var(--surface-strong)", borderColor: "var(--border)" }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="w-full truncate p-4 text-sm font-bold text-white">
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
