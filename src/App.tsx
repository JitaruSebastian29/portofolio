import { useEffect, useRef, useState } from "react";
import {
  profile,
  experience,
  research,
  education,
  skills,
  certificates,
  outside,
  type Entry,
} from "./content";

const tabs = [
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "research", label: "Research and projects" },
  { id: "skills", label: "Skills" },
  { id: "outside", label: "Outside work" },
] as const;

type TabId = (typeof tabs)[number]["id"];

function isTabId(value: string): value is TabId {
  return tabs.some((tab) => tab.id === value);
}

function Bullets({ points }: { points: string[] }) {
  return (
    <ul className="mt-3 space-y-2">
      {points.map((point) => (
        <li key={point} className="relative pl-5 text-neutral-700">
          <span
            aria-hidden="true"
            className="absolute left-0 top-[0.7em] h-1 w-1 rounded-full bg-neutral-400"
          />
          {point}
        </li>
      ))}
    </ul>
  );
}

function EntryBlock({ entry }: { entry: Entry }) {
  return (
    <article className="mb-10 last:mb-0">
      <div className="flex flex-col gap-x-8 gap-y-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="font-semibold text-neutral-900">{entry.title}</h3>
        <p className="shrink-0 text-sm text-neutral-500">{entry.dates}</p>
      </div>
      <p className="mt-0.5 text-neutral-600">
        {entry.org}
        {entry.place ? `, ${entry.place}` : ""}
      </p>
      <Bullets points={entry.points} />
    </article>
  );
}

function TabPanel({ id, active, children }: { id: TabId; active: TabId; children: React.ReactNode }) {
  return (
    <div
      role="tabpanel"
      id={`panel-${id}`}
      aria-labelledby={`tab-${id}`}
      tabIndex={0}
      hidden={id !== active}
      className="border-t border-neutral-200 pt-10 focus-visible:outline-none"
    >
      {children}
    </div>
  );
}

export default function App() {
  const [active, setActive] = useState<TabId>("experience");
  const tabRefs = useRef(new Map<TabId, HTMLButtonElement>());

  useEffect(() => {
    const fromHash = window.location.hash.slice(1);
    if (isTabId(fromHash)) setActive(fromHash);
  }, []);

  function select(id: TabId, moveFocus = false) {
    setActive(id);
    history.replaceState(null, "", `#${id}`);
    if (moveFocus) tabRefs.current.get(id)?.focus();
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    const keys: Record<string, number> = {
      ArrowRight: 1,
      ArrowLeft: -1,
      Home: 0,
      End: 0,
    };
    if (!(event.key in keys)) return;
    event.preventDefault();
    const current = tabs.findIndex((tab) => tab.id === active);
    let next = current;
    if (event.key === "Home") next = 0;
    else if (event.key === "End") next = tabs.length - 1;
    else next = (current + keys[event.key] + tabs.length) % tabs.length;
    select(tabs[next].id, true);
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900">
          {profile.name}
        </h1>
        <p className="mt-1 text-neutral-600">
          {profile.role}, {profile.location}
        </p>
        <p className="mt-6 max-w-2xl text-neutral-700">{profile.intro}</p>
        <nav className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.github} rel="me noreferrer" target="_blank">
            GitHub
          </a>
          <a href={profile.linkedin} rel="me noreferrer" target="_blank">
            LinkedIn
          </a>
          <a href={profile.cv}>CV (PDF)</a>
        </nav>
      </header>

      <main className="mt-14">
        <div
          role="tablist"
          aria-label="Sections"
          onKeyDown={onKeyDown}
          className="mb-4 flex flex-wrap gap-x-7 gap-y-3"
        >
          {tabs.map((tab) => {
            const selected = tab.id === active;
            return (
              <button
                key={tab.id}
                ref={(node) => {
                  if (node) tabRefs.current.set(tab.id, node);
                  else tabRefs.current.delete(tab.id);
                }}
                type="button"
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={selected}
                aria-controls={`panel-${tab.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => select(tab.id)}
                className={`border-b-2 pb-1 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 ${
                  selected
                    ? "border-neutral-900 font-semibold text-neutral-900"
                    : "border-transparent text-neutral-500 hover:text-neutral-900"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <TabPanel id="experience" active={active}>
          {experience.map((entry) => (
            <EntryBlock key={entry.title + entry.dates} entry={entry} />
          ))}
        </TabPanel>

        <TabPanel id="education" active={active}>
          {education.map((entry) => (
            <EntryBlock key={entry.title} entry={entry} />
          ))}
        </TabPanel>

        <TabPanel id="research" active={active}>
          {research.map((entry) => (
            <EntryBlock key={entry.title} entry={entry} />
          ))}
        </TabPanel>

        <TabPanel id="skills" active={active}>
          <dl className="grid gap-x-10 gap-y-5 sm:grid-cols-2">
            {skills.map((group) => (
              <div key={group.label}>
                <dt className="font-semibold text-neutral-900">{group.label}</dt>
                <dd className="text-neutral-700">{group.items}</dd>
              </div>
            ))}
            <div>
              <dt className="font-semibold text-neutral-900">Certificates</dt>
              <dd className="text-neutral-700">{certificates.join(", ")}</dd>
            </div>
          </dl>
        </TabPanel>

        <TabPanel id="outside" active={active}>
          {outside.map((item) => (
            <article key={item.title} className="mb-8 last:mb-0">
              <h3 className="font-semibold text-neutral-900">{item.title}</h3>
              <Bullets points={item.points} />
            </article>
          ))}
        </TabPanel>
      </main>

      <footer className="mt-16 border-t border-neutral-200 pt-8 text-sm text-neutral-500">
        <p>
          Source on{" "}
          <a href={`${profile.github}/portofolio`} rel="noreferrer" target="_blank">
            GitHub
          </a>
          .
        </p>
      </footer>
    </div>
  );
}
