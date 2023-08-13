import { Color } from "./color";

export const CommonStyle = {
  BlackBorder: `border: 2px solid ${Color.Black};`,
  BorderRadius: `border-radius: 20px;`,
  FlexCenter: `${flexStyle({ justifyContent: "center", alignItems: "center" })}`,
  FlexColumn: `${flexStyle({ direction: "column" })}`,
} as const;

interface FlexStyleProp {
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
  alignItems?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
}

export function flexStyle({ direction = "row", justifyContent = "flex-start", alignItems = "flex-start" }: FlexStyleProp) {
  return `
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
  `;
}
