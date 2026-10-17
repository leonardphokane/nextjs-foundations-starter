'use client';
import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="flex gap-4 p-4 bg-gray-100">
      <Link href="/">Home</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/settings">Settings</Link>
      <Link href="/about">About</Link>
      <Link href="/health">Health</Link>
    </nav>
  );
}
