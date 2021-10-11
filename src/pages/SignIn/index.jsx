import React from "react";
import {
  Button,
  LinearProgress,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Field, Form } from "formik";
import Formik from "~/components/atoms/Form/index.jsx";
import InputTextField from "~/components/atoms/Input/TextField/index.jsx";

import { CheckboxWithLabel, TextField } from "formik-material-ui";
import * as Yup from "yup";

const initialValues = {
  email: "",
  password: "",
  rememberMe: false,
};

const schema = Yup.object().shape({
  email: Yup.string().required("Campo obrigatório"),
  password: Yup.string().required("Campo obrigatório"),
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "30rem",
  },
  field: {
    marginTop: theme.spacing(2),
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
}));

function App() {
  const classes = useStyles();

  const onSubmit = (values) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
    }, 500);
  };

  return (
    <div className={classes.root}>
      <Formik initialValues={initialValues} onSubmit={onSubmit} schema={schema}>
        {({ submitForm, isSubmitting }) => (
          <Form className={classes.form}>
            <Typography variant="h4">Login</Typography>
            <InputTextField label={"Email"} name={"email"} type={"email"} />
            <Field
              className={classes.field}
              component={TextField}
              label="Password"
              name="password"
              type="password"
              variant="outlined"
            />
            <Field
              component={CheckboxWithLabel}
              Label={{
                label: <Typography variant="subtitle1">Lembre-me</Typography>,
              }}
              name="rememberMe"
              type="checkbox"
            />
            <Button
              className={classes.submitButton}
              color="primary"
              disabled={isSubmitting}
              disableElevation
              onClick={submitForm}
              variant="contained"
            >
              Submit
            </Button>
            {isSubmitting && <LinearProgress color="secondary" />}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;
