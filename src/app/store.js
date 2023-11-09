import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./features/user/userSlice";
import playersReducer from "./features/players/playersSlice";
import groupReducer from './features/group/groupSlice';
import draftConfigReducer from "./features/draftConfig/draftConfigSlice";
import teamNeedsReducer from "./features/teamNeeds/teamNeedsSlice";
import playersDraftReducer from "./features/playersDraft/playersDraftSlice";
import teamListReducer from "./features/teamList/teamListSlice";
import draftResultReducer from './features/draftResult/draftResultSlice';
import draftValueReducer from "./features/draftValue/draftValueSlice"
import tradesReducer from "./features/trades/tradesSlice"
import simulatorToSimulatorReducer from "./features/simulatorToSimulator/simulatorToSimulatorSlice";
import draftEventsReducer from "./features/draftEvents/draftEventsSlice";
import liveDraftReducer from "./features/liveDraft/liveDraftSlice";
import planReducer from "./features/plan/planSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    players: playersReducer,
    group: groupReducer,
    draftConfig: draftConfigReducer,
    teamNeeds: teamNeedsReducer,
    playersDraft: playersDraftReducer,
    teamList: teamListReducer,
    draftResult: draftResultReducer,
    draftValue: draftValueReducer,
    trades: tradesReducer,
    simulatorToSimulator: simulatorToSimulatorReducer,
    draftEvents: draftEventsReducer,
    liveDraft: liveDraftReducer,
    plan:planReducer,
  },
});
