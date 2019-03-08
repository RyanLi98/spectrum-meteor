import React from 'react';
import { Container, Header, Menu, Icon, Dropdown, Image, Grid, GridColumn, List, Input, Button, Segment } from 'semantic-ui-react';
export default class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Image src="http://spectrum-photonics.com/wp-content/uploads/2013/06/SPECTRUM-LOGOS.gif"/>
            <Menu.Item position="right"><Icon className="linkedin" name="linkedin alternate"/></Menu.Item>
            <Menu.Item><Icon className="search" name="search"/></Menu.Item>
          </Container>
        </Menu>
    );
  }
}