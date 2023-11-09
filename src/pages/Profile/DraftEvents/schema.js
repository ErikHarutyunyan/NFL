import { object, string,mixed } from "yup";
export const schema_event = object().shape({
  event_id: string().required("Event ID is a required field"),
  name: string().required("Name event is a required field"),
  date: string().required("Date is a required field"),
  file: mixed()
    .required("File is required"),
});
