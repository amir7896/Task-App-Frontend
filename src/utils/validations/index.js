export const validateForm = (form) => {
  const errors = {
    title: "",
    description: "",
  };

  if (form.title.trim() === "") {
    errors.title = "Title is required";
  }

  if (form.description.trim() === "") {
    errors.description = "Description is required";
  }

  return errors;
};

export const hasErrors = (errors) => {
  return Object.values(errors).some((error) => error !== "");
};
