import React from 'react';
import styled from 'styled-components';
import Menu from 'common/components/Menu';

const ControlWrapper = styled.div`
  display: flex;
  min-width: 80px;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.p`
  font-size: ${props => (props.owned ? '48px' : '35px')};
  margin: 0;
  transition: color 0.2s ease-in-out;
  color: rgba(0, 0, 0, 0.6);

  &:hover {
    color: #9012fe;
  }
`;

const AlbumListControls = ({ onClick, onTypeChange, owned, albumType }) => {
  return (
    <ControlWrapper>
      <Icon onClick={onClick} owned={owned}>
        {owned ? '-' : '+'}
      </Icon>
      {owned ? (
        <Menu items={['LP', 'CD', 'Digi']} onClick={onTypeChange} selectedItem={albumType} />
      ) : (
        <div style={{ width: '100px' }} />
      )}
    </ControlWrapper>
  );
};

export default AlbumListControls;
