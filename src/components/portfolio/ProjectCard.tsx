import type { ReactNode } from "react";
import { ArrowUpRight, Github } from "lucide-react";

export function CardBlock({ label, children }: { label: string; children: ReactNode }) {
  return (
    <p className="text-sm leading-relaxed text-card-foreground/70">
      <span className="font-semibold text-card-foreground">{label}: </span>
      {children}
    </p>
  );
}

export function TechLine({ items }: { items: string[] }) {
  return (
    <p className="text-xs font-medium uppercase tracking-wider text-card-foreground/50">
      {items.join(" · ")}
    </p>
  );
}

export function ActionLink({
  href,
  children,
  variant = "outline",
}: {
  href: string;
  children: ReactNode;
  variant?: "outline" | "solid";
}) {
  const base =
    "inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors";
  const styles =
    variant === "solid"
      ? "bg-primary text-primary-foreground hover:bg-primary/90"
      : "border border-card-foreground/20 bg-card text-card-foreground hover:bg-card-foreground/5";
  return (
    <a href={href} target="_blank" rel="noreferrer" className={`${base} ${styles}`}>
      {children}
    </a>
  );
}

export function GithubLink({ href }: { href: string }) {
  return (
    <ActionLink href={href} variant="solid">
      <Github className="h-4 w-4" aria-hidden="true" />
      View on GitHub
    </ActionLink>
  );
}

export function LiveLink({ href, label }: { href: string; label: string }) {
  return (
    <ActionLink href={href} variant="solid">
      {label}
      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
    </ActionLink>
  );
}

export function TableauLink({ href, label = "View Dashboard" }: { href: string; label?: string }) {
  return (
    <ActionLink href={href} variant="solid">
      <svg
        className="h-4 w-4"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M11.2 0h1.5v3.4h-1.5V0zM8.4 2.1h1.4v5H8.4v-5zm5.8 0h1.4v5h-1.4v-5zM5.6 4.8H7v3.7H5.6V4.8zm11.8 0h1.4v3.7h-1.4V4.8zM2.9 7.6h1.4v2.6H2.9V7.6zm17.7 0h1.4v2.6h-1.4V7.6zm-9.3.4h1.5v3.4h-1.5V8zM11.2 10.8h1.5v3.4h-1.5v-3.4zM8.4 12.9h1.4v5H8.4v-5zm5.8 0h1.4v5h-1.4v-5zM5.6 15.5H7v3.7H5.6v-3.7zm11.8 0h1.4v3.7h-1.4v-3.7zM2.9 15.8h1.4v2.6H2.9v-2.6zm17.7 0h1.4v2.6h-1.4v-2.6zm-9.3 4.6h1.5V24h-1.5v-3.6z" />
      </svg>
      {label}
    </ActionLink>
  );
}

export function ProjectCard({
  title,
  tech,
  children,
  actions,
}: {
  title: string;
  tech: string[];
  children: ReactNode;
  actions: ReactNode;
}) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-[0_8px_40px_-12px_var(--color-primary)]/20 sm:p-8">
      <h3 className="text-lg font-semibold tracking-tight text-card-foreground sm:text-xl">
        {title}
      </h3>
      <div className="mt-2">
        <TechLine items={tech} />
      </div>
      <div className="mt-5 flex flex-1 flex-col gap-4">{children}</div>
      <div className="mt-6 flex flex-wrap gap-3 border-t border-card-foreground/10 pt-5">
        {actions}
      </div>
    </article>
  );
}
