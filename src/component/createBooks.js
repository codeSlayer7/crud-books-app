import axios from "axios";
import React, { useState } from "react";
import { Button, Form, Input } from 'antd';
import FormItem from "antd/es/form/FormItem";

const CreateBooks= () => {

    const [ title, setName]= useState('');
    const [ author, setAuthor]= useState('');

    function showData(){
            axios.post("http://localhost:4000/books",{
                title,
                author
            })
    }

     const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    };
    const style = {
        width: "30%",
        margin: '0 auto'

        
    }

    return (

        <div style={style}>

            <Form
            onFinish={showData}
            onFinishFailed={onFinishFailed}
            autoComplete="off"

            // labelCol={{
            //    span:16
                
            //   }}
            //   wrapperCol={
            //     {
            //         span: 16,
            //         offset:8
            //     }
            //   }
            
             
            >
                <FormItem
                label='Name of book'>
                    <Input  onChange={(e)=> setName(e.target.value)}></Input>
                </FormItem>
                <FormItem
                label='Author'>
                    <Input  onChange={(e)=> setAuthor(e.target.value)}></Input>
                </FormItem>

                <Form.Item

                >
                <Button  type="primary" htmlType="submit"
                >
                    Submit
                </Button>   
                </Form.Item>
          </Form>


        </div>
    )
}

export default CreateBooks;



