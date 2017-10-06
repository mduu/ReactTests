// src/components/Addressdetails.tsx

import * as React from 'react';

export interface AddressdetailsProps {
  addressId?: string;
}

class Addresslist extends React.Component<AddressdetailsProps, object> {
  render() {
    const { addressId = '' } = this.props;

    return (
      <div className="addressDetails detailsPanel">
        <div className="header">
          Details for address '{addressId}'.
        </div>
      </div>
    );
  }
}

export default Addresslist;