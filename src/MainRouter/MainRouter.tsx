import { createBrowserRouter } from "react-router-dom";
import MainComponent from "../MainComponent/MainComponent";
import DoctorComponent from "../component/DoctorComponent/DoctorComponent";
import AdminComponent from "../component/AdminComponent/AdminComponent";
import UserComponent from "../component/UserComponent/UserComponent";

const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainComponent />,
    children: [
      {
        path: "/",
        element: <AdminComponent/>,
      },
      {
        path: "/doctor",
        element: <DoctorComponent />,
      },
      {
        path: "/user",
        element: <UserComponent />,
      },
    ],
  },
]);
export default MainRouter;
