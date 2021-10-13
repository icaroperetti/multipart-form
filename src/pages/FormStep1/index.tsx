import { useHistory } from "react-router-dom";
import * as C from "./styles";
import { Theme } from "../../components/Theme";

export const FormStep1 = () => {
  const history = useHistory();

  const handleNextStep = () => {
    history.push("/step2");
  };

  return (
    <Theme>
      <C.Container>
        <p>Step 1/3</p>
        <h1>Let's start with your name</h1>
        <p>Fill the field below with your name.</p>

        <hr />

        <label>
          Your name:
          <input type="text" autoFocus />
        </label>

        <button onClick={handleNextStep}>Next</button>
      </C.Container>
    </Theme>
  );
};
