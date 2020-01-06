import styled, { css } from 'styled-components';

const handleColor = density => {
  switch (parseInt(density)) {
    case 1:
      return "#0000ff";
    case 2:
      return "#cc33ff";
    case 3:
      return "#009900";
    case 4:
      return "#ffaa00";
    case 5:
      return "#8000ff";
    case 6:
      return "#b3b300";
    case 7:
      return "#206020";
    case 8:
      return "#4ce600";
    default:
      return "#cccccc";
  }
};

export const Grid = styled.div`
  width: max-content;
  margin: 0 auto;
  border: 1px solid #aaaaaa;
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Cell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #aaaaaa;
  border-radius: 3px;
  margin: 1px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  font-weight: 700;

  ${props => props.isOpen && css`
    background-color: #cccccc ;
    color: ${({ density }) => handleColor(density)};
    cursor: inherit;
  `}
  ${props => props.isOpen && props.isMine && 'background-color: red;'}
`;