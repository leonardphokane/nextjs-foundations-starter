export default async function HealthPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/todos/1`);
  const data = await res.json();

  return (
    <div>
      <h1 className="text-xl font-bold">Health Check</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
