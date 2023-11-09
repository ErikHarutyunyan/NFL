import React, { useEffect, useMemo, useState } from "react";
import { usePagination, useTable } from "react-table";
import { ActionWrap, MyEventWrap } from "./DraftEvents.styles";
import eyeIcon from "../../../assets/img/eyeIcon.png";
import penIcon from "../../../assets/img/penIcon.png";
import delIcon from "../../../assets/img/delete.png";
import { useDispatch } from "react-redux";
import { PROFILE_DRAFT_EVENTS_MY, PROFILE_DRAFT_EVENTS_MY_EDIT, PROFILE_DRAFT_EVENTS_MY_VIEW } from "../../../router/route-path";
import { useNavigate } from "react-router-dom";
import {
  draftEventsDelete,
  draftEventsGet,
} from "../../../app/features/draftEvents/draftEventsActions";
import { useSelector } from "react-redux";
import { selectDraftEvents } from "../../../app/features/draftEvents/draftEventsSlice";
import { formatDate } from "../../../utils/utils";
import Spinner from "../../../components/Spinner/Spinner";

const EventList = ({ handlePage }) => {
  const navigate = useNavigate();
  const [data, setData] = useState([
    {
      event_id: "DSADA48797",
      name_event: "Tgsfsg",
      date: "12 May 2023",
      id: "123123123123213",
    },
  ]);
  const dispatch = useDispatch();
  const { myDraftEvent } = useSelector(selectDraftEvents);
 

  useEffect(() => {
    dispatch(draftEventsGet());
  }, []);
  const handleDelete = async (id) => {
    await dispatch(draftEventsDelete({ id }));
    dispatch(draftEventsGet());
  };
  const columns = useMemo(
    () => [
      {
        Header: "Event ID",
        accessor: "event_id",
      },
      {
        Header: "Name Event",
        accessor: "name",
      },
      {
        Header: "Date",
        accessor: "date",
        Cell: ({value}) => {
          return <>{formatDate(value)}</>;
        },
      },
      {
        Header: "Actions",
        accessor: "id",
        Cell: (props) => {
          const {
            row: { original: item },
          } = props;

          return (
            <ActionWrap>
              <div>
                <img
                  src={penIcon}
                  alt={"edit"}
                  onClick={() => {
                    // handlePage({ page: "edit", id: item.id })
                    navigate(`${PROFILE_DRAFT_EVENTS_MY_EDIT}/${item.id}`);
                  }}
                />
              </div>
              <div>
                <img
                  src={delIcon}
                  alt={"delete"}
                  onClick={() => {
                    handleDelete(item.id);
                  }}
                />
              </div>
              <div
                onClick={() => {
                  navigate(`${PROFILE_DRAFT_EVENTS_MY_VIEW}/${item.id}`);
                }}
              >
                <img src={eyeIcon} alt={"view"} />
              </div>
            </ActionWrap>
          );
        },
      },
    ],
    [myDraftEvent]
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    pageOptions,
    gotoPage,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data: myDraftEvent,
      initialState: { pageIndex: 0 },
    },
    usePagination
  );
  if (myDraftEvent === null) { 
    return <Spinner />

  }
    return (
      <MyEventWrap>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          {data.length ? (
            <>
              <tbody {...getTableBodyProps()}>
                {page.map((row, i) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        return (
                          <td {...cell.getCellProps()}>
                            {cell.render("Cell")}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </>
          ) : (
            <tbody>
              <tr>
                <td colspan="6" style={{ textAlign: "center" }}>
                  No data found
                </td>
              </tr>
            </tbody>
          )}
        </table>
      </MyEventWrap>
    );
};

export default EventList;
