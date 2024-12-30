import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-600 via-neutral-700 to-neutral-950 text-white">
      <section className="flex flex-col items-center justify-center text-center p-6">
        <section className="mb-12">
          <h2 className="text-4xl font-extrabold my-10">
            Welcome to FitLife Tracker
          </h2>
          <p className="text-lg">
            Stay on top of your fitness goals with our all-in-one tracker for
            workouts, diet, and progress.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
          <Link
            href="/workouts"
            className="p-6 bg-black bg-opacity-70 rounded-lg transform hover:scale-105 transition-all"
          >
            <div>
              <h3 className="text-2xl font-bold mb-2">Workouts</h3>
              <p>Plan, track, and crush your workout routines.</p>
            </div>
          </Link>

          <Link
            href="/diet"
            className="p-6 bg-black bg-opacity-70 rounded-lg transform hover:scale-105 transition-all"
          >
            <div>
              <h3 className="text-2xl font-bold mb-2">Diet</h3>
              <p>Monitor your meals and achieve your nutrition goals.</p>
            </div>
          </Link>

          <Link
            href="/progress"
            className="p-6 bg-black bg-opacity-70 rounded-lg transform hover:scale-105 transition-all"
          >
            <div>
              <h3 className="text-2xl font-bold mb-2">Progress</h3>
              <p>Track your progress and stay motivated.</p>
            </div>
          </Link>
        </section>
      </section>
      <section className=""></section>
    </div>
  );
}
