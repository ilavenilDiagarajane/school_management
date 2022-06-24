import { Dashnav } from "./Dashnav.js";
import { Topnav } from "./Topnav.js";
import { useParams , Outlet} from "react-router-dom";
export function Dashboardlayout() {
  let { id } = useParams();

  return (
    <>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-lg-2 dashboardlayout">
          <Dashnav userroll={id}/>
          </div>
          <div className="col-lg-10">
          <div className="row ">
            <Topnav userroll={id} />
          </div>
          <div className="row ">
            <Outlet/>
          </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
