import styled from '@emotion/styled';

export const ButtonFeedback = styled.button`
  display: block;

  margin-left: auto;
  padding: 15px;
  min-width: ${p => p.theme.sizes.xxl};

  border: none;
  outline: none;
  border-radius: ${p => p.theme.radii.md};
  color: ${p => p.theme.colors.textPrimary};

  font-weight: bold;
  font-size: ${p => p.theme.fontSizes.m};
  cursor: pointer;

  :not(:last-child) {
    margin-right: ${p => p.theme.sizes.m};
  }

  :hover {
    box-shadow: ${p => p.theme.shadows.primary};
  }
`;
