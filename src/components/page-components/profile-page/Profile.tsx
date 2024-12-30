import React from "react";
import Image from "next/image";
interface UserProfile {
  name: string;
  email: string;
  goals?: string[];
  progressions?: string[];
  progressionPhotos?: string[];
}

const Profile: React.FC<UserProfile> = ({
  name,
  email,
  goals = [],
  progressions = [],
  progressionPhotos = [],
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-b  from-neutral-600 via-neutral-700 to-neutral-950 text-white">
      <main className="max-w-5xl mx-auto p-6">
        <section className="bg-black bg-opacity-70  p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-3xl font-bold mb-4">Welcome, {name}</h2>
          <p className="text-gray-400">Email: {email}</p>
        </section>

        <section className="bg-black bg-opacity-70  p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">Your Goals</h2>
          <ul className="list-disc pl-6">
            {/* For Dynamic Rendering */}
            {/* {goals.map((goal, index) => (
              <li key={index} className="mb-2">
                {goal}
              </li>
            ))} */}
          </ul>
        </section>

        <section className="bg-black bg-opacity-70  p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">Progressions</h2>
          <ul className="list-disc pl-6">
            {/* For Dynamic Rendering */}
            {/* {progressions.map((progression, index) => (
              <li key={index} className="mb-2">
                {progression}
              </li>
            ))} */}
          </ul>
        </section>

        <section className="bg-black bg-opacity-70  p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Progression Photos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* For Dynamic Rendering */}
            {/* {progressionPhotos.map((photo, index) => (
              <Image
                key={index}
                src={photo}
                alt={`Progression Photo ${index + 1}`}
                className="rounded-lg shadow-lg"
              />
            ))} */}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Profile;
