"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navigation.module.css";

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav>
      <ul>
        <li>
          <Link
            className={`link ${pathname === "/" ? styles.active : ""}`}
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === "/settings" ? styles.active : ""}`}
            href="/settings"
          >
            Settings
          </Link>
        </li>
      </ul>
    </nav>
  );
}
