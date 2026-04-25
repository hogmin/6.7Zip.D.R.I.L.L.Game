import TeamMemberCard from "@/app/Components/TeamMemberCard";

/**
 * Сторінка команди сайту "d.r.i.l.l.".
 * * @remarks
 * Відображає перелік учасників команди 6.7Zip,
 * їх ролі у проєкті та короткі описи обов`язків.
 * * @component
 */
export default function Team() {
  const teamMembers = [
    { name: "Степін Сергій", role: "Scrum Master", desc: "Генерує божевільні ідеї, щоб створити ідеальний шедевр жанру." },
    { name: "Артем-Андрій Корнєв", role: "Sound designer / Level designer", desc: "Створює загадкову атмосферу іншопланетних надр, додає атмосферні звуки та насиченість локації.." },
    { name: "Євгеній Лаптєв", role: "3D model artist / Animator", desc: "Насичує планети різноманітною фауною, надає їм імітації життєвої рутини та агресії, анімування гравця та його оточення.." },
    { name: "Михайло Прозапас", role: "Gameplay programmer", desc: "Змушує багатотонний космічний бур слухатися кожного руху гравця, перетворює натискання клавіш на епічне руйнування порід та бездоганну роботу систем корабля.." },
    { name: "Денис Бухтіяров", role: "Enemy AI programmer / Tester", desc: "Навчає місцеву фауну бути хитрою та безжально полювати на вас у темряві, а потім нещадно ламає гру на етапі тестування, щоб вона не зламалася у гравців.." }
  ];

  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="mb-8 text-4xl font-bold" style={{ color: "var(--text-strong)" }}>
        Учасники команди 6.7Zip
      </h1>

      <div className="grid gap-6 md:grid-cols-3">
        {teamMembers.map((member, idx) => (
          <TeamMemberCard
            key={idx}
            name={member.name}
            role={member.role}
            desc={member.desc}
          />
        ))}
      </div>
    </div>
  );
}
