"use client";

import Link from "next/link";
import dynamic from "next/dynamic";

const Button = dynamic(() => import("../../components/Button"));

export default function Dynamic() {
  return (
    <main>
      <h2>Page</h2>
      <Button>Button in dynamic/page.tsx</Button>
      <br />
      <br />
      <Link href="/">Home</Link>
    </main>
  );
}
