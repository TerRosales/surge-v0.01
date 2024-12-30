import React from "react";
import Image from "next/image";

interface UserProfile {
  name?: string; // Made optional to avoid runtime errors
  email: string;
  weight?: number;
  age?: number;
  height?: number;
  profilePicture?: string; // URL for the profile picture
  goals?: string[];
  progressions?: string[];
  progressionPhotos?: string[];
}

const Profile: React.FC<UserProfile> = ({
  name = "User", // Default to "User" if name is not provided
  email,
  weight,
  age,
  height,
  profilePicture,
  goals = [],
  progressions = [],
  progressionPhotos = [],
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-600 via-neutral-700 to-neutral-950 text-white">
      <main className="max-w-5xl mx-auto p-6">
        {/* Profile Section */}
        <section className="bg-black bg-opacity-70 p-6 rounded-lg shadow-lg mb-8 flex flex-col sm:flex-row items-center sm:items-start">
          {/* Profile Picture */}
          {profilePicture ? (
            <Image
              src={profilePicture}
              alt={`${name}'s Profile Picture`}
              width={120}
              height={120}
              className="rounded-full shadow-lg mb-4 sm:mb-0 sm:mr-6"
            />
          ) : (
            <div className="w-[120px] h-[120px] rounded bg-gray-500 flex items-center justify-center text-gray-200 font-bold text-xl mb-4 sm:mb-0 sm:mr-6">
              {name[0].toUpperCase()}
            </div>
          )}
          {/* Personal Details */}
          <div>
            <h2 className="text-3xl font-bold mb-2">Welcome, {name}</h2>
            <p className="text-gray-400">
              Email: {email}daddylessobese@obesity.bigback
            </p>
            <p className="text-gray-400">Weight: {weight}123 kg</p>
            <p className="text-gray-400">Height: {height}174 cm</p>
            <p className="text-gray-400">Age: {age}42 years</p>
            {/* For Dynamic Rendering */}
            {/* {weight && <p className="text-gray-400">Weight: {weight} kg</p>}
            {height && <p className="text-gray-400">Height: {height} cm</p>}
            {age && <p className="text-gray-400">Age: {age} years</p>} */}
          </div>
        </section>

        {/* Goals Section */}
        <section className="bg-black bg-opacity-70 p-6 rounded-lg shadow-lg mb-8">
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

        {/* Progressions Section */}
        <section className="bg-black bg-opacity-70 p-6 rounded-lg shadow-lg mb-8">
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

        {/* Progression Photos Section */}
        <section className="bg-black bg-opacity-70 p-6 rounded-lg shadow-lg">
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
