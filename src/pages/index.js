import React from 'react'
import Layout from '../components/main/layout'
import Content from '../components/main/content'
import Vehicles from '../components/main/vehicles'

const contentful = require("contentful");

export default class IndexPage extends React.PureComponent {

  state = {
    vehicles: null,
    nCount: 0,
  }

  componentDidMount = () => {
    const client = contentful.createClient({
      // This is the space ID. A space is like a project folder in Contentful terms
      space: "ha2jf8a02dgv",
      // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
      accessToken: "JTJwX900_EuysS5xc2usmqmJvWsIUrwFecjrU_TxNt4"
    });

    var _this = this;

    client.getEntries()
      .then(function (entries) {
        var count = 0;

        entries.items.map(() => {
          count++;
        });

        _this.setState({ vehicles: entries.items, nCount: count })
      })
  }

  render() {
    return (
      <Layout>
        <Content>
          <div className="row">
            <div className="col-sm-12">
              <p className="fifty">{this.state.nCount} VEHICLE RESULTS</p>
            </div>
            <div className="row area1">
              <Vehicles vehicles={this.state.vehicles} />
            </div>
            <div className="row banner">
              <div className="col-sm-12 col-lg-12">
                <p className="upcom">
                  UPCOMING<br />AUCTION
                  </p>
                <p style={{ color: "#fff", fontSize: "30px" }} >
                  Pebble Beech CA AUG 15th - AUG 17th
                  </p>
                <button className="auction">
                  AUCTIONS
                  </button>
              </div>
            </div>
          </div>
        </Content>
      </Layout >
    )
  }
}
