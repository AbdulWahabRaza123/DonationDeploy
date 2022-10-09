import React from "react";
import Box from "../SComp/Box";
const Admin = () => {
  return (
    <>
      <div className="container container-fluid">
        <div className="row mb-5">
          <Box
            name="Change Title"
            data="With the help of it you can change the title e.g Help us today and other content of home page"
            btnName="Go"
          />
          <Box
            name="Change Contact Home"
            data="With the help of it you can change the Contact Info of top bar"
            btnName="Go"
          />
          <Box
            name="Change Brand Name With Description"
            data="With the help of it you can change the brand Name with Description in Footer"
            btnName="Go"
          />
          <Box
            name="Change Contact Footer"
            data="With the help of it you can change the brand Name with Description in Footer"
            btnName="Go"
          />
          <Box
            name="Change Boxes Data"
            data="With the help of it you can change the brand Name with Description in Footer"
            btnName="Go"
          />
          <Box
            name="Change Video and Content"
            data="With the help of it you can change the brand Name with Description in Footer"
            btnName="Go"
          />
        </div>
      </div>
    </>
  );
};
export default Admin;
