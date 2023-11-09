import React, { useLayoutEffect } from "react";
// Styles
import { Wrapper } from "./PayPalRedirect.styles";
import { useLocation, useNavigate } from "react-router-dom";
import Spinner from "../../../components/Spinner/Spinner";
import { useDispatch } from "react-redux";
import { executePayment } from "../../../app/features/plan/planActions";
import { useSelector } from "react-redux";
import { resetPlan, selectPlan } from "../../../app/features/plan/planSlice";
import { PROFILE, PROFILE_SUBSCRIPTION } from "../../../router/route-path";
import { getUserMe } from "../../../app/features/user/userActions";
const PayPalRedirect = () => {
  const { loading, error, message, subscribeStart } = useSelector(selectPlan);
  const location = useLocation();
  let params = new URLSearchParams(location.search);
  let payment_intent_id = params.get("paymentId");
  const navigation = useNavigate();
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    dispatch(executePayment({ payment_intent_id }));
    setTimeout(()=> {
        dispatch(getUserMe());
    },1000)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleNavigation = (page) => {
    navigation(page);
    dispatch(resetPlan());
  };
  return (
    <Wrapper>
      {loading && !subscribeStart ? (
        <Spinner />
      ) : !error ? (
        <>
          <h2>Subscribed</h2>
          <button onClick={() => handleNavigation(PROFILE)}>
            Go back to Profile Info
          </button>
        </>
      ) : (
        <>
          <h2>{message}</h2>
          <button onClick={() => handleNavigation(PROFILE_SUBSCRIPTION)}>
            Go back to Subscription
          </button>
        </>
      )}
    </Wrapper>
  );
};

export default PayPalRedirect;
