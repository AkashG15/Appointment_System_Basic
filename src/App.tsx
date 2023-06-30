import { RouterProvider } from "react-router-dom";
import "./App.css";
import MainRouter from "./MainRouter/MainRouter";


function App() {
  return (
    <div>
      <RouterProvider router={MainRouter}></RouterProvider>
      
    </div>
  );
}

export default App;
// <h1>Appointment System</h1>
// <Button btFun={() => console.log("btFun")} btName="add"/>