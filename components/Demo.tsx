"use client";

import { useFrame } from "./context/FrameContext";
import { useSignIn } from "@/hooks/use-sign-in";
import { useUser } from "@/hooks/use-user-me";
import { useEffect } from "react";

export default function Demo() {
  const { isSDKLoaded } = useFrame();
  const { signIn, logout, isSignedIn, isLoading, error } = useSignIn();
  const { data: user, refetch: refetchUser } = useUser();

  useEffect(() => {
    refetchUser();
  }, [isSignedIn]);

  if (!isSDKLoaded) {
    return (
      <div className="h-screen flex flex-col items-center justify-center gap-2">
        <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        Loading...
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">Frames v2 demo</h1>

      {error && <p className="text-red-500">{error}</p>}

      {!isSignedIn ? (
        <button
          onClick={() => signIn()}
          disabled={isLoading}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:bg-blue-300"
        >
          {isLoading ? "Signing in..." : "Sign in with Farcaster"}
        </button>
      ) : (
        <div className="flex flex-col items-center gap-4">
          {user && (
            <div className="text-center text-white">
              <img 
                src={user.avatarUrl} 
                alt={user.username}
                className="w-16 h-16 rounded-full mx-auto mb-2"
              />
              <p className="font-medium">Welcome, {user.username}</p>
              <p className="text-gray-600">FID: {user.fid}</p>
            </div>
          )}
          <button
            onClick={() => logout()}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
