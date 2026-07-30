"use client";

import Link from "next/link";
import {
  Compass,
  Search,
  Map,
  Building2,
  Landmark,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Navbar() {
const [isOpen, setIsOpen] = useState(false);
const navItems = [
  { name: "Home", href: "/" },
  { name: "States", href: "/states" },
  { name: "Union Territories", href: "/union-territories" },
  { name: "Districts", href: "/districts" },
  { name: "India Map", href: "/india-map" },
  { name: "About", href: "/about" },
];
  return (
<header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-xl shadow-sm supports-[backdrop-filter]:bg-white/80">
<div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-3 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-500"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-sm border border-rule bg-paper-card text-gold-600 transition-colors group-hover:border-gold-500 dark:border-rule-dark dark:bg-night-card dark:text-gold-400">
            <Compass className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
          </span>
<div className="flex flex-col leading-none">
  <span className="text-xl font-extrabold tracking-tight text-slate-900">
    Indian District Directory
  </span>
  <span className="hidden sm:block text-xs text-slate-500">
    India's Complete District Information Portal
  </span>
</div>
        </Link>

        <nav aria-label="Primary">
 <div className="hidden items-center gap-7 lg:flex">
  {navItems.map((item) => (
    <Link
      key={item.name}
      href={item.href}
      className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600 hover:scale-105 transition-all duration-200"
    >
      {item.name}
    </Link>
  ))}
</div>

<div className="flex items-center gap-3">
  <ThemeToggle />
<button
  onClick={() => setIsOpen(!isOpen)}
  className="rounded-xl p-2 transition hover:bg-slate-100 hover:shadow-sm lg:hidden"
  aria-label="Toggle Menu"
>
  {isOpen ? (
    <X className="h-5 w-5" />
  ) : (
    <Menu className="h-5 w-5" />
  )}
</button>
</div>
        </nav>
      </div>
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="border-t border-slate-200 bg-white/95 backdrop-blur-xl lg:hidden"
    >
       <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={() => setIsOpen(false)}
            className="rounded-xl px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </motion.div>
  )}
</AnimatePresence>
    </header>
  );
}
