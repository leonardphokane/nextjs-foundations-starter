// app/page.tsx
export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 dark:bg-black p-8">
      <h1 className="text-4xl font-bold mb-4 text-black dark:text-zinc-50">
        Next.js Foundations Starter
      </h1>
      <p className="text-lg text-gray-700 dark:text-zinc-400 mb-6 max-w-xl text-center">
        This project scaffolds all required routes and Tailwind setup for the Foundations phase.
        Use the navigation below to explore the placeholder pages.
      </p>

      <nav>
        <ul className="space-y-3 text-center">
          <li><a href="/dashboard" className="text-blue-600 hover:underline">Dashboard</a></li>
          <li><a href="/settings" className="text-blue-600 hover:underline">Settings</a></li>
          <li><a href="/about" className="text-blue-600 hover:underline">About</a></li>
          <li><a href="/health" className="text-blue-600 hover:underline">Health Check</a></li>
        </ul>
      </nav>
    </main>
  );
}
