import React from "react";
// import { signIn } from 'next-auth/react'; FOR NEXT AUTH

type Props = {};

const SignInPage = (props: Props) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-neutral-600 via-neutral-700 to-neutral-950 text-white">
      <div className="bg-black bg-opacity-70 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-center mb-6">Sign In</h2>
        <p className="text-center mb-8 text-gray-400">
          Access your workouts, diet plans, and progress.
        </p>

        <button
          // onClick={() => signIn('google')} FOR NEXT AUTH
          className="w-full py-3 bg-neutral-500 hover:bg-neutral-700 rounded-lg text-lg font-medium mb-4 transition duration-200"
        >
          Sign in with Google
        </button>

        <button
          // onClick={() => signIn('github')} FOR NEXT AUTH
          className="w-full py-3 bg-gray-600 hover:bg-gray-700 rounded-lg text-lg font-medium mb-4 transition duration-200"
        >
          Sign in with GitHub
        </button>

        <div className="text-center mt-4 text-sm text-gray-400">
          <p>
            By signing in, you agree to our{" "}
            <a href="/terms" className="underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
