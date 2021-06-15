import React from 'react';
import { Form, Input, Button, DatePicker, Radio } from 'antd';
import { withRouter } from 'react-router-dom';
import { db } from '../firebase';
import moment from 'moment';

const layout = {
  labelCol: {
    span: 9,
  },
  wrapperCol: {
    span: 6,
  },
};

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: {
        name: '',
        type: '',
        reason: '',
        amount: '',
        date: '',
      },
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    db.collection('users')
      .doc(id)
      .get()
      .then((snapshot) => {
        this.setState((prevState) => {
          const users = { ...prevState.users, ...snapshot.data() };
          return { users };
        });
      });
  }

  updateInput = (e) => {
    this.setState((prevState) => {
      let users = { ...prevState.users };
      users[e.target.name] = e.target.value;
      return { users };
    });
  };

  updateUser = () => {
    db.collection('users')
      .doc(this.props.match.params.id)
      .update(this.state.users)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

  onChange = (date, dateString) => {
    this.setState((prevState) => {
      let users = { ...prevState.users };
      users.date = dateString;
      return { users };
    });
  };

  // onChange = (date, dateString) => {
  //   this.setState({ date: dateString });
  // };

  selectValue = (e) => {
    this.setState({
      type: e.target.value,
    });
  };

  render() {
    return (
      <React.Fragment>
        <Form
          onSubmit={this.updateInput}
          {...layout}
          name="nest-messages"
          style={{ marginTop: '1rem' }}
        >
          <Form.Item label="Dt/Cr">
            <Radio.Group
              name={'type'}
              onClick={this.selectValue}
              value={this.state.users.type}
              onChange={this.updateInput}
            >
              <Radio value="Dt">Debit</Radio>
              <Radio value="Cr">Credit</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Name">
            <Input
              name={'name'}
              value={this.state.users.name}
              onChange={this.updateInput}
            />
          </Form.Item>
          <Form.Item label="Reason" rules={[{ required: true }]}>
            <Input.TextArea
              name={'reason'}
              value={this.state.users.reason}
              onChange={this.updateInput}
            />
          </Form.Item>
          <Form.Item label="Amount" rules={[{ required: true }]}>
            <Input
              name={'amount'}
              value={this.state.users.amount}
              onChange={this.updateInput}
            />
          </Form.Item>
          <Form.Item label="Date">
            <DatePicker
              onChange={this.onChange}
              name={'date'}
              defaultValue={moment(
                this.state.users.date
                  ? console.log(this.state.users.date)
                  : new Date()
              )}
            />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 9 }}>
            <Button type="submit" onClick={this.updateUser}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </React.Fragment>
    );
  }
}
export default withRouter(Edit);
