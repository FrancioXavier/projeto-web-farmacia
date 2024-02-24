import styled from 'styled-components';
import { InformationLight, primaryDark } from '../../config/colors';

export const InputWrapper = styled.div`
  border: 2px ${InformationLight} solid;
  height: 100%;
  width: 200px;
  display: flex;
  border-radius: 15px;
  align-items: center;
  justify-content: center;

  input {
  text-align: center;
  border: 1px solid #6C757D;
  }

  input[type="number"] {
    -webkit-appearance: textfield !important;
    -moz-appearance: textfield !important;
    appearance: textfield !important;
    }

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }

  .valueNumber {
    background: none;
    border: none;
    height: 100%;
    width: 1050px;
    font-size: 30px;
    color: ${primaryDark};
    align-items: center;
    justify-content: center;

    input {
      width: 100%;
    }
  }
  .plusminus {
    background: none;
    border: none;
    height: 100%;
    width: 30%;
    font-size: 30px;
    color: ${primaryDark};
    align-items: center;
    justify-content: center;
  }
`;
