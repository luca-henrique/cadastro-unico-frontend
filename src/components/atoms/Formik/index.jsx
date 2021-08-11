import React from "react"


const Form = withFormik({
    mapPropsToValues: ({
      website,
      name,
      surname,
      email,
      course,
      password,
      confirmPassword,
    }) => {
      return {
        website: website || "",
        name: name || "",
        surname: surname || "",
        email: email || "",
        course: course || "",
        password: password || "",
        confirmPassword: confirmPassword || ""
      };
    },
  
    validationSchema: yup.object().shape(validationsForm),
  
    handleSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 1000);
    }
  })(form);



  export default withStyles(styles)(Form);