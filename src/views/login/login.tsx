import React,{Component,RefObject,createRef} from 'react';
import {Form,FormInstance,Input} from 'antd';

export default class Login extends Component{
  formRef:RefObject<FormInstance>;
  constructor(props:any,context:any){
    super(props,context);
    this.formRef = createRef<FormInstance>();
  }
  render(){
    const layout = {
      labelCol:{span:8},
      wrapperCol:{span:8}
    }
    return(
      <>
        {/*这里是注释*/}
        <Form
          {...layout}
          ref = { this.formRef }
        >
          <Form.Item label="用户名" name="name">
            <Input/>
          </Form.Item>
          <Form.Item label="密码" name="passward">
            <Input.Password/>
          </Form.Item>
        </Form>
      </>
    )
  }
}
