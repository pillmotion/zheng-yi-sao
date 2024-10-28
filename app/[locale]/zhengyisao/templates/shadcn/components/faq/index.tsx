import { Item, Section } from "@/types/landing";

export default function ({ section }: { section: Section }) {
  if (section.disabled) {
    return;
  }

  return (
    <section className="bg-gradient-to-t from-zinc-50 to-white dark:from-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl text-center">
            {section.title}
          </h2>
          <div className="mt-4 text-center text-sm font-semibold tracking-wide">
            {section.description}
          </div>
          <div className="space-y-4 mt-8">
            {section.items?.map((item: Item, idx: number) => (
              <div
                key={idx}
                className="rounded-lg shadow-sm border p-4 flex items-center justify-between"
              >
                <span className="font-medium">{item.title}</span>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-500 hover:text-primary-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
