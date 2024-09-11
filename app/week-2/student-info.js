import Link from "next/link";
export default function StudentInfo() {
  return (
    <main>
      <h1>Dan Chen</h1>
      <p>
        Link to <Link href="https://github.com/dc8156046">my github</Link>
      </p>
      <p>
        <Link href={"/"}>Back to home</Link>
      </p>
    </main>
  );
}
