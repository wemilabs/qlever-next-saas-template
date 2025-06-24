import Link from "next/link";

interface LogoProps {
  href?: string;
  className?: string;
}

export function Logo({ href, className }: LogoProps) {
  return (
    <Link href={href ?? "/"} className={`flex ${className}`}>
      <h1 className="text-xl font-mono font-bold">
        qlever
        <span className="bg-gradient-to-r from-slate-600 to-slate-500 bg-clip-text text-transparent">
          .next
        </span>
      </h1>
    </Link>
  );
}
