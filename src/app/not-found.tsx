import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col mx-auto items-center justify-center min-h-screen bg-sec space-y-10">
      <h1 className="md:text-6xl lg:text-7xl xl:text-8xl  text-4xl font-semibold  ">404 - Page Not Found</h1>
      <p className="mt-4 text-lg text-gray-600">The page you're looking for doesn't exist.</p>
      <Link href="/" className="mt-6 text-white bg-primary py-2 px-6 hover:bg-blue-600">
        Go back to Homepage
      </Link>
    </div>
  );
}

