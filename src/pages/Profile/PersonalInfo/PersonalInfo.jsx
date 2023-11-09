import React, { useEffect } from "react";
import { InputWrap, ProfileTitle } from "../Profile.styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import { userUpdate } from "../../../app/features/user/userActions";
import { Error } from "../../auth/Auth.styles";
import { selectUser } from "../../../app/features/user/userSlice";
import twitterBlue from "../../../assets/img/twitter-blue.png";
import { getSetting } from "../../../app/features/draftConfig/drafConfigAction";
import { selectDraftConfig, setResetRound } from "../../../app/features/draftConfig/draftConfigSlice";

const schema = yup.object().shape({
  first_name: yup
    .string()
    .max(40)
    .min(3, "First Name must be at least 3 characters"),
  last_name: yup
    .string()
    .max(40)
    .min(3, "Last Name must be at least 3 characters"),
  twitter_link: yup
    .string()
    .required("Required Twitter handle")
    .matches(/^@?(\w){1,15}$/, "Not valid twitter handle"),
  email: yup.string().email("Email should have correct format"),
  allow_simulator: yup.bool(),
});
const PersonalInfo = () => {
  const { loading, userInfo } = useSelector(selectUser);
  const {allowSimulator:allowSimulatorAdmin} = useSelector(selectDraftConfig);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onBlur",

    //  onSubmit
    resolver: yupResolver(schema),
  });

  let allowSimulator = watch("allow_simulator");

  useEffect(() => {
    dispatch(getSetting());
    return () => dispatch(setResetRound());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  const onSubmit = (data) => {
    dispatch(userUpdate(data));
    reset();
  };
  useEffect(() => {
    if (userInfo) {
      setValue("first_name", userInfo?.first_name);
      setValue("last_name", userInfo?.last_name);
      setValue("twitter_link", userInfo?.twitter_link);
      setValue("allow_simulator", userInfo?.allow_simulator);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);

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
        <InputWrap className="twitter-wrap">
          <img src={twitterBlue} alt="twitter" />
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
        {allowSimulatorAdmin && (
          <InputWrap>
            <label>
              Allow trading simulator to simulator
              <input
                type="checkbox"
                checked={allowSimulator}
                {...register("allow_simulator")}
              />
            </label>
          </InputWrap>
        )}

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
