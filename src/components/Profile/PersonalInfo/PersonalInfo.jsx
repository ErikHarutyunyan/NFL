import React from "react";
import { InputWrap, ProfileTitle } from "../Profile.styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Error } from "../../../pages/auth/Auth.styles";
import { useDispatch, useSelector } from "react-redux";
import { userUpdate } from "../../../app/features/user/userActions";
import { CircularProgress } from "@mui/material";
import { selectUser } from "../../../app/features/user/userSlice";

const schema = yup.object().shape({
  first_name: yup
    .string()
    .max(40)
    .min(3, "First Name must be at least 3 characters"),
  last_name: yup
    .string()
    .max(40)
    .min(3, "Last Name must be at least 3 characters"),
  twitter_link: yup.string().required("Required Twitter handle")
  .matches(/^@?(\w){1,15}$/, "Not valid twitter handle"),
  email: yup.string().email("Email should have correct format"),
});
const PersonalInfo = () => {
  const { loading,userInfo } = useSelector(selectUser);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    //  onSubmit
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(userUpdate(data));
    reset()
    
  };

  return (
    <>
      <ProfileTitle>Personal info</ProfileTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputWrap>
          <input
            {...register("first_name")}
            placeholder={`${userInfo?.first_name}`}
          />

          <Error message={errors.first_name?.message}>
            {errors.name?.message ? errors.first_name?.message : <br />}
          </Error>
        </InputWrap>
        <InputWrap>
          <input
            {...register("last_name")}
            placeholder={`${userInfo?.last_name}`}
          />

          <Error message={errors.last_name?.message}>
            {errors.surname?.message ? errors.surname?.message : <br />}
          </Error>
        </InputWrap>
        <InputWrap>
          <input
            {...register("twitter_link")}
            placeholder={`I am ${userInfo?.twitter_link}`}
          />
          <Error message={errors.twitter_link?.message}>
            {errors.twitter_link?.message ? (
              errors.twitter_link?.message
            ) : (
              <br />
            )}
          </Error>
        </InputWrap>
        <InputWrap>
          <input placeholder={`${userInfo?.username}`} disabled />
        </InputWrap>
        <InputWrap>
          <button type="submit">
            {loading ? (
              <CircularProgress size={17} color={"inherit"} />
            ) : (
              <>Save Changes</>
            )}
          </button>
        </InputWrap>
      </form>
    </>
  );
};

export default PersonalInfo;
