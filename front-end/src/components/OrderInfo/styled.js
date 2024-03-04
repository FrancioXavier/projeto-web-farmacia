import styled from 'styled-components';
import { SuccessLight } from '../../config/colors';

export const OrderInfos = styled.div`
  display: flex;
  flex-direction: column;
  background: ${SuccessLight};
  width: 40%;
  padding-bottom: 3rem;
  h4 .textOrder{
    margin: 1rem 0 0.5rem 2rem
  }
  p .textOrder{
    margin: 0 0 0 4rem;
  }
`;
