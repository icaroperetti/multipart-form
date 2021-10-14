import { useHistory } from "react-router-dom";
import * as C from "./styles";
import { useForm, FormActions } from "../../contexts/FormContext";
import { Theme } from "../../components/Theme";
import { ChangeEvent, useEffect } from "react";

export const FormStep3 = () => {
  const history = useHistory();
  const { state, dispatch } = useForm();

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 3,
    });
  }, []);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value,
    });
  };

  const handleNextStep = () => {
    if (state.name !== "") {
      history.push("/step2");
    } else {
      alert("Please enter your name");
    }
  };

  return (
    <Theme>
      <C.Container>
        <p>Step 3/3</p>
        <h1>Let's start with your name</h1>
        <p>Fill the field below with your name.</p>

        <hr />

        <label>
          Your name:
          <input
            type="text"
            autoFocus
            value={state.name}
            onChange={handleNameChange}
          />
        </label>

        <button onClick={handleNextStep}>Next</button>
      </C.Container>
    </Theme>
  );
};
