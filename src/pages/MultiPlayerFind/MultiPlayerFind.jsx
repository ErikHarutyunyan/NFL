import React, { useEffect, useState } from "react";
// Styles
import {
  Wrapper,
  EventItem,
  EventWrap,
  SearchWrap,
  PaginationWrap,
} from "./MultiPlayerFind.styles";
import { Pagination } from "@mui/material";
import Search from "../../components/Search/Search";
import { useDispatch } from "react-redux";
import { draftEventsList } from "../../app/features/draftEvents/draftEventsActions";
import { useSelector } from "react-redux";
import { selectDraftEvents } from "../../app/features/draftEvents/draftEventsSlice";
import { useNavigate } from "react-router-dom";
import { MULTI_PLAYER_JOIN_TEAM } from "../../router/route-path";
import Spinner from "../../components/Spinner/Spinner";

const MultiPlayerItem = ({ event }) => {
  
  const { name, event_id, created_at:date, id, players } = event;
  const navigate = useNavigate()
  const formattedDate = (date) => {

    const newDate = new Date(date);

    const options = {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    };

    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
      newDate
    );
    return formattedDate;
  }
 
  //  [yyyy, mm, dd, hh, mi] = date.split(/[/:\-T]/);
  return (
    <EventWrap>
      <EventItem>
        <div>
          <h3>{name}</h3>
        </div>
        <div className="event-info">
          <h4>Event ID:</h4>
          <p>{event_id}</p>
        </div>
        <div>
          <h4>{date ? formattedDate(date) : ""}</h4>
        </div>
        <div className="event-info">
          <h4>Place left:</h4>
          <p>{players?.length}</p>
        </div>
        <div>
          <button onClick={() => navigate(`${MULTI_PLAYER_JOIN_TEAM}/${id}`)}>Choose Team</button>
        </div>
      </EventItem>
    </EventWrap>
  );
};

const MultiPlayerFind = () => {
  const [searchValue, setSearchValue] = useState("");
  const { eventList,loading } = useSelector(selectDraftEvents);
  console.log('eventList :', eventList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(draftEventsList());
  }, []);
 if (loading) {
   return <Spinner />;
 }
  return (
    <Wrapper>
      <h2>Find an Event</h2>
      <SearchWrap>
        <Search
          value={searchValue}
          handleChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
        <div>
          <input type="date" />
        </div>
      </SearchWrap>
      <div className="event-content">
        {eventList.length > 0 ? (
          eventList.map((event, idx) => {
            return <MultiPlayerItem event={event} key={idx} />;
          })
        ) : (
          <p>Not Event</p>
        )}
      </div>
      {/* <PaginationWrap>
        <Pagination
          totalCount={events?.count}
          pageSize={events?.limit}
          currentPage={events?.currentPage}
          previous={events?.previous}
          next={events?.next}
          onPageChange={(page) => {
            // dispatch(pageNav(page));
          }}
        />
      </PaginationWrap> */}
    </Wrapper>
  );
};

export default MultiPlayerFind;
