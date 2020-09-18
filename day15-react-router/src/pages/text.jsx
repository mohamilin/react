import * as React from "react";
import * as ReactDOM from "react-dom";

import { Input, Checkbox } from "@progress/kendo-react-inputs";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      success: false,
    };
  }
  render() {
    const usernameValidationMessage =
      "Your username should contain only letters";
    const passwordValidationMessage =
      "Please enter password between 6 and 16 characters";
    const checkboxTermsAndConditionsMessage =
      "Please indicate that you accept the Terms and Conditions";
    const checkboxsignUpToNewsletterMessage =
      "Please sign up to the Newsletter";

    return (
      <div className="row example-wrapper">
        <div className="col-xs-12 col-sm-8 offset-sm-2 example-col">
          <form className="k-form" onSubmit={this.handleSubmit}>
            <fieldset className="k-form-fieldset">
              <legend className="k-form-legend">Create new account:</legend>
              <div className="mb-3">
                <Input
                  name="username"
                  style={{ width: "100%" }}
                  label="First Name"
                  pattern={"[A-Za-z]+"}
                  minLength={2}
                  required={true}
                  validationMessage={usernameValidationMessage}
                />
              </div>
              <div className="mb-3">
                <Input
                  name="password"
                  type="password"
                  style={{ width: "100%" }}
                  label="Password"
                  required={true}
                  minLength={6}
                  maxLength={18}
                  validationMessage={passwordValidationMessage}
                />
              </div>
              <div className="mb-3">
                <Input
                  name="confirmPassword"
                  type="password"
                  style={{ width: "100%" }}
                  label="Confirm Password"
                  required={true}
                  minLength={6}
                  maxLength={18}
                  validationMessage={passwordValidationMessage}
                />
              </div>
              <div className="mb-3">
                <Input
                  name="email"
                  type="email"
                  style={{ width: "100%" }}
                  label="Email address"
                  required={true}
                />
              </div>
              <div className="mb-3">
                <Checkbox
                  id="ch1"
                  name="checkbox"
                  required={true}
                  validationMessage={checkboxTermsAndConditionsMessage}
                >
                  <label
                    className="k-checkbox-label"
                    style={{ display: "inline-block" }}
                    for="ch1"
                  >
                    By clicking <a href="#">Sign Up</a>, you agree to our{" "}
                    <a href="#">Terms and Conditions</a>.
                  </label>
                </Checkbox>
              </div>
              <div className="mb-3">
                <Checkbox
                  id="ch2"
                  name="checkbox2"
                  required={true}
                  label={"Sign-up to our newsletter!"}
                  validationMessage={checkboxsignUpToNewsletterMessage}
                />
              </div>
            </fieldset>
            <input
              type="submit"
              className="k-button k-primary"
              value="Sign up"
            />
          </form>
        </div>
        {this.state.success && (
          <div className="alert alert-success" style={{ position: "absolute" }}>
            Form submitted!
          </div>
        )}
      </div>
    );
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ success: true });
    setTimeout(() => {
      this.setState({ success: false });
    }, 3000);
  };
}

ReactDOM.render(<App />, document.querySelector("my-app"));
