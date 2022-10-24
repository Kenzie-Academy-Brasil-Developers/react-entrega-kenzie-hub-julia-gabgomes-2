import styled, { css } from "styled-components";
import { BaseText } from "../components/BaseText";

export const StyledText = styled(BaseText)`
  ${({ typo }) => {
    switch (typo) {
      case "title-1":
        return css`
          font-weight: 700;
          font-size: 18px;
          line-height: 28px;
        `;

      case "title-2":
        return css`
          font-weight: 600;
          font-size: 16px;
          line-height: 26px;
        `;

      case "title-3":
        return css`
          font-weight: 700;
          font-size: 14px;
          line-height: 24px;
        `;

      case "headline":
        return css`
          font-weight: 400;
          font-size: 12px;
          line-height: 22px;
        `;

      case "headline-bold":
        return css`
          font-weight: 600;
          font-size: 12px;
          line-height: 18px;
        `;

      case "headline-italic":
        return css`
          font-weight: 400;
          font-size: 12px;
          line-height: 18px;
          font-style: italic;
        `;

      case "helper-text":
        return css`
          font-weight: 400;
          font-size: 10px;
          line-height: 0px;
        `;

      default:
        return css`
          font-weight: 400;
          font-size: 12px;
          line-height: 22px;
        `;
    }
  }}

  ${({ color }) => {
    switch (color) {
      case "gray-0":
        return css`
          color: var(--gray-0);
        `;

      case "gray-1":
        return css`
          color: var(--gray-1);
        `;

      case "color-primary":
        return css`
          color: var(--color-primary);
        `;

      default:
        return css`
          color: var(--gray-1);
        `;
    }
  }}
`;
