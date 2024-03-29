import styled from 'styled-components';

export const EmptyContainer = styled.div`
  width: 100%;
  height: 100vh;
  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available;
  }
`;
