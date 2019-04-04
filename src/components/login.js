import React, { Component } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';

import { Form, Layout, Button, Icon, Input, Checkbox, Spin } from 'antd';
import styles from './login.scss';

const { Content } = Layout;
const FormItem = Form.Item;

@connect(({ login }) => ({
  login,

}))
@Form.create()
class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  handleSubmit = e => {
    const { form, dispatch } = this.props;
    e.preventDefault();
    console.log(dispatch)
    form.validateFields((err, values) => {
      console.log(err,values)
      if (!err) {
        dispatch({
          type: 'login_services/login',
          payload: values
        });
      }
    });
  };

  render() {
    const { loading, form } = this.props;
    const { getFieldDecorator } = form;

    return (
      <Layout className={styles.loginpage} >
        <Content>
          <Spin tip="登录中..." spinning={!!loading}>
            <Form onSubmit={this.handleSubmit} className={styles.loginform}>
              <div className={styles.userimg}>

                <b>雷霆应急</b>
                <span>后台管理系统</span>
              </div>
              <FormItem>
                {getFieldDecorator('userName', {

                  rules: [{ required: true, message: '请输入您的用户名' }]
                })(
                  <Input
                    size="large"
                    prefix={<Icon type="user" />}
                    placeholder="用户名"
                  />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {

                  rules: [{ required: true, message: '请输入您的密码' }]
                })(
                  <Input
                    size="large"
                    prefix={<Icon type="lock" />}
                    type="password"
                    placeholder="密码"
                  />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true
                })(<Checkbox>记住我</Checkbox>)}
              {/*  <Link className="login_services-form-forgot" to="#">
                  忘记密码
                </Link>*/}
                <Button
                  size="large"
                  type="primary"
                  htmlType="submit"
                  className={styles.loginformbutton}
                >
                  登录
                </Button>
              {/*  <div className="new-user">
                  新用户？<Link to="/sign/register">现在注册</Link>
                </div>*/}
              </FormItem>
            </Form>
          </Spin>
        </Content>
      </Layout>
    );
  }
}

export default Login
