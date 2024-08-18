"use client";

// import Homepage from "@/components/HomePage";
import dynamic from "next/dynamic";
export default function Home() {
  const LazyHomePage = dynamic(() => import("../../src/components/HomePage"), {
    loading: () => <p>Loading...</p>,
  });
  // console.log(lazy);

  return (
    <div>
      <h1>gpp</h1>
      <LazyHomePage />
    </div>
  );
}
