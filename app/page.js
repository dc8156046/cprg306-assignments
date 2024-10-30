import Link from "next/link";

export default function Page() {
  const assignments = [2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm">
        <h1 className="text-4xl font-bold mb-5">
          CPRG 306: Web Development 2 - Assignments
        </h1>
        <div className="text-lg">
          <ul>
            {assignments.map((assignment) => (
              <li className="hover:text-green-400 hover:underline">
                <Link href={`/week-${assignment}`}>
                  Week {assignment} Assignment
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
