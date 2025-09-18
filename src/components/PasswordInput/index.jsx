import { useRef } from "react";
import { Container, Input, InputContainer } from "./styles";

export default function PasswordInput({ pin, setPin, started }) {
  const input1 = useRef();
  const input2 = useRef();
  const input3 = useRef();

  return (
    <Container>
      <InputContainer>
        <Input
          keyboardType={"number-pad"}
          maxLength={1}
          ref={input1}
          onChangeText={(value) => {
            if (value) {
              input2.current.focus();
            }
          }}
        />
      </InputContainer>
      <InputContainer>
        <Input
          keyboardType={"number-pad"}
          maxLength={1}
          ref={input2}
          onChangeText={(value) => {
            if (value) {
              input3.current.focus();
            }
          }}
        />
      </InputContainer>
      <InputContainer>
        <Input
          keyboardType={"number-pad"}
          maxLength={1}
          ref={input3}
          onChangeText={(value) => {
            console.log("PIN completo:", pin);
          }}
        />
      </InputContainer>
    </Container>
  );
}
