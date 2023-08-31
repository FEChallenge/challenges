import { useState } from 'react';
import { styled } from 'styled-components';
const DEFAULT_COLOR = '#91C8E4';
const COLORS = [
  '#FFCCCC',
  '#F97B22',
  '#FEFF86',
  '#DBC4F0',
  '#DDFFBB',
  '#91C8E4',
  '#D4E2D4',
  '#ACFADF',
  '#9E9FA5',
];

const StyledColorPicker = styled.details`
  div,
  li {
    width: 14px;
    height: 14px;
    border: 1px solid black;
    border-radius: 3px;
    list-style: none;
    cursor: pointer;
  }
`;

const PickedColor = styled.summary`
  display: block;
`;

const ColorList = styled.menu`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;
  width: fit-content;
  padding: 8px;
  margin: 10px 0;
  border: 1px solid black;
  border-radius: 4px;
`;

const ColorPicker = () => {
  const [color, setColor] = useState(DEFAULT_COLOR);

  const handleColorClick = ({ target }: { target: EventTarget }) => {
    const selectedColor = (target as HTMLLIElement).dataset.color;
    setColor(selectedColor!);
  };

  return (
    <StyledColorPicker>
      <PickedColor>
        <div style={{ backgroundColor: color }}></div>
      </PickedColor>
      <ColorList>
        {COLORS.map((e) => (
          <li
            key={e}
            style={{ backgroundColor: e }}
            data-color={e}
            onClick={handleColorClick}
          ></li>
        ))}
      </ColorList>
    </StyledColorPicker>
  );
};

export default ColorPicker;
