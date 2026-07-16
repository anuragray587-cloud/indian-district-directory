import Link from "next/link";
import { Compass } from "lucide-react";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <span className="flex h-12 w-12 items-center justify-center rounded-md border border-rule bg-paper-card text-gold-600 dark:border-rule-dark dark:bg-night-card dark:text-gold-400">
        <Compass className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
      </span>
      <p className="mt-5 font-mono text-xs uppercase tracking-[0.2em] text-gold-600 dark:text-gold-400">
        404 &middot; Not on the map
      </p>
      <h1 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-ink dark:text-ink-invert">
        This entry isn&rsquo;t in the index.
      </h1>
      <p className="mt-3 text-ink-soft dark:text-ink-invert-soft">
        The state, union territory, or district you&rsquo;re looking for doesn&rsquo;t
        exist, or the address was mistyped.
      </p>
      <Link
        href="/"
        className="mt-7 inline-flex items-center justify-center rounded-md border border-gold-500 bg-gold-50 px-5 py-2.5 font-mono text-xs uppercase tracking-wide text-gold-700 transition-colors hover:bg-gold-100 dark:border-gold-400 dark:bg-gold-500/10 dark:text-gold-400 dark:hover:bg-gold-500/20"
      >
        Back to the full index
      </Link>
    </section>
  );
}
