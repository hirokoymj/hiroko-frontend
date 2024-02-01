import React, { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Grid } from "@material-ui/core";
import { FormProvider, useForm } from "react-hook-form";
import Container from "@material-ui/core/Container";

import { categoryFormSchema } from "./validation/formValidations";
import { useCategoryForm } from "Hooks/useCategoryForm";
import { FormInputText } from "Components/Forms/FormInputText";

export const CategoryForm = () => {
  const defaultValues = { name: "", abbr: "" };
  const methods = useForm({
    resolver: yupResolver(categoryFormSchema),
    defaultValues,
  });
  const { onSubmit } = useCategoryForm();

  const {
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = methods;

  useEffect(() => {
    if (isSubmitSuccessful) reset({ ...defaultValues });
  }, [isSubmitSuccessful, reset]);

  return (
    <Container maxWidth="xs" style={{ padding: "24px" }}>
      <FormProvider {...methods}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormInputText label="Category name" name="name" />
          </Grid>
          <Grid item xs={12}>
            <FormInputText label="Abbreviation" name="abbr" />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSubmit(onSubmit)}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </FormProvider>
    </Container>
  );
};
