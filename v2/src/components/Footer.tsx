import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-10 bg-[var(--color-bg-alt)] py-12 text-center text-[var(--color-text-muted)]">
      <p className="flex items-center justify-center gap-1.5">
        Designed with <Heart size={16} className="text-[var(--color-pink)]" /> by Karthik Babu
      </p>
      <p className="mt-2 text-sm">
        &copy; {new Date().getFullYear()} All Rights Reserved.
      </p>
    </footer>
  );
}
