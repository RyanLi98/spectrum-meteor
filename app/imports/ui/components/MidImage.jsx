import React from 'react';
import { Container, Header, Menu, Icon, Dropdown, Image, Grid, GridColumn, List, Input, Button, Segment } from 'semantic-ui-react';
export default class MidImage extends React.Component {
  render() {
    const imageStyle = {
      backgroundImage: "url(" + "http://spectrum-photonics.com/wp-content/uploads/2013/06/DSC_81631-1038x460.jpg" + ")",
      backgroundSize: "cover",
      width: "1038px",
      margin: "auto",
      height: "450px"
    };
    return (
        <section style={imageStyle}>
          <Grid divided="vertically">
            <Grid.Row columns="2">
              <GridColumn>
              </GridColumn>
              <GridColumn>
                <div className="picture label">Hyperspectral Imaging</div>
                <p className="picture description">Spectrum Photonics is a technology leader in the area of
                  hyperspectral imaging. By
                  definition, hyperspectral data is three-dimensional, providing a plethora of data for real-time
                  detection and
                  identification as well as post-acquisition analysis. The unique capabilities enabled by hyperspectral
                  imaging…</p>
              </GridColumn>
            </Grid.Row>
          </Grid>
        </section>
    );
  }
}