// app/health/page.tsx
export const dynamic = "force-dynamic";   // supported in Turbopack

export default async function HealthPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/1`, {
    cache: "no-store",   // ensures runtime fetch
  });
  const data = await res.json();

  return (
    <main>
      <h1>Health Check</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}
