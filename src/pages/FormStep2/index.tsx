import { useHistory, Link } from "react-router-dom";
import * as C from "./styles";
import { useForm, FormActions } from "../../contexts/FormContext";
import { Theme } from "../../components/Theme";
import { SelectOption } from "../../components/SelectOption";
import { ChangeEvent, useEffect } from "react";

export const FormStep2 = () => {
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

  const handleNextStep = () => {
    if (state.name !== "") {
      history.push("/step3");
    } else {
      alert("Please enter your name");
    }
  };

  const setLevel = (level: number) => {
    dispatch({
      type: FormActions.setLevel,
      payload: level,
    });
  };

  return (
    <Theme>
      <C.Container>
        <p>Step 2/3</p>
        <h1>{state.name}, what best describes you?</h1>
        <p>Choose one option</p>

        <hr />

        <SelectOption
          title="Beginner"
          description="Programming less than 2 years"
          icon="🥳"
          selected={state.level === 0}
          onClick={() => setLevel(0)}
        />

        <SelectOption
          title="I'm programmer"
          description="Programming more than 2 years"
          icon="😎"
          selected={state.level === 1}
          onClick={() => setLevel(1)}
        />

        <Link to="/" className="backButton">Voltar</Link>
        <button onClick={handleNextStep}>Next</button>
      </C.Container>
    </Theme>
  );
};
