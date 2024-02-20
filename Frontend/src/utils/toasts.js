import { toast } from "react-toastify";

export const warnToast = (message) => {
  toast.warn(message);
};

export const successToast = (message) => {
  toast.success(message);
};
