import { ViewTransition } from "react";

// Root-level template.tsx remounts on every top-level navigation (unlike
// layout.tsx, which persists), so this is what makes page content animate
// in on route change instead of appearing instantly. Header/Footer live in
// layout.tsx and stay outside this wrapper, so they never move.
export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransition enter="page-enter" exit="page-exit" default="none">
      {children}
    </ViewTransition>
  );
}
