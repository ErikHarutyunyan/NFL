import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
// styles
import {
  AuthContent,
  AuthWrap,
  BtnWrap,
  CheckWrap,
  Error,
  InputWrap,
  NavigationList,
} from "../Auth.styles";
// images
import logoMid from "../../../assets/img/logoMid.png";
import { EyeCloseIcon, EyeOpenIcon } from "../../../components/Icons/Icons";
import { CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../../app/features/user/userActions";
import { selectUser } from "../../../app/features/user/userSlice";

const schema = yup.object().shape({
  name: yup
    .string()
    .max(40)
    .min(3, "First Name must be at least 3 characters")
    .required("Required First Name"),
  surname: yup
    .string()
    .max(40)
    .min(3, "Last Name must be at least 3 characters")
    .required("Required Last Name"),
  twitter: yup
    .string()
    .required("Required Twitter handle")
    .matches(/^@?(\w){1,15}$/, "Not valid twitter handle"),
  email: yup
    .string()
    .email("Email should have correct format")
    .required("Email is a required field"),
  password: yup
    .string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum."),
  confirmPwd: yup
    .string()
    .required("Password is mandatory")
    .oneOf([yup.ref("password")], "Passwords does not match"),
  acceptTerms: yup
    .bool()
    .oneOf([true], "I agree to the Terms of Service & Privacy Policy required"),
});

const SignUp = () => {
  const [loader, setLoader] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { success, error, loading } = useSelector(selectUser);
   
  const dispatch = useDispatch()
  const navigate = useNavigate()
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
    const {
      email: username,
      name: first_name,
      surname: last_name,
      twitter: twitter_link,
      password,
    } = data;
    dispatch(registerUser({ username, first_name, last_name, twitter_link , password}));
  };
  useEffect(() => {
    if (success) {
        setLoader(!loader);
        navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success]);
  return (
    <AuthWrap>
      <AuthContent>
        <Link to={"/"}>
          <img src={logoMid} alt="logo" />
        </Link>
        <h2>Sign Up</h2>
        {error && (
          <Error message={error}>
            {Object.entries(error) 
              .map(([key, value]) => {
                
                return (
              <span>{`${key}: ${value}`}</span>)
              })}
          </Error>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputWrap>
            <input {...register("name")} placeholder="Name" />

            <Error message={errors.name?.message}>
              {errors.name?.message ? errors.name?.message : <br />}
            </Error>
          </InputWrap>
          <InputWrap>
            <input {...register("surname")} placeholder="Surname" />

            <Error message={errors.surname?.message}>
              {errors.surname?.message ? errors.surname?.message : <br />}
            </Error>
          </InputWrap>
          <InputWrap>
            <input {...register("twitter")} placeholder="Twitter handle" />

            <Error message={errors.twitter?.message}>
              {errors.twitter?.message ? errors.twitter?.message : <br />}
            </Error>
          </InputWrap>
          <InputWrap>
            <input
              {...register("email")}
              placeholder="Email"
              autoComplete={"off"}
            />

            <Error message={errors.email?.message}>
              {errors.email?.message ? errors.email?.message : <br />}
            </Error>
          </InputWrap>
          <InputWrap>
            <div>
              <input
                {...register("password")}
                placeholder="Password"
                autoComplete="new-password"
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
                autoComplete="new-password"
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
          <CheckWrap className="sign-up-checkwrap">
            <input
              name="acceptTerms"
              type="checkbox"
              {...register("acceptTerms")}
            />
            <Link to={"/terms-service"}> Terms of Service</Link>&
            <Link to={"/privacy-policy"}>Privacy Policy</Link>
            <Error message={errors.acceptTerms?.message}>
              {errors.acceptTerms?.message ? (
                errors.acceptTerms?.message
              ) : (
                <br />
              )}
            </Error>
          </CheckWrap>
          <BtnWrap>
            <button type="submit">
              {loading ? (
                <CircularProgress size={17} color={"inherit"} />
              ) : (
                <>Sign Up</>
              )}
            </button>
          </BtnWrap>
        </form>

        <NavigationList>
          <li>
            Don’t have an account?
            <Link to={"/sign-in"}> {"Sign In"}</Link>
          </li>
        </NavigationList>
      </AuthContent>
    </AuthWrap>
  );
};

export default SignUp;
