import React, { useCallback, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schema_event } from "./schema";
import {
  BtnWrap,
  ErrorMessage,
  ErrorWrap,
  FormWrap,
  GenerateEventBlock,
  InputBlock,
  InputContainer,
  InputWrap,
} from "./DraftEvents.styles";
import { useSelector } from "react-redux";
import { selectDraftEvents } from "../../../app/features/draftEvents/draftEventsSlice";
import { generateID } from "../../../utils/utils";
import excelIcon from "../../../assets/img/excelIcon.png";
import { selectUser } from "../../../app/features/user/userSlice";
import { useDispatch } from "react-redux";
import { PROFILE_DRAFT_EVENTS_MY } from "../../../router/route-path";
import { useNavigate } from "react-router-dom";
import { draftEventsPost } from "../../../app/features/draftEvents/draftEventsActions";

const CreateEvents = () => {
  const { loading, error } = useSelector(selectDraftEvents);
  const {
    userInfo: { twitter_link },
  } = useSelector(selectUser);

  const [eventId, setEventId] = useState("");
  const [eventName, setEventName] = useState("");
  const [eventFile, setEventFile] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    // onSubmit
    resolver: yupResolver(schema_event, {
      stripUnknown: true,
      abortEarly: false,
    }),
  });

  const handleInputChange = useCallback((name, val) => {
    setValue(name, val, { shouldDirty: true });
    clearErrors(name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const generateIdEvent = () => {
    const id = generateID();
    handleInputChange("event_id", id);
    setEventId(id);
  };
  const generateEventName = () => {
    const id = generateID(10);
    let nameEvent = `${twitter_link}-${id}`;
    handleInputChange("name", nameEvent);
    setEventName(nameEvent);
  };
  function objectToFormData(obj) {
    const formData = new FormData();

    Object.entries(obj).forEach(([key, value]) => {
      
      formData.append(key, value);
    });

    return formData;
  }
  const submitForm = async (data) => {
    data.place_count = 32;
    const formData = objectToFormData(data);
   
    for (const value of formData.values()) {
      console.log(value);
    }
    dispatch(draftEventsPost(formData));
    setEventId("");
    setEventFile(null);
    reset();
    navigate(`${PROFILE_DRAFT_EVENTS_MY}`);
  };
  return (
    <div>
      <FormWrap onSubmit={handleSubmit(submitForm)}>
        {error && (
          <ErrorWrap>
            <ErrorMessage visible={error}>{error}</ErrorMessage>
          </ErrorWrap>
        )}
        <InputBlock>
          <InputContainer>
            <label>Generate Event ID</label>
            {errors?.event_id?.message && (
              <ErrorMessage visible={errors?.event_id?.message}>
                {errors?.event_id?.message}
              </ErrorMessage>
            )}
            <GenerateEventBlock>
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g id="fluent-emoji-high-contrast:id-button">
                    <g id="Group">
                      <path
                        id="Vector"
                        d="M10.4027 8.35357C10.4027 7.94824 10.7313 7.62024 11.1361 7.62024H12.8987C15.3259 7.62024 17.3137 9.55997 17.3137 11.9776C17.3137 14.3941 15.3259 16.3344 12.8987 16.3344H11.1355C10.7302 16.3344 10.4022 16.0058 10.4022 15.601V8.35304L10.4027 8.35357ZM11.8694 14.801C11.8694 14.8378 11.8993 14.8677 11.9361 14.8677H12.8987C14.5382 14.8677 15.847 13.5626 15.847 11.977C15.847 10.3914 14.5382 9.08637 12.8987 9.08637H11.9355C11.9267 9.08637 11.918 9.08811 11.9099 9.0915C11.9018 9.09488 11.8944 9.09984 11.8882 9.10609C11.882 9.11233 11.8771 9.11975 11.8738 9.1279C11.8705 9.13605 11.8688 9.14477 11.8689 9.15357L11.8694 14.801ZM8.47153 7.67464C8.56785 7.67443 8.66327 7.69321 8.75232 7.72991C8.84138 7.76661 8.92233 7.82051 8.99054 7.88852C9.05875 7.95653 9.11288 8.03732 9.14984 8.12627C9.1868 8.21522 9.20586 8.31058 9.20593 8.40691L9.21339 15.5456C9.2136 15.7401 9.13655 15.9267 8.99917 16.0644C8.86179 16.202 8.67535 16.2795 8.48086 16.2797C8.28637 16.2799 8.09976 16.2029 7.96208 16.0655C7.8244 15.9281 7.74694 15.7417 7.74673 15.5472L7.73926 8.40851C7.73912 8.3122 7.75795 8.21682 7.79467 8.12779C7.8314 8.03876 7.8853 7.95784 7.95329 7.88965C8.02129 7.82145 8.10205 7.76732 8.19097 7.73034C8.27989 7.69335 8.37522 7.67478 8.47153 7.67464Z"
                        fill="#0E1118"
                      />
                      <path
                        id="Vector_2"
                        d="M6.66667 4C6.31648 4 5.96971 4.06898 5.64618 4.20299C5.32264 4.337 5.02867 4.53343 4.78105 4.78105C4.28095 5.28115 4 5.95942 4 6.66667V17.3333C4 18.0406 4.28095 18.7189 4.78105 19.219C5.02867 19.4666 5.32264 19.663 5.64618 19.797C5.96971 19.931 6.31648 20 6.66667 20H17.3333C18.0406 20 18.7189 19.719 19.219 19.219C19.719 18.7189 20 18.0406 20 17.3333V6.66667C20 6.31648 19.931 5.96971 19.797 5.64618C19.663 5.32264 19.4666 5.02867 19.219 4.78105C18.9713 4.53343 18.6774 4.337 18.3538 4.20299C18.0303 4.06898 17.6835 4 17.3333 4H6.66667ZM5.06667 6.66667C5.06667 6.24232 5.23524 5.83535 5.5353 5.5353C5.83535 5.23524 6.24232 5.06667 6.66667 5.06667H17.3333C17.7577 5.06667 18.1646 5.23524 18.4647 5.5353C18.7648 5.83535 18.9333 6.24232 18.9333 6.66667V17.3333C18.9333 17.7577 18.7648 18.1646 18.4647 18.4647C18.1646 18.7648 17.7577 18.9333 17.3333 18.9333H6.66667C6.24232 18.9333 5.83535 18.7648 5.5353 18.4647C5.23524 18.1646 5.06667 17.7577 5.06667 17.3333V6.66667Z"
                        fill="#0E1118"
                      />
                    </g>
                  </g>
                </svg>
              </span>
              <InputWrap
                error={errors?.event_id?.message}
                placeholder="Create Session ID"
                className="event-id"
                {...register("event_id")}
              />

              {!eventId ? (
                <span className="generate" onClick={generateIdEvent}>
                  Generate
                </span>
              ) : (
                <span className="generate">
                  <svg
                    onClick={() => navigator.clipboard.writeText(eventId)}
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M5 22C4.45 22 3.979 21.8043 3.587 21.413C3.19567 21.021 3 20.55 3 20V6H5V20H16V22H5ZM9 18C8.45 18 7.97933 17.8043 7.588 17.413C7.196 17.021 7 16.55 7 16V4C7 3.45 7.196 2.979 7.588 2.587C7.97933 2.19567 8.45 2 9 2H18C18.55 2 19.021 2.19567 19.413 2.587C19.8043 2.979 20 3.45 20 4V16C20 16.55 19.8043 17.021 19.413 17.413C19.021 17.8043 18.55 18 18 18H9ZM9 16H18V4H9V16Z"
                      fill="#004EA3"
                    />
                  </svg>
                </span>
              )}
            </GenerateEventBlock>
          </InputContainer>
          <InputContainer>
            <label>Name Event</label>
            {errors?.name?.message && (
              <ErrorMessage visible={errors?.name?.message}>
                {errors?.name?.message}
              </ErrorMessage>
            )}
            <GenerateEventBlock>
              <InputWrap
                error={errors?.name?.message}
                placeholder="Name Event"
                {...register("name")}
              />
              {!eventName ? (
                <span className="generate" onClick={generateEventName}>
                  Generate
                </span>
              ) : (
                <span className="generate">
                  <svg
                    onClick={() => navigator.clipboard.writeText(eventName)}
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M5 22C4.45 22 3.979 21.8043 3.587 21.413C3.19567 21.021 3 20.55 3 20V6H5V20H16V22H5ZM9 18C8.45 18 7.97933 17.8043 7.588 17.413C7.196 17.021 7 16.55 7 16V4C7 3.45 7.196 2.979 7.588 2.587C7.97933 2.19567 8.45 2 9 2H18C18.55 2 19.021 2.19567 19.413 2.587C19.8043 2.979 20 3.45 20 4V16C20 16.55 19.8043 17.021 19.413 17.413C19.021 17.8043 18.55 18 18 18H9ZM9 16H18V4H9V16Z"
                      fill="#004EA3"
                    />
                  </svg>
                </span>
              )}
            </GenerateEventBlock>
          </InputContainer>
        </InputBlock>

        <InputContainer>
          <label>Date</label>
          {errors?.date?.message && (
            <ErrorMessage visible={errors?.date?.message}>
              {errors?.date?.message}
            </ErrorMessage>
          )}
          <InputWrap
            error={errors?.date?.message}
            type="datetime-local"
            placeholder="Choose a Draft start date"
            {...register("date")}
          />
        </InputContainer>
        <InputContainer>
          <h6>Upload your custom list of players</h6>
          <p className="event-info">
            Lorem Ipsum is simply dummy <span>guide how to import</span> list
            and typesetting industry.
          </p>

          {errors?.file?.message && (
            <ErrorMessage visible={errors?.file?.message}>
              {errors?.file?.message}
            </ErrorMessage>
          )}
          <InputWrap
            error={errors?.file?.message}
            type="file"
            id="filePlayer"
            accept=".xlsx, .xls, .csv"
            placeholder="Choose a Draft start date"
            style={{ display: "none" }}
            autoComplete="off"
            // {...register("file")}
            onChange={(e) => {
              
              const file = Array.from(e.target.files);

              handleInputChange("file", e.target.files[0]);
              setEventFile(...file);
            }}
          />

          <div className="event-file">
            <img src={excelIcon} alt="icon" />
            {eventFile?.name ? (
              <span>{eventFile.name}</span>
            ) : (
              <label htmlFor="filePlayer">
                <span>Import list</span>
              </label>
            )}
            {eventFile?.name && (
              <div
                onClick={() => {
                  setEventFile(null);
                  handleInputChange("file", null);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M7.99967 13.3334C5.05967 13.3334 2.66634 10.94 2.66634 8.00004C2.66634 5.06004 5.05967 2.66671 7.99967 2.66671C10.9397 2.66671 13.333 5.06004 13.333 8.00004C13.333 10.94 10.9397 13.3334 7.99967 13.3334ZM7.99967 1.33337C4.31301 1.33337 1.33301 4.31337 1.33301 8.00004C1.33301 11.6867 4.31301 14.6667 7.99967 14.6667C11.6863 14.6667 14.6663 11.6867 14.6663 8.00004C14.6663 4.31337 11.6863 1.33337 7.99967 1.33337ZM9.72634 5.33337L7.99967 7.06004L6.27301 5.33337L5.33301 6.27337L7.05967 8.00004L5.33301 9.72671L6.27301 10.6667L7.99967 8.94004L9.72634 10.6667L10.6663 9.72671L8.93967 8.00004L10.6663 6.27337L9.72634 5.33337Z"
                    fill="#004EA3"
                  />
                </svg>
              </div>
            )}
          </div>
        </InputContainer>
        <BtnWrap>
          <button type="submit">Create Draft Event</button>
        </BtnWrap>
      </FormWrap>
    </div>
  );
};

export default CreateEvents;
