import React from 'react';
import { Form, Input, Button, DatePicker, Radio } from 'antd';
import { Link } from 'react-router-dom';
import firebase from '../firebase';

const layout = {
  labelCol: {
    span: 9,
  },
  wrapperCol: {
    span: 6,
  },
};

class NewUser extends React.Component {
  constructor() {
    super();
    this.state = {
      type: '',
      name: '',
      reason: '',
      amount: '',
      date: '',
    };
  }

  updateInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onChange = (date, dateString) => {
    this.setState({ date: dateString });
  };

  selectValue = (e) => {
    this.setState({
      type: e.target.value,
    });
  };

  addUser = (e) => {
    console.log(this.state);
    e.preventDefault();
    var db = firebase.firestore();
    db.collection('users')
      .add({
        type: this.state.type,
        name: this.state.name,
        reason: this.state.reason,
        amount: this.state.amount,
        date: this.state.date,
      })
      .then((res) => console.log(res));
    this.setState({
      type: '',
      name: '',
      reason: '',
      amount: '',
      date: '',
    });
  };

  render() {
    return (
      <React.Fragment>
        <Form
          onSubmit={this.addUser}
          {...layout}
          name="nest-messages"
          style={{ marginTop: '1rem' }}
        >
          <Form.Item label="Dt/Cr">
            <Radio.Group
              name={'type'}
              onChange={this.selectValue}
              value={this.state.type}
            >
              <Radio value="Dt">Debit</Radio>
              <Radio value="Cr">Credit</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Name">
            <Input
              name={'name'}
              value={this.state.name}
              onChange={this.updateInput}
            />
          </Form.Item>
          <Form.Item
            label="Reason"
            // rules={[{ required: true }]}
          >
            <Input.TextArea
              name={'reason'}
              value={this.state.reason}
              onChange={this.updateInput}
            />
          </Form.Item>
          <Form.Item
            label="Amount"
            // rules={[{ required: true }]}
          >
            <Input
              name={'amount'}
              value={this.state.amount}
              onChange={this.updateInput}
            />
          </Form.Item>
          <Form.Item name={'date'} label="Date">
            <DatePicker onChange={this.onChange} value={this.state.date} />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 9 }}>
            <Button type="submit" onClick={this.addUser}>
              <Link to="/list">Submit</Link>
            </Button>
          </Form.Item>
        </Form>
      </React.Fragment>
    );
  }
}
export default NewUser;
