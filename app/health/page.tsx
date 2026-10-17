// app/health/page.tsx
export const runtime = "nodejs"; // or "edge"
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function HealthPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/1`, { cache: "no-store" });
  const data = await res.json();

  return (
    <main>
      <h1>Health Check</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}
