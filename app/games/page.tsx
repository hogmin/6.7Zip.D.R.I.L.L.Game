import GameCard from "@/app/Components/GameCard";

/**
 * Сторінка ігор сайту "d.r.i.l.l.".
 * * @remarks
 * Містить перелік доступних ігрових проєктів команди
 * та відображає їх у вигляді карток з коротким описом.
 * * @component
 */
export default function Games() {
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <h1 className="text-4xl font-bold" style={{ color: "var(--text-strong)" }}>
        Наші проєкти
      </h1>
      <GameCard
        title="d.r.i.l.l."
        imageSrc="/1.png"
        description="Симулятор космічного шахтаря. Керуйте надпотужним буром, видобувайте рідкісні мінерали з астероїдів, покращуйте свій корабель та виживайте у суворих умовах відкритого космосу."
        link="/games/drill"
      />
    </div>
  );
}
