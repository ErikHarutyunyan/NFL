import React, { useMemo, useRef, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import {  selectDraftConfig } from "../../app/features/draftConfig/draftConfigSlice";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Spinner from "../../components/Spinner/Spinner";
// Components
import Title from "../../components/Title/Title";

// Styles
import {
  DraftValueContent,
  RoundColumn,
  RoundColumnHead,
  Wrapper,
} from "./DraftValueChart.styles";
import {
  resDraftValue,
  selectDraftValue,
} from "../../app/features/draftValue/draftValueSlice";
import { getDraftValue } from "../../app/features/draftValue/draftValueAction";

const DraftValueChart = () => {
  const dispatch = useDispatch();
  const { draftValue, loading } = useSelector(selectDraftValue);

  const tableData = useMemo(() => {
    const roundSet = new Set();
    const allRound = draftValue.map((item) => item.round_index);
    
    allRound.forEach((item) => roundSet.add(item));
    let roundArray = [...roundSet];
   
    let table = {};
    for (let roundItem of roundArray) {
      for (let team of draftValue) {
        if (roundItem === team.round_index) {
          if (table[roundItem]) {
            table[roundItem].push(team);
          } else {
            table[roundItem] = [team];
          }
        }
      }
    }
    return table;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [draftValue]);
 
  const initialRef = useRef(true);

  const [showHide, setShowHide] = useState({
    team: false,
  });

  const handleChange = (event) => {
    setShowHide({
      ...showHide,
      [event.target.name]: event.target.checked,
    });
  };

  useEffect(() => {
    if (initialRef.current) {
      initialRef.current = false;
      dispatch(getDraftValue());
    }
    return () => dispatch(resDraftValue());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <Wrapper className="main-container">
      <Title titleText="Draft Value Chart" />
      {loading ? <Spinner /> : null}
      <FormControl component="fieldset" variant="standard">
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={showHide.team}
                onChange={handleChange}
                name="team"
              />
            }
            label={`${showHide.team ? "Hide Team" : "Show Team"}`}
          />
        </FormGroup>
      </FormControl>
      <DraftValueContent>
        {draftValue.length > 0 && tableData
          ? Object.keys(tableData).map((round) => {
              // return <>div</>;
             
              return (
                <RoundColumn key={round}>
                  <RoundColumnHead>
                    <p>{round}</p>
                  </RoundColumnHead>
                  <table>
                    <thead>
                      <tr>
                        <th>Selection</th>
                        {showHide.team ? null : <th>Team</th>}
                        <th>Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableData[`${round}`].map((item, idx) => {
                      
                          return (
                            <tr key={idx}>
                              <td>{item?.index}</td>
                              {showHide.team ? null : <td>{item?.city}</td>}
                              <td>{item?.value}</td>
                            </tr>
                          );
                       
                      })}
                    </tbody>
                  </table>
                </RoundColumn>
              );
            })
          : null}
      </DraftValueContent>
    </Wrapper>
  );
};

export default DraftValueChart;
