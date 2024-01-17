import { createBrowserRouter } from "react-router-dom";
import { Landing } from "../../pages/Landing";
import { Contacts } from "../../pages/Contacts";
import { Suspense } from "react";

const router = createBrowserRouter([
    {
      path: "/",
      element: 
      <Suspense fallback={<div>Loading...</div>}>
        <Landing />
      </Suspense>,
    },
    {
      path: "/contacts",
      element: <Contacts />,
    },
    {
      path: "/contacts/:name",
      element: <Contacts />,
    }
]);

export default router;