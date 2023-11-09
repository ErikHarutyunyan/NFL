import React, { useState } from "react";
// Styles
import {
  Wrapper,
  PlanName,
  PlanInfo,
  PlanPrice,
  PlanButton,
} from "./PlanSubscription.styles";
// Img
import checkIcon from "../../assets/img/check.png";
import payPal from "../../assets/img/PayPal.png";
import planIcon from "../../assets/img/planIcon.png";
import { useRef } from "react";
import { useEffect } from "react";
import { CURRENCY } from "../../config/config";
import Spinner from "../Spinner/Spinner";
import TokenService from "../../service/token.service";
const PlanSubscription = ({
  icon = planIcon,
  planName = "Plan name",
  idPay = 0,
  planInfo = [
    "Subscriber can schedule live 32/32 events",
    "Upload their own player ranks into que for 32/32 events",
  ],
  planTime = "year",
  planPrice = "32.21",
  handlePayPal = (f) => f,
  createPayments,
}) => {
  const [loading, setLoading] = useState(false);
  const user = TokenService.getUser();
  const userSubscription = user?.user_subscription;
  console.log('user :', user);

  useEffect(() => {
    if(createPayments !== null)  {
      setLoading(false)
    }
  }, [createPayments]);
  return (
    <Wrapper>
      <PlanName>
        <img src={icon} alt={planName} />
        <h3>{planName}</h3>
      </PlanName>
      <PlanInfo>
        {planInfo.map((info, idx) => {
          return (
            <div key={info + idx}>
              <img src={checkIcon} alt="check" />
              <p>{info}</p>
            </div>
          );
        })}
      </PlanInfo>
      <PlanPrice>
        <p>
          ${planPrice} <span> / {planTime}</span>
        </p>
      </PlanPrice>
      <PlanButton
        onClick={() => {
          handlePayPal({ plan_id: idPay, isYear: true, name: planName });
          setLoading(true);
        }}
        disabled={userSubscription?.plan.id === idPay}
      >
        {loading ? (
          <Spinner marginVert={"0px"} size={"20px"} />
        ) : (
          <>
            <p>Pay with</p>
            <img src={payPal} alt={"pay-pal"} />
          </>
        )}
      </PlanButton>
    </Wrapper>
  );
};

export default PlanSubscription;
