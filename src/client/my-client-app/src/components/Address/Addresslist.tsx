// src/components/Addresslist.tsx

import * as React from 'react';
import Adressdetails from './Adressdetails';
import 'whatwg-fetch';
import IAddress from './IAddress';

export interface AddresslistProps {
  name: string;
}

interface State {
  addresses: IAddress[];
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

  setAddressesState(addresses: IAddress[]) {
    this.setState({addresses: addresses});
  }

  handleDetailsClick(addressId: string) {
    // tslint:disable-next-line:no-console
    console.log(`handleDetailsClick: addressId=${addressId}`);
  }

componentWillMount() {
    this.getAddresses();
  }

render() {
    const { name } = this.props;
    const { addresses } = this.state;
    const self = this;
    
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
                <th />
              </tr>
            </thead>

            <tbody>
                {addresses.map(function(address: IAddress, index: number){
                return <tr key={index}>
                  <td>{address.Id}</td>
                  <td>{address.Firstname}</td>
                  <td>{address.Lastname}</td>
                  <td><button onClick={(e) => self.handleDetailsClick(address.Id)}>Details</button></td>
                </tr>;
              })}
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