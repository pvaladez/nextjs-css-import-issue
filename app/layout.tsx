import Button from "../components/Button";
import "./global.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <header>
          <p>
            All buttons in the below test cases are expected to be{" "}
            <span style={{ color: "blue" }}>BLUE</span>.
          </p>
          <p>
            The <span style={{ color: "green" }}>GREEN</span> color comes from
            the global CSS file imported in layout.tsx
          </p>
          <p>Test cases:</p>
          <ol>
            <li>
              Start the app in production mode (`yarn build && yarn start`)
            </li>
            <li>
              Open the home page - the buttons are{" "}
              <span style={{ color: "green" }}>GREEN</span>
            </li>
            <li>
              Click the 'Client' link - all buttons turn{" "}
              <span style={{ color: "blue" }}>BLUE</span> and CSS modules are
              loaded twice
            </li>
            <li>
              Click the 'Home' link - all buttons on the homepage are now{" "}
              <span style={{ color: "blue" }}>BLUE</span> and CSS modules are
              loaded twice
            </li>
            <li>
              {" "}
              Refresh the homepage - the buttons are{" "}
              <span style={{ color: "green" }}>GREEN</span>
            </li>
            <li>
              Click the 'Dynamic' link - the buttons turn{" "}
              <span style={{ color: "blue" }}>BLUE</span>
            </li>
            <li>
              Refresh the 'Dynamic' page - the buttons are{" "}
              <span style={{ color: "green" }}>GREEN</span> initially, but turn{" "}
              <span style={{ color: "blue" }}>BLUE</span> when the dynamic
              component loads. Also, CSS modules are loaded twice.
            </li>
          </ol>

          <p>Last file edited determines order of CSS:</p>
          <ol>
            <li>
              Edit global.css and rebuild/restart app - home page buttons are{" "}
              <span style={{ color: "green" }}>GREEN</span>
            </li>
            <li>
              Edit ButtonBase.module.css and rebuild/restart app - home page
              buttons are <span style={{ color: "red" }}>RED</span>
            </li>
            <li>
              Edit Button.module.css and rebuild/restart app - home page buttons
              are <span style={{ color: "blue" }}>BLUE</span>
            </li>
            <li>
              Edit layout.tsx and rebuild/restart app - home page buttons are{" "}
              <span style={{ color: "green" }}>GREEN</span> once again!
            </li>
          </ol>

          <h1>Layout</h1>
          <Button>Button in layout.tsx</Button>
        </header>
        {children}
      </body>
    </html>
  );
}
