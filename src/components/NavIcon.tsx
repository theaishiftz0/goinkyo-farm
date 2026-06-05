import type { ReactNode } from "react";

type NavIconName = "about" | "diary" | "crops" | "sales" | "contact";

type NavIconProps = {
  name: NavIconName;
  className?: string;
};

const paths: Record<NavIconName, ReactNode> = {
  about: (
    <>
      <path d="M4.5 18.5V9.8L12 4l7.5 5.8v8.7" />
      <path d="M9.5 18.5v-5h5v5" />
    </>
  ),
  diary: (
    <>
      <path d="M6 5.5h8a4 4 0 0 1 4 4v9H8a4 4 0 0 1-4-4v-7a2 2 0 0 1 2-2Z" />
      <path d="M8 9.5h6" />
      <path d="M8 13h5" />
    </>
  ),
  crops: (
    <>
      <path d="M12 19V8" />
      <path d="M12 10c-3.2 0-5.5-2.1-6-5 3.2 0 5.5 2.1 6 5Z" />
      <path d="M12 13c3.2 0 5.5-2.1 6-5-3.2 0-5.5 2.1-6 5Z" />
    </>
  ),
  sales: (
    <>
      <path d="M6.5 9.5h11l-1.2 8h-8.6l-1.2-8Z" />
      <path d="M9 9.5a3 3 0 0 1 6 0" />
      <path d="M9.5 13h5" />
    </>
  ),
  contact: (
    <>
      <path d="M4.5 7.5h15v10h-15z" />
      <path d="m5 8 7 5 7-5" />
    </>
  )
};

export default function NavIcon({ name, className = "size-4" }: NavIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      focusable="false"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.9"
      viewBox="0 0 24 24"
    >
      {paths[name]}
    </svg>
  );
}
