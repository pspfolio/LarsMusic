import { css } from 'styled-components';

export const devices = {
  sm: (...args) => css`
    @media (max-width: 576px) {
      ${css(...args)};
    }
  `,
  md: (...args) => css`
    @media (max-width: 768px) {
      ${css(...args)};
    }
  `,
  lg: (...args) => css`
    @media (max-width: 992px) {
      ${css(...args)};
    }
  `,
  xl: (...args) => css`
    @media (max-width: 1200px) {
      ${css(...args)};
    }
  `
};
