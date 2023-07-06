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
import { EyeCloseIcon, EyeOpenIcon } from "../../../components/Icons/Icons";
import { CircularProgress } from "@mui/material";

const schema = yup.object().shape({
  password: yup
    .string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum."),
  confirmPwd: yup
    .string()
    .required("Password is mandatory")
    .oneOf([yup.ref("password")], "Passwords does not match"),
});

const ResetPass = () => {
  const [loader, setLoader] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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
        <h2 className="forgot-pass">Reset password</h2>
        <h3>Type your new password here.</h3>
        {errorMsg && <Error>{errorMsg}</Error>}
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputWrap>
            <div>
              <input
                {...register("password")}
                placeholder="Password"
                type={showPassword ? "text" : "password"}
              />

              <button
                type="button"
                className="pass-eye"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOpenIcon /> : <EyeCloseIcon />}
              </button>
            </div>
            <Error message={errors.password?.message}>
              {errors.password?.message ? errors.password?.message : <br />}
            </Error>
          </InputWrap>
          <InputWrap>
            <div>
              <input
                {...register("confirmPwd")}
                placeholder="Repeat password"
                type={showConfirmPassword ? "text" : "password"}
              />
              <button
                type="button"
                className="pass-eye"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOpenIcon /> : <EyeCloseIcon />}
              </button>
            </div>
            <Error message={errors.confirmPwd?.message}>
              {errors.confirmPwd?.message ? errors.confirmPwd?.message : <br />}
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

export default ResetPass;
