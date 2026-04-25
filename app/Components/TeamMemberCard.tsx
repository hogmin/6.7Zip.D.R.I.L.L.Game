import { TeamMemberProps } from "../types/TeamMemberCard";
/**
 * Компонент картки члена команди (TeamMemberCard) сайту "d.r.i.l.l."
 * * @remarks
 * Містить інформацію про поточну команду розробників гри,
 * їхні обов`язки і тд.
 * @param props - Властивості компонента
 * @param props.name - Ім`я розробника
 * @param props.role - Роль в загальній розробці
 * @param props.desc - Опис обов`язків
 * * @component
 */
export default function TeamMemberCard({ name, role, desc }: TeamMemberProps) {
  return (
    <div className="theme-card rounded-[1.5rem] p-6 text-center">
      <div
        className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full border-2"
        style={{ background: "var(--surface-strong)", borderColor: "var(--border)" }}
      >
        <span className="text-3xl">🧑‍🚀</span>
      </div>

      <h3 className="text-xl font-bold" style={{ color: "var(--text-strong)" }}>
        {name}
      </h3>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em]" style={{ color: "var(--accent)" }}>
        {role}
      </p>
      <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
        {desc}
      </p>
    </div>
  );
}
