import { Formik, Field, Form, ErrorMessage, useFormik } from "formik";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const initialValues = {
    username: "",
    password: "",
    inputTextLabel: "",
    rememberMe: false,
    toggle: false,
    radioSelection: "",
    dropdownTitle: "",
  };

  const validateForm = (values) => {
    const errors = {};
    if (
      !values.username ||
      values.username.length > 12 ||
      values.username.length < 4
    ) {
      errors.username = "Required";
    }
    return errors;
  };

  const handleSubmit = (values) => {
    alert(JSON.stringify(values));
  };

  return (
    <div className="form_container">
      <div className="form_wrapper">
        <Formik
          initialValues={initialValues}
          validate={validateForm}
          onSubmit={handleSubmit}
        >
          <Form className="form">
            <div className="form_field">
              <label htmlFor="username">Username:</label>
              <Field type="text" id="username" name="username" />
              <ErrorMessage name="username" component="div" />
            </div>

            <div className="form_field">
              <label htmlFor="password">Password:</label>
              <Field type="password" id="password" name="password" />
              <ErrorMessage name="password" component="div" />
            </div>

            <div className="form_field">
              <label htmlFor="inputTextLabel">Input Text Label:</label>
              <Field type="text" id="inputTextLabel" name="inputTextLabel" />
              <ErrorMessage name="inputTextLabel" component="div" />
            </div>

            <div className="form_field">
              <label htmlFor="rememberMe">Remember Me:</label>
              <Field type="checkbox" id="rememberMe" name="rememberMe" />
            </div>

            <div className="form_field">
              <label htmlFor="toggle">Toggle:</label>
              <Field type="checkbox" id="toggle" name="toggle" />
            </div>

            <div className="form_field">
              <label htmlFor="radioSelection">Radio Selection:</label>
              <div>
                <label>
                  <Field
                    type="radio"
                    name="radioSelection"
                    value="radio selection 1"
                  />
                  Radio Selection 1
                </label>
              </div>
              <div>
                <label>
                  <Field
                    type="radio"
                    name="radioSelection"
                    value="radio selection 2"
                  />
                  Radio Selection 2
                </label>
              </div>
              <div>
                <label>
                  <Field
                    type="radio"
                    name="radioSelection"
                    value="radio selection 3"
                  />
                  Radio Selection 3
                </label>
              </div>
            </div>

            <div className="form_field">
              <label htmlFor="dropdownTitle">Dropdown Title:</label>
              <Field as="select" id="dropdownTitle" name="dropdownTitle">
                <option value="">Select an option</option>
                <option value="dropdown option 1">Dropdown Option 1</option>
                <option value="dropdown option 2">Dropdown Option 2</option>
              </Field>
            </div>

            <Button type="submit">Next</Button>
          </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default App;
