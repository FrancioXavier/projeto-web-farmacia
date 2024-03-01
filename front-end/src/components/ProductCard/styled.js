import styled from 'styled-components';
import {
  InformationDark,
  InformationDefault,
  highPure,
  primaryDark,
} from '../../config/colors';

export const Price = styled.p`
  color: ${InformationDefault};
  font-size: 35px;
  font-weight: bold;
`;

export const AddButton = styled.button`
  background: ${primaryDark};
  border: none;
  color: ${highPure};
  padding: 15px 30px;

  btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active, .open>.dropdown-toggle.btn-primary {
    color: #fff;
    border-color: ${InformationDark}; /*set the color you want here*/
  }

  @media only screen and (max-width: 768px) {
    padding: 8px 15px;
  }
`;
