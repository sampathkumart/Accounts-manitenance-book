import React from 'react';

import { Layout } from 'antd';

const { Footer } = Layout;

class PageFooter extends React.Component {
  render() {
    return (
      <Footer
        style={{
          textAlign: 'center',
          padding: '2',
          marginTop: '12rem',
          backgroundColor: 'yellowgreen',
        }}
      >
        Accounts Manager ©2020 Created by IT
      </Footer>
    );
  }
}
export default PageFooter;
