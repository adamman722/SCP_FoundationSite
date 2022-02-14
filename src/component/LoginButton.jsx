import React from "react";
import { useDispatch } from "react-redux";
import { clickButton } from "../features/buttonClick";
import { useSelector } from "react-redux";
import styled from "styled-components";

function LoginButton() {
  const dispatch = useDispatch();
  const isClicked = useSelector((state) => state.button.value);

  const StyledButton = styled.button``;

  return (
    <div>
      <button
        class="glitched-affect"
        role="button"
        onClick={() => {
          dispatch(clickButton(!isClicked));
        }}
      >
        Proceed to Foundation Achieves
      </button>
    </div>
  );
}

export default LoginButton;
