import React from 'react';
import { Container, Header, Menu, Icon, Dropdown, Image, Grid, GridColumn, List, Input, Button, Segment } from 'semantic-ui-react';
export default class FooterMenu extends React.Component {
  render() {
    const footertext = {
      margin: "0px",
      fontSize: "14px",
      color: "#777777",
      fontWeight: "normal",
      paddingLeft: "15px"
    };
    return (
        <Menu borderless className="bottommenu">
          <Container>
            <Grid divided='vertically'>
              <Grid.Row columns={3}>
                <GridColumn>
                  <h2 className="higher-footer-header">SITE MAP</h2>
                  <div className="footer-text">Home</div>
                  <div className="footer-text">About</div>
                  <div className="footer-text">Customers & Partners</div>
                  <div className="footer-text">Leadership</div>
                  <div className="footer-text">Why HSI</div>
                  <div className="footer-text">Technology</div>
                  <div className="footer-text">Hyperspectral Imaging</div>
                  <div className="footer-text">Underwater Chemical Sensing</div>
                  <div className="footer-text">Contact</div>
                </GridColumn>
                <GridColumn>
                  <h2 className="higher-footer-header">RESOURCES</h2>
                  <div className="ui list">
                    <div className="footer-text">University of Hawaii</div>
                    <div className="footer-text">Defense Threat Reduction Agency</div>
                    <div className="footer-text">Defense Advanced Research Projects Agency</div>
                    <div className="footer-text">Night Vision and Electronic Sensors Directorate</div>
                    <div className="footer-text">Edgewood Chemical Biological Center</div>
                  </div>
                </GridColumn>
                <GridColumn>
                  <h2 className="higher-footer-header">CONTACT</h2>
                  <List>
                    <List.Item style={footertext}>e: info@spectrum-photonics.com</List.Item>
                    <List.Item style={footertext}>p: 1.866.597.4233</List.Item>
                    <List.Item style={footertext}>f: 1.866.577.1233</List.Item>
                  </List>
                  <h2 className="higher-footer-header">ADDRESS</h2>
                  <List>
                    <List.Item style={footertext}>Spectrum Photonics, Inc.</List.Item>
                    <List.Item style={footertext}>2800 Woodlawn Dr. Ste. 150</List.Item>
                    <List.Item style={footertext}>Honolulu, HI 96822</List.Item>
                  </List>
                </GridColumn>
              </Grid.Row>
            </Grid>
          </Container>
        </Menu>
    );
  }
}