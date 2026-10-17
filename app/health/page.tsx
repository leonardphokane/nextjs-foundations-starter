import { Suspense } from "react";

async function HealthContent() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/1`, { cache: "no-store" });
  const data = await res.json();
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

export default function HealthPage() {
  return (
    <main>
      <h1>Health Check</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <HealthContent />
      </Suspense>
    </main>
  );
}
