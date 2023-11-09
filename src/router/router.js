import React, { Suspense, lazy } from "react";
import Layout from "../layout/Layout";
import { Route, Routes } from "react-router-dom";
import ProtectRouter from "./ProtectRouter";
import { useSelector } from "react-redux";
import { selectDraftResult } from "../app/features/draftResult/draftResultSlice";
import { selectDraftConfig } from "../app/features/draftConfig/draftConfigSlice";
// Pages
// import Home from "../pages/Home/Home"
// import SelectDraft from "../pages/SelectDraft/SelectDraft"
import SignUp from "../pages/auth/SignUp/SignUp";
import SignIn from "../pages/auth/SignIn/SignIn";
import ResetPass from "../pages/auth/ResetPass/ResetPass";
import ForgotPass from "../pages/auth/ForgotPass/ForgotPass";
// import Players from '../pages/Players/Players';
import DraftConfiguration from "../pages/DraftConfiguration/DraftConfiguration";
// import DraftValueChart from '../pages/DraftValueChart/DraftValueChart';
import DraftPlayer from "../pages/DraftPlayer/DraftPlayer";
import TeamNeeds from "../pages/TeamNeeds/TeamNeeds";
// import DraftResult from '../pages/DraftResult/DraftResult';
import TeamList from "../pages/TeamList/TeamList";
import NotFound from "../pages/NotFoundPage/NotFoundPage";
import Spinner from "../components/Spinner/Spinner";
import ProfileLayout from "../pages/Profile/ProfileLayout";
import PersonalInfo from "../pages/Profile/PersonalInfo/PersonalInfo";
import Badges from "../pages/Profile/Badges/Badges";
import DraftEvents from "../pages/Profile/DraftEvents/DraftEvents";
import Podcasts from "../pages/Profile/Podcasts/Podcasts";
import Payment from "../pages/Profile/Payment/Payment";
import Password from "../pages/Profile/Password/Password";
import Logout from "../pages/Profile/Logout/Logout";
import { selectUser } from "../app/features/user/userSlice";
import PrivateRouter from "./PrivateRouter";
// Path
import {
  DRAFT_CONFIG,
  DRAFT_PLAYER,
  DRAFT_RESULT,
  DRAFT_VALUE_CHART,
  FORGOT_PASS,
  HOME,
  LIVE_DRAFT,
  MULTI_PLAYER_FIND,
  MULTI_PLAYER_JOIN_TEAM,
  NOT_FOUND,
  PLAYERS,
  PROFILE_BADGES,
  PROFILE_DRAFT_EVENTS,
  PROFILE_LOGOUT,
  PROFILE_PASSWORD,
  PROFILE_PAYMENT,
  PROFILE_SUBSCRIPTION,
  PROFILE_PODCASTS,
  RESET_PASS,
  SELECT_DRAFT,
  SIGH_UP,
  SIGN_IN,
  TEAM_LIST,
  TEAM_NEEDS,
  PROFILE_SUBSCRIPTION_RETURN,
  PROFILE_DRAFT_EVENTS_MY,
  PROFILE_DRAFT_EVENTS_CREATE,
  PROFILE_DRAFT_EVENTS_MY_EDIT,
  PROFILE_DRAFT_EVENTS_MY_VIEW,
  MULTI_PLAYER_JOIN_TEAM_ID,
} from "./route-path";
import MultiPlayerFind from "../pages/MultiPlayerFind/MultiPlayerFind";
import MultiPlayerTeam from "../pages/MultiPlayerTeam/MultiPlayerTeam";
import LiveDraft from "../pages/LiveDraft";
import Subscription from "../pages/Profile/Subscription";
import EventList from "../pages/Profile/DraftEvents/EventList";
import CreateEvents from "../pages/Profile/DraftEvents/CreateEvents";
import MyEvents from "../pages/Profile/DraftEvents/MyEvents";
import EditEvent from "../pages/Profile/DraftEvents/EditEvent";
import PayPalRedirect from "../pages/Profile/PayPalRedirect/PayPalRedirect";
// import TokenService from "../service/token.service";
import ViewEvent from "../pages/Profile/DraftEvents/ViewEvent";

// Pages Lazy
const Home = lazy(() => import("../pages/Home/Home"));
const SelectDraft = lazy(() => import("../pages/SelectDraft/SelectDraft"));
const Players = lazy(() => import("../pages/Players/Players"));
const DraftResult = lazy(() => import("../pages/DraftResult/DraftResult"));
const DraftValueChart = lazy(() =>
  import("../pages/DraftValueChart/DraftValueChart")
);

const Router = () => {
  const { teamSelect } = useSelector(selectDraftConfig);
  const { results } = useSelector(selectDraftResult);
  const { success } = useSelector(selectUser);




  return (
    <>
      <Routes>
        <Route path={HOME} element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback={<Spinner />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path={SELECT_DRAFT}
            element={
              <Suspense fallback={<Spinner />}>
                <SelectDraft />
              </Suspense>
            }
          />
          <Route path={DRAFT_CONFIG} element={<DraftConfiguration />} />
          <Route
            path={DRAFT_PLAYER}
            element={
              <ProtectRouter access={teamSelect} redirect={DRAFT_CONFIG}>
                <DraftPlayer />
              </ProtectRouter>
            }
          />
          <Route
            path={DRAFT_RESULT}
            element={
              <ProtectRouter access={results} redirect={"/draft-configuration"}>
                <Suspense fallback={<Spinner />}>
                  <DraftResult />
                </Suspense>
              </ProtectRouter>
            }
          />
          <Route
            path={PLAYERS}
            element={
              <Suspense fallback={""}>
                <Players />
              </Suspense>
            }
          />
          <Route
            path={DRAFT_VALUE_CHART}
            element={
              <Suspense fallback={<Spinner />}>
                <DraftValueChart />
              </Suspense>
            }
          />
          <Route path={TEAM_NEEDS} element={<TeamNeeds />} />
          <Route path={TEAM_LIST} element={<TeamList />} />
          <Route path={MULTI_PLAYER_FIND} element={<MultiPlayerFind />} />
          <Route
            path={MULTI_PLAYER_JOIN_TEAM_ID}
            element={<MultiPlayerTeam />}
          />
          <Route path={LIVE_DRAFT} element={<LiveDraft />} />
          <Route
            path={"/profile"}
            element={
              <ProtectRouter access={success} redirect={"/"}>
                <ProfileLayout />
              </ProtectRouter>
            }
          >
            <Route index path={"/profile/info"} element={<PersonalInfo />} />
            <Route path={PROFILE_BADGES} element={<Badges />} />

            <Route
              path={`${PROFILE_DRAFT_EVENTS}`}
              element={true ? <DraftEvents /> : <PayPalRedirect />}
            >
              <Route
                index
                path={`${PROFILE_DRAFT_EVENTS_CREATE}`}
                element={<CreateEvents />}
              />
              <Route path={PROFILE_DRAFT_EVENTS_MY} element={<MyEvents />}>
                <Route index element={<EventList />} />
                <Route
                  path={`${PROFILE_DRAFT_EVENTS_MY_EDIT}/:id`}
                  element={<EditEvent />}
                />
                <Route
                  path={`${PROFILE_DRAFT_EVENTS_MY_VIEW}/:id`}
                  element={<ViewEvent />}
                />
              </Route>
            </Route>

            <Route path={PROFILE_PODCASTS} element={<Podcasts />} />
            <Route path={PROFILE_PAYMENT} element={<Payment />} />
            <Route path={PROFILE_SUBSCRIPTION} element={<Subscription />} />
            <Route
              path={PROFILE_SUBSCRIPTION_RETURN}
              element={<PayPalRedirect />}
            />

            <Route path={PROFILE_PASSWORD} element={<Password />} />
            <Route path={PROFILE_LOGOUT} element={<Logout />} />
          </Route>
        </Route>
        <Route
          path={SIGH_UP}
          element={
            <PrivateRouter>
              <SignUp />
            </PrivateRouter>
          }
        />
        <Route
          path={SIGN_IN}
          element={
            <PrivateRouter>
              <SignIn />
            </PrivateRouter>
          }
        />
        <Route path={FORGOT_PASS} element={<ForgotPass />} />
        <Route path={RESET_PASS} element={<ResetPass />} />
        <Route path={NOT_FOUND} element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Router;
