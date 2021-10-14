import { useHistory, Link } from "react-router-dom";
import * as C from "./styles";
import { useForm, FormActions } from "../../contexts/FormContext";
import { Theme } from "../../components/Theme";
import { ChangeEvent, useEffect } from "react";

export const FormStep3 = () => {
  const history = useHistory();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === "") {
      history.push("/");
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 2,
      });
    }
  }, []);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value,
    });
  };

  const handleGitChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setGithub,
      payload: e.target.value,
    });
  };

  const handleNextStep = () => {
    if (state.email !== "" && state.github !== "") {
      console.log(state);
    } else {
      alert("Please fill all the inputs");
    }
  };

  return (
    <Theme>
      <C.Container>
        <p>Step 3/3</p>
        <h1>Cool {state.name} where we can find you?</h1>
        <p>Please, fill the fields below with your contact.</p>

        <hr />

        <label>
          What is your email?:
          <input
            type="email"
            value={state.email}
            onChange={handleEmailChange}
          />
        </label>

        <label>
          What is your github?:
          <input type="url" value={state.github} onChange={handleGitChange} />
        </label>

        <Link to="/step2" className="backButton">
          Voltar
        </Link>
        <button onClick={handleNextStep}>Enviar</button>
      </C.Container>
    </Theme>
  );
};
