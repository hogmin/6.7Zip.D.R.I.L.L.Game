import GameCard from "@/app/Components/GameCard";

export default function Games() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Наші проєкти</h1>
      <GameCard 
        title="d.r.i.l.l."
        imageSrc="/1.png" 
        description="Симулятор космічного шахтаря. Керуйте надпотужним буром, видобувайте рідкісні мінерали з астероїдів, покращуйте свій корабель та виживайте у суворих умовах відкритого космосу."
        link="/games/drill"
      />
    </div>
  );
}