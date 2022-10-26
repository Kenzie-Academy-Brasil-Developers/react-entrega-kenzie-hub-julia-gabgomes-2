import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

interface IStyledLinkProps {
  type: string;
}

export const StyledLink = styled(Link)<IStyledLinkProps>`
  ${({ type }) => {
    switch (type) {
      case "light-gray-medium":
        return css`
          height: 48px;
          width: 100%;
          padding: 0px 22px;
          background-color: var(--gray-1);

          border-radius: 4px;

          font-family: "Inter", sans-serif;
          text-decoration: none;
          font-weight: 600;
          font-size: 16px;
          color: var(--gray-0);

          display: flex;
          align-items: center;
          justify-content: center;

          transition: 0.4s;

          :hover {
            background-color: var(--gray-2);
          }
        `;

      case "gray-small":
        return css`
          height: 32px;
          padding: 8px 16px;
          background-color: var(--gray-3);

          border-radius: 4px;

          font-family: "Inter", sans-serif;
          text-decoration: none;
          font-weight: 600;
          font-size: 16px;
          color: var(--gray-0);

          display: flex;
          align-items: center;
          justify-content: center;

          transition: 0.4s;

          :hover {
            background-color: var(--gray-2);
          }
        `;

      default:
        return css`
          height: 32px;
          padding: 8px 16px;
          background-color: var(--gray-3);

          border-radius: 4px;

          font-weight: 600;
          font-size: 16px;
          color: var(--gray-0);

          transition: 0.4s;

          :hover {
            background-color: var(--gray-2);
          }
        `;
    }
  }}
`;
