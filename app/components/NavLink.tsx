"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { BaseComponent } from "./types";
import classNames from "classnames";

interface NavLinkProps extends BaseComponent {
  href: string;
}

export default function NavLink({ className, href, children }: NavLinkProps) {
  const segment = useSelectedLayoutSegment();
  const isActive = href === `/${segment}`;

  return (
    <Link
      className={classNames(className)}
      aria-current={isActive ? "page" : undefined}
      href={href}
    >
      {children}
    </Link>
  );
}
