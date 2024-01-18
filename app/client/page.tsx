"use client";

import Link from "next/link";

import Button from "../../components/Button";

export default function Client() {
  return (
    <main>
      <h2>Page</h2>
      <Button>Button in client/page.tsx</Button>
      <br />
      <br />
      <Link href="/">Home</Link>
    </main>
  );
}
