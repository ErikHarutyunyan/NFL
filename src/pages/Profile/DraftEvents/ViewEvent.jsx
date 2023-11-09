import React, { useEffect } from 'react'
import excelIcon from "../../../assets/img/excelIcon.png";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { BackArrow, ViewItem, ViewWrap } from './DraftEvents.styles';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectDraftEvents } from '../../../app/features/draftEvents/draftEventsSlice';
import { draftEventsGetId } from '../../../app/features/draftEvents/draftEventsActions';
import Spinner from '../../../components/Spinner/Spinner';
import { formatDate } from '../../../utils/utils';

const ViewEvent = ({handlePage}) => {
  const {id} = useParams()
  const navigate = useNavigate();
  const {myDraftSingleEvent} = useSelector(selectDraftEvents)
  console.log('myDraftSingleEvent :', myDraftSingleEvent);
  

  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(draftEventsGetId(id));
  },[id])

  const lastName = (name,separator) => {
    
    if(name) {
      const lastNameIndex = name.lastIndexOf(separator) + 1;
      const sliceName = name.slice(lastNameIndex);
      return sliceName
    }
    return 'No file import'
  }
  if(myDraftSingleEvent === null) {
    return <Spinner/>
  }
  return (
    <ViewWrap>
      <BackArrow onClick={() => navigate(-1)}>
        <HiOutlineArrowLeft />
      </BackArrow>
      <ViewItem>
        <h3>EVENT ID</h3>
        <p>
          <span>{myDraftSingleEvent.event_id}</span>
          <svg
            onClick={() => navigator.clipboard.writeText(`1234565456`)}
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M5 22C4.45 22 3.979 21.8043 3.587 21.413C3.19567 21.021 3 20.55 3 20V6H5V20H16V22H5ZM9 18C8.45 18 7.97933 17.8043 7.588 17.413C7.196 17.021 7 16.55 7 16V4C7 3.45 7.196 2.979 7.588 2.587C7.97933 2.19567 8.45 2 9 2H18C18.55 2 19.021 2.19567 19.413 2.587C19.8043 2.979 20 3.45 20 4V16C20 16.55 19.8043 17.021 19.413 17.413C19.021 17.8043 18.55 18 18 18H9ZM9 16H18V4H9V16Z"
              fill="#004EA3"
            />
          </svg>
        </p>
      </ViewItem>
      <ViewItem>
        <h3>Event Name</h3>
        <p>{myDraftSingleEvent.name}</p>
      </ViewItem>
      <ViewItem>
        <h3>Event Date</h3>
        <p>{formatDate(myDraftSingleEvent.created_at)}</p>
      </ViewItem>
      <div className="list">
        <h3>List of players</h3>
        <div className="list-name">
          <img src={excelIcon} alt="icon" />
          <div className="event-file">
            <a href={myDraftSingleEvent?.file} download>
              {lastName(myDraftSingleEvent?.file, "/")}
            </a>
          </div>
        </div>
      </div>

      {myDraftSingleEvent?.players.length ? (
        <div className="list">
          <h3>Guests List</h3>
          <div>
            {myDraftSingleEvent?.players.map(({user}) => {
              
              return <p key={user.id}>{user.username}</p>
            })}
          </div>
        </div>
      ): null}
    </ViewWrap>
  );
}

export default ViewEvent