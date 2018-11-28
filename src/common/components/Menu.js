import React, { Component } from 'react';
import styled from 'styled-components';
import arrowdown from 'assets/images/arrowdown.svg';

const ArrowDown = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    color: ${props => props.theme.primaryColor};
  }
`;

const Container = styled.div`
  position: relative;
  cursor: default;
`;

const Card = styled.div`
  width: 150px;
  background-color: #fff;
  -webkit-box-shadow: 0px 3px 20px 0px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: 0px 3px 20px 0px rgba(0, 0, 0, 0.16);
  box-shadow: 0px 3px 20px 0px rgba(0, 0, 0, 0.16);
  position: absolute;
  z-index: 5;
  display: flex;
  flex-direction: column;
`;

const MenuItem = styled.p`
  margin-left: 16px;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.primaryColor};
  }
`;

const TextContainer = styled.div`
  display: flex;
  width: 100px;
  height: 50px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

class Menu extends Component {
  state = {
    showMenu: false
  };

  showMenu = event => {
    event.preventDefault();
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  };

  closeMenu = event => {
    console.log(this.dropdownMenu);
    if (!event || (this.dropdownMenu && !this.dropdownMenu.contains(event.target))) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });
    }
  };

  handleMenuItemClick = type => {
    const { onClick } = this.props;
    onClick(type);
    this.closeMenu();
  };

  render() {
    const { showMenu } = this.state;
    const { items, selectedItem } = this.props;
    return (
      <Container>
        <TextContainer onClick={this.showMenu}>
          {selectedItem ? <p>{selectedItem}</p> : <p>Tyyppi</p>}
          <ArrowDown src={arrowdown} />
        </TextContainer>
        {showMenu && (
          <Card
            className="menu"
            innerRef={element => {
              this.dropdownMenu = element;
            }}
          >
            {items.map(type => (
              <MenuItem key={type} onClick={() => this.handleMenuItemClick(type)}>
                {type}
              </MenuItem>
            ))}
          </Card>
        )}
      </Container>
    );
  }
}

export default Menu;
