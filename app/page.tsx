import Link from "next/link";

import Button from "../components/Button";

/*
All buttons in the below test cases are expected to be BLUE.

Test cases:

1) Start the app in production mode (`yarn build && yarn start`)
2) Open the home page - the buttons are RED
3) Click the 'Client' link - all buttons turn BLUE and CSS modules are loaded twice
4) Click the 'Home' link - all buttons on the homepage are now BLUE and CSS modules are loaded twice
5) Refresh the homepage - the buttons are RED
6) Click the 'Dynamic' link - the buttons turn BLUE
3) Refresh the 'Dynamic' page - the buttons are RED initially, but turn BLUE when the dynamic component loads. 
Also, CSS modules are loaded twice.
*/

export default function Home() {
  return (
    <main>
      <h2>Page</h2>
      <Button>Button in page.tsx</Button>
      <br />
      <br />
      <Link href="/client">Client</Link>
      <br />
      <br />
      <Link href="/dynamic">Dynamic</Link>
    </main>
  );
}
