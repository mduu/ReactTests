// src/components/MainContent.tsx

import * as React from 'react';
import Addresslist from './Address/Addresslist';

class MainContent extends React.Component<object> {
  render() {

    return (
      <div className="MainContent container">
        <Addresslist name="adresslist" />
      </div>
    );
  }
}

export default MainContent;