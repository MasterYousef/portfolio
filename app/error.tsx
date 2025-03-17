"use client";

import { useEffect } from "react";

export default function Error401({
  error,
  reset,
}: {
  readonly error: Error & { digest?: string };
  readonly reset: () => void;
}) {
  useEffect(() => {
    console.error(error.message);
  }, [error]);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center space-y-4 animate-fade-in">
        <div className="text-center">
          <h2 className="text-xl font-bold text-gray-800">
            Something went wrong!
          </h2>
          <p className="text-gray-600 mt-2">{error.message}</p>
          <button
            onClick={() => reset()}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-105"
          >
            try again ?
          </button>
        </div>
      </div>
    </div>
  );
}
