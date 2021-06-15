import React from 'react';
import { PageHeader, Button } from 'antd';
import { AccountBookOutlined } from '@ant-design/icons';

const Hi = () => (
  <Button>
    <AccountBookOutlined
      style={{
        fontSize: 20,
        verticalAlign: 'right',
      }}
    />
  </Button>
);

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <PageHeader
          style={{ backgroundColor: 'yellowgreen' }}
          extra={[<Hi />]}
          className="site-page-header"
          title="Accounts Manager"
        />
      </React.Fragment>
    );
  }
}
export default Header;
