import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StatItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Nmb = styled.span`
  display: block;
  margin-left: ${p => p.theme.sizes.l};
  font-weight: bold;
`;

export const TotalText = styled.p`
  color: ${p => p.theme.colors.textPrimary};
  font-weight: bold;
  font-size: ${p => p.theme.fontSizes.m};
`;

export const TotalNmb = styled.span`
  display: inline-block;
  text-align: center;
  font-weight: bold;
`;

export const PositiveText = styled.div`
  padding: 15px;
  color: ${p => p.theme.colors.textPrimary};
  font-weight: bold;
  font-size: ${p => p.theme.fontSizes.m};
`;
