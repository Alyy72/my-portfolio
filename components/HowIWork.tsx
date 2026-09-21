import { howIWork } from "@/lib/case-studies";
import { Reveal } from "@/components/Reveal";

export function HowIWork() {
  return (
    <section id="method" className="relative px-4 py-20 sm:px-6 sm:py-28">
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-700">
            Method
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            How I work
          </h2>
        </Reveal>
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {howIWork.map((item) => (
            <li
              key={item.step}
              className="rounded-3xl border border-black/10 bg-white/70 p-5"
            >
              <p className="font-mono text-xs text-[#004741]">{item.step}</p>
              <h3 className="mt-2 text-lg font-semibold text-neutral-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
