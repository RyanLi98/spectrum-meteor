import React from 'react';
import { Container, Header, Menu, Icon, Dropdown, Image, Grid, GridColumn, List, Input, Button, Segment } from 'semantic-ui-react';
export default class CopyrightMenu extends React.Component {
  render() {
    const copyright = {
      paddingTop: "20px",
      paddingBottom: "20px",
      paddingLeft: "30px",
      color: "#999999"
    };
    return (
        <Menu borderless className="copyrightmenu">
          <Container>
            <Menu.Item style={copyright}>Copyright © 2019 Spectrum Photonics, Inc. All rights reserved</Menu.Item>
            <Menu.Item className="float-right"><Icon name="linkedin alternate" className="linkedinfooter"/></Menu.Item>
          </Container>
        </Menu>
    );
  }
}