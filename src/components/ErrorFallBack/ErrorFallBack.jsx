import React from "react";
import { useNavigate } from "react-router-dom";
import { ErrorWrapper } from "./ErrorFallBack.styles.";

const ErrorFallBack = ({
  error,
  resetErrorBoundary,
  link = "/draft-configuration",
}) => {
  const navigate = useNavigate();
  return (
    <ErrorWrapper role="alert">
      <h4>Something went wrong:</h4>
      <p>{error.message}</p>
      <button onClick={() => navigate(`${link}`)}>Try again</button>
    </ErrorWrapper>
  );
};

export default ErrorFallBack;
