import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
// styles
import {
  AuthContent,
  AuthWrap,
  BtnWrap,
  Error,
  InputWrap,
} from "../Auth.styles";
// images
import logoMid from "../../../assets/img/logoMid.png";
import { CircularProgress } from "@mui/material";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Email should have correct format")
    .required("Required"),
});

const ForgotPass = () => {
  const [loader, setLoader] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    // onSubmit
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    // alert(JSON.stringify(data));
    setLoader(!loader);
    setErrorMsg("Your email address or password is not correct");
   
  };
  return (
    <AuthWrap>
      <AuthContent>
        <Link to={"/"}>
          <img src={logoMid} alt="logo" />
        </Link>
        <h2 className="forgot-pass">Forgot password?</h2>
        <h3>Reset your password. Fill your email here.</h3>
        {errorMsg && <Error>{errorMsg}</Error>}
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputWrap>
            <input {...register("email")} placeholder="Email" />

            <Error message={errors.email?.message}>
              {errors.email?.message ? errors.email?.message : <br />}
            </Error>
          </InputWrap>
          <BtnWrap className="forgot-submit">
            <button type="submit">
              {loader && <CircularProgress size={17} color={"inherit"} />}
              Send reset link to my email
            </button>
          </BtnWrap>
        </form>
        <button onClick={() => navigate(-1)}>Back</button>
      </AuthContent>
    </AuthWrap>
  );
};

export default ForgotPass;
