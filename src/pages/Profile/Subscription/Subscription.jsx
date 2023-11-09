import React from "react";
// Styles
import { PlanWrap, Wrapper, PlanHead } from "./Subscription.styles";

import PlanSubscription from "../../../components/PlanSubscription";
import { useEffect } from "react";
import {
  createPayment,
  planPost,
} from "../../../app/features/plan/planActions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { resetPlanCreatePayments, selectPlan } from "../../../app/features/plan/planSlice";

const Subscription = () => {
  const dispatch = useDispatch();
  const { plans, createPayments } = useSelector(selectPlan);
  console.log('createPayments :', createPayments);

  useEffect(() => {
    // loadPayPal();
    dispatch(planPost());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (createPayments) {
      
      window.open(createPayments.links[1].href, "_blank", "noreferrer");
      dispatch(resetPlanCreatePayments());
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [createPayments]);
  // async function loadPayPal() {
  //   try {
  //     await loadScript({
  //       clientId: CLIENT_ID_PAYPAL,
  //       currency: CURRENCY,
  //     });
  //     setIsPaypal(true)
  //     console.log("paypal loadend");
  //   } catch (error) {
  //     console.error("failed to load the PayPal JS SDK script", error);
  //     setIsPaypal(false)
  //   }
  // }

  const handlePayPal = async (plan) => {
   
    dispatch(createPayment({ plan_id: plan.plan_id, isYear: true }));

  };
  
  return (
    <Wrapper>
      <PlanHead>
        <h2>Subscription</h2>
        <p>
          A subscription begins when you register and ends 12 months later if
          you choose single year. For the subscription price, you can host as
          many multi user (32 people picking for 32 teams) events, and load a
          spreadsheet of your own player rankings into the que.
        </p>
      </PlanHead>

      <PlanWrap>
        {plans.map((plan) => {
          return (
            <PlanSubscription
              key={plan.id}
              planName={plan.name}
              planPrice={plan.price_per_year}
              planTime={plan.name}
              planInfo={[
                "Subscriber can schedule live 32/32 events",
                "Upload their own player ranks into que for 32/32 events",
              ]}
             
              idPay={plan.id}
              handlePayPal={handlePayPal}
              createPayments={createPayments}
            />
          );
        })}
        {/* <PlanSubscription
          planName="Year"
          planPrice="29.99"
          planTime="year"
          planInfo={[
            "Subscriber can schedule live 32/32 events",
            "Upload their own player ranks into que for 32/32 events",
          ]}
          isPaypal={isPaypal}
          handlePayPal={handlePayPal}
        />
        <PlanSubscription
          planName="Lifetime"
          planPrice="100"
          planTime="lifetime"
          isPaypal={isPaypal}
          planInfo={[
            "Subscriber can schedule live 32/32 events",
            "Upload their own player ranks into que for 32/32 events",
          ]}
          handlePayPal={handlePayPal}
        /> */}
      </PlanWrap>
    </Wrapper>
  );
};

export default Subscription;
