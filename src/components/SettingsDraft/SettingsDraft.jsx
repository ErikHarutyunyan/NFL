import { Switch } from "@mui/material";
import React, { useState } from "react";
import Title from "../../components/Title/Title";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

import {
  SettingItem,
  Speed,
  NumItem,
  NumWrapper,
  SettingMarks,
} from "./Settings.styles";
import { useDispatch, useSelector } from "react-redux";
import {
  checkFanaticChallenge,
  checkRoundBPA,
  saveRound,
  selectDraftConfig,
  setAdvancedSetting,
  setDraftCardDepth,
  setDraftRandomness,
  setRoundDepth,
  setTimeSpeed,
  setFanaticModeValue,
  fanaticModeAction,
  setTradingSimulatorAction,
  setTradingSimulator,
  resetTeam,
} from "../../app/features/draftConfig/draftConfigSlice";
import { CheckBoxInputSecond } from "../Inputs/CheckBoxInputSecond";
import arrowLeft from "../../assets/img/arrow-left.png";
import Button from "../Buttons/Button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { setChangeTrades } from "../../app/features/trades/tradesSlice";
import { selectUser } from "../../app/features/user/userSlice";

const Settings = ({ teamSelect }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useSelector(selectUser);
  const {
    round,
    timeSpeed,
    draftRandomness,
    draftCardDepth,
    advancedSetting,
    roundDepth,
    roundBPA,
    fanaticChallenge,
    fanaticMode,
    fanaticModeValue,
    tradingSimulatorAction,
    tradingSimulator,
    changeTrades,
    allowSimulator,
  } = useSelector(selectDraftConfig);

  
  const roundsArray = Array.from(Array(7).keys());
  const [maxSimSim,setMaxSimSim] = useState(8);

  useEffect(() => {
    if (tradingSimulatorAction) {
      let teamSelection = teamSelect[0]?.selection;

      if (teamSelection > 8 || round === 2) {
        setMaxSimSim(8);
        return;
      }
      if (teamSelection <= 8) {
        setMaxSimSim(teamSelection - 1);
        return;
      } else {
        setMaxSimSim(8);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tradingSimulatorAction, teamSelect, round]);

  useEffect(() => {
    dispatch(setDraftRandomness(draftRandomness));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
   if(round > 2 && tradingSimulatorAction) {
    dispatch(setTradingSimulator(1));
    dispatch(setTradingSimulatorAction(!tradingSimulatorAction));
   }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [round]);

  return (
    <>
      <SettingItem>
        <Title titleText="Rounds" titleClassName="setting-title " />
        <NumWrapper>
          {roundsArray.map((_, idx) => {
            const id = idx + 1;

            return (
              <NumItem
                key={id}
                className={`${id === +round ? "active-round" : ""}`}
                onClick={() => {
                  if (!fanaticChallenge.length) {
                    dispatch(saveRound(id));
                  }
                }}
              >
                <span>{id}</span>
              </NumItem>
            );
          })}
        </NumWrapper>
      </SettingItem>
      <SettingItem>
        <Title titleText="Speed" titleClassName="setting-title " />
        <Speed>
          <Box sx={{ width: "100%" }}>
            <Slider
              defaultValue={timeSpeed}
              step={1}
              min={1}
              max={5}
              value={timeSpeed}
              onChange={(e) => dispatch(setTimeSpeed(e.target.value))}
              aria-label="Default"
              valueLabelDisplay="auto"
            />
            <SettingMarks>
              <span>Slow</span>
              <span>Fast</span>
            </SettingMarks>
          </Box>
        </Speed>
      </SettingItem>
      <SettingItem>
        <div>
          <Title
            titleText="Advanced Settings"
            titleClassName="advanced-setting-title "
          />
          <span className="setting-desc">How simulated teams pick</span>
        </div>
        <label htmlFor="">
          Use default
          <Switch
            checked={advancedSetting}
            onChange={(e) => dispatch(setAdvancedSetting(e.target.checked))}
          />
        </label>
      </SettingItem>
      {!advancedSetting && (
        <>
          <SettingItem className="setting-goriz">
            <Title
              titleText="Draft card depth"
              titleClassName="setting-title "
            />
            <Speed>
              <Box sx={{ width: "100%" }}>
                <Slider
                  defaultValue={2}
                  step={1}
                  min={2}
                  max={8}
                  value={draftCardDepth}
                  onChange={(e) => dispatch(setDraftCardDepth(e.target.value))}
                  aria-label="Default"
                  valueLabelDisplay="auto"
                />
                <SettingMarks>
                  <span>Less (2)</span>
                  <span>More (8)</span>
                </SettingMarks>
              </Box>
            </Speed>
          </SettingItem>
          <SettingItem className="setting-goriz">
            <Title
              titleText="Draft randomness"
              titleClassName="setting-title "
            />
            <Speed>
              <Box sx={{ width: "100%" }}>
                <Slider
                  defaultValue={2}
                  step={1}
                  min={2}
                  max={16}
                  value={draftRandomness}
                  onChange={(e) => dispatch(setDraftRandomness(e.target.value))}
                  aria-label="Default"
                  valueLabelDisplay="auto"
                />
                <SettingMarks>
                  <span>Less (2)</span>
                  <span>More (16)</span>
                </SettingMarks>
              </Box>
            </Speed>
          </SettingItem>
          <SettingItem className="setting-round-check">
            <CheckBoxInputSecond
              checked={roundBPA.includes(1)}
              label={"1st round BPA"}
              nameClass={"setting-check"}
              value={1}
              disabled={!(round >= 1 && !fanaticMode)}
              onInputChange={(e) => dispatch(checkRoundBPA(e.target.value))}
            />
            <CheckBoxInputSecond
              checked={roundBPA.includes(2)}
              label={"2nd round BPA"}
              nameClass={"setting-check"}
              value={2}
              disabled={!(round >= 2 && !fanaticMode)}
              onInputChange={(e) => dispatch(checkRoundBPA(e.target.value))}
            />
          </SettingItem>
          <SettingItem className="setting-goriz">
            <Title titleText="Round depth" titleClassName="setting-title " />
            <Speed>
              <Box sx={{ width: "100%" }}>
                <Slider
                  step={1}
                  min={2}
                  max={5}
                  value={roundDepth}
                  defaultValue={5}
                  onChange={(e) => dispatch(setRoundDepth(e.target.value))}
                  aria-label="Default"
                  valueLabelDisplay="auto"
                />
                <SettingMarks>
                  <span>Less (2)</span>
                  <span>More (5)</span>
                </SettingMarks>
              </Box>
            </Speed>
          </SettingItem>
          <SettingItem className="setting-fan">
            <div className="setting-fan-item">
              <p>1st round fanatic challenge</p>
              <CheckBoxInputSecond
                checked={fanaticChallenge.some((item) => item.mode === 1)}
                nameClass={"setting-check"}
                value={1}
                disabled={fanaticMode}
                onInputChange={(e) =>
                  dispatch(checkFanaticChallenge(+e.target.value, 5))
                }
              />
            </div>
            <div className="setting-fan-item">
              <p>2nd round fanatic challenge</p>
              <CheckBoxInputSecond
                checked={fanaticChallenge.some((item) => item.mode === 2)}
                nameClass={"setting-check"}
                value={2}
                // disabled={!(userInfo?.fanatic_mode > 0 && !fanaticMode)}
                disabled={fanaticMode}
                onInputChange={(e) =>
                  dispatch(checkFanaticChallenge(+e.target.value, 10))
                }
              />
            </div>
            <div className="setting-fan-item">
              <p>3rd round fanatic challenge</p>
              <CheckBoxInputSecond
                checked={fanaticChallenge.some((item) => item.mode === 3)}
                nameClass={"setting-check"}
                value={3}
                // disabled={!(userInfo?.fanatic_mode > 1 && !fanaticMode)}
                disabled={fanaticMode}
                onInputChange={(e) =>
                  dispatch(checkFanaticChallenge(+e.target.value, 15))
                }
              />
            </div>
            <div className="setting-fan-item">
              <p>Fanatic mode</p>
              <Switch
                checked={fanaticMode}
                onChange={(e) => dispatch(fanaticModeAction(e.target.checked))}
              />
            </div>
            {fanaticMode && (
              <div className="setting-fan-item">
                <Box sx={{ width: "100%" }}>
                  <Slider
                    step={1}
                    min={2}
                    max={8}
                    value={fanaticModeValue}
                    defaultValue={1}
                    onChange={(e) =>
                      dispatch(setFanaticModeValue(e.target.value))
                    }
                    aria-label="Default"
                    valueLabelDisplay="auto"
                  />
                  <SettingMarks>
                    <span>Less (2)</span>
                    <span>More (8)</span>
                  </SettingMarks>
                </Box>
              </div>
            )}
            {/* ------ */}
            {allowSimulator || userInfo?.allow_simulator ? (
              <div className="setting-fan-item">
                <p>
                  Allow trading simulator to simulator <br />
                  <span style={{ fontSize: "13px" }}>
                    Please choose the team after selecting an option
                  </span>
                </p>
                <Switch
                  checked={tradingSimulatorAction}
                
                  onChange={(e) => {
                    dispatch(
                      setTradingSimulatorAction(!tradingSimulatorAction)
                    );
                    dispatch(resetTeam());
                    dispatch(setChangeTrades(!changeTrades));
                  }}
                />
              </div>
            ) : null}

            {tradingSimulatorAction && (
              <div className="setting-fan-item">
                <Box sx={{ width: "100%" }}>
                  <Slider
                    step={1}
                    min={1}
                    max={maxSimSim}
                    value={tradingSimulator}
                    defaultValue={1}
                    onChange={(e) =>
                      dispatch(setTradingSimulator(e.target.value))
                    }
                    aria-label="Default"
                    valueLabelDisplay="auto"
                  />
                  <SettingMarks>
                    <span>Less (1)</span>
                    <span>More ({maxSimSim})</span>
                  </SettingMarks>
                </Box>
              </div>
            )}
          </SettingItem>
        </>
      )}

      <Button
        btnText="Enter Draft"
        btnIcon={arrowLeft}
        btnClassName="enter-draft-btn"
        btnDisable={!teamSelect.length}
        onBtnClick={() => navigate("/draft-player")}
      />
    </>
  );
};
export default Settings;
