import React, { useState } from "react";
import { MyEventWrap } from "./DraftEvents.styles";
import EventList from "./EventList";
import ViewEvent from "./ViewEvent";

import EditEvent from "./EditEvent";
import { Outlet, useParams } from "react-router-dom";

const MyEvents = () => {
  const {path,id} = useParams
  const [pageShow,setPageShow] = useState({
    page:'list',
    id:0,
  });
  const handlePage = ({page,id}) => {
    

    setPageShow({page,id})
  }
  return (
    <MyEventWrap>
      <Outlet />
      {/* {pageShow?.page === "list" && <EventList handlePage={handlePage} />}
      {pageShow?.page === 'view' && <ViewEvent handlePage={handlePage} />}
      {pageShow?.page === 'edit' && <EditEvent handlePage={handlePage} />} */}
    </MyEventWrap>
  );
};

export default MyEvents;
