// src/components/Addresslist.tsx

import * as React from 'react';
import Adressdetails from './Adressdetails';
import 'whatwg-fetch';

export interface AddresslistProps {
  name: string;
}

interface State {
  addresses: Address[];
}

interface Address {
  id: string;
  firstName: string;
  lastName: string;
}

export default class Addresslist extends React.Component<AddresslistProps, State> {

  constructor () {
    super();
    this.state = { addresses: [] };
  }

  getAddresses() {
    fetch('http://localhost:14025/api/Address').then((response) => {
      if (response.ok) {
        response.json().then(data => {
          this.setAddressesState(data);
        });
      } else {
        throw new Error( 'Network response was not ok.');
      }
    });
  }

  setAddressesState(addresses: Address[]) {
    this.setState({addresses: addresses});
  }

  componentWillMount() {
    this.getAddresses();
  }

  render() {
    const { name } = this.props;

    return (
      <div className="addresslist container">
        <div className="listPanel">
          <div className="header">
            I am the addresslist with name '{name}'.
          </div>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Firstname</th>
                <th>Lastname</th>
              </tr>
            </thead>

            <tbody>
            </tbody>
          </table>
        </div>

        <div className="detailsPanel">
          <Adressdetails addressId="adr1" />
        </div>
      </div>
    );
  }
}