import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <h1>Welcome to YouTube Favs</h1>
      <p>Your favourite place to store your favourite YouTube videos.</p>
      <Link href="/favs/search">Search</Link>
    </div>
  );
}
