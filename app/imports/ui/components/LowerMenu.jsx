import React from 'react';
import { Container, Header, Menu, Icon, Dropdown, Image, Grid, GridColumn, List, Input, Button, Segment } from 'semantic-ui-react';
export default class LowerMenu extends React.Component {
  render() {
    const linkPad = {
      paddingLeft: "15px"
    };
    return (
        <Menu borderless className="lowmidmenu">
          <Container>
            <Grid centered columns='equal'>
              <GridColumn>
                <h2 className="higher-footer-header">Technology</h2>
                <p className="higher-footer-text"> Spectrum Photonics provides research and development expertise for
                  the development of complex, advanced detection technologies. The company is currently focused on two
                  fields of research for sensor development: Hyperspectral imaging (HSI) systems for broad application
                  chemical, biological, explosives, and narcotics…</p>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" style={linkPad}>Read more</a>
              </GridColumn>
              <GridColumn>
                <h2 className="higher-footer-header">Why HSI</h2>
                <p className="higher-footer-text">Why Hyperspectral Imaging? For the military and first responders,
                  detecting and identifying a potentially hazardous material requires proximal sensors. This means the
                  user must get up close and personal with something that may turn out to be highly dangerous.
                  Since…</p>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" style={linkPad}>Read more</a>
              </GridColumn>

              <GridColumn>
                <h2 className="higher-footer-header">Customers & Partners</h2>
                <p className="higher-footer-text">Spectrum Photonics develops customized standoff and remote detection
                  solutions to meet customer needs and has the capability to test, demonstrate, and validate its systems
                  in realistic test scenarios. Customers Navy: Naval Sea Systems Command, Pacific International Center
                  for High…</p>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" style={linkPad}>Read more</a>
              </GridColumn>
            </Grid>
          </Container>
        </Menu>
    );
  }
}