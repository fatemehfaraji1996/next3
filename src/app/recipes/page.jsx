import ResepiCards from "@/components/ResepiCards";
import React from "react";

import { Suspense } from "react";
export const metadata = {
  title: "recipe food ",
  description: "all foods ",
};

export default function recipes() {
  return (
    <Suspense fallbac={<p>loding...........</p>} k>
      <ResepiCards>
      </ResepiCards>
    </Suspense>
  );
}
