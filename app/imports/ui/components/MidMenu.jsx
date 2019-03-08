import React from 'react';
import { Container, Header, Menu, Icon, Dropdown, Image, Grid, GridColumn, List, Input, Button, Segment } from 'semantic-ui-react';
export default class MiddleMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="middle">
          <Menu.Item style={ color: 'grey' } className="menu-item">HOME</Menu.Item>
          <Dropdown style={ color: 'grey' } icon={null} item text="ABOUT">
            <Dropdown.Menu>
              <hr/>
              <Dropdown.Item>Customers & Partners</Dropdown.Item>
              <Dropdown.Item>Leadership</Dropdown.Item>
              <Dropdown.Item>Why HSI</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown style={{ color: 'grey' }} icon={null} item text="TECHNOLOGY">
            <Dropdown.Menu>
              <hr/>
              <Dropdown.Item>Hyperspectral Imaging</Dropdown.Item>
              <Dropdown.Item>Underwater Chemical Sensing</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item style={{ color: 'grey' }}>CONTACT</Menu.Item>
        </Menu>
    );
  }
}