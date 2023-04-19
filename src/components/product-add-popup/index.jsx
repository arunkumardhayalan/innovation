import { Button, Form, Input, InputNumber, Modal, message } from 'antd';
import React from 'react';
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

function ProductAddPopup({ addPopupOpen, addPopupClose }) {


    async function addProduct(productData) {
        console.log(productData, 'productData');
        const response = await axios.post(`https://uiexercise.onemindindia.com/api/Product`, productData);
        if (response.status == 200) {
            return response.data;
        } else {
            return { items: [] };
        }
    }

    function setProductFormData(values) {

        let productFormData = {
            productName: values.productName,
            productId: uuidv4(),
            availableQuantity: values.availableQuantity
          }
        return productFormData;
    }


    const onFinish = (values) => {
        console.log('Success:', values);
        const productData = setProductFormData(values);
        const response = addProduct(productData);
        console.log(response, 'responseeeee');
        if (response) {
            message.success("Submit success!");
            window.location.reload(false);
        } else {
            message.error('Somthing went wrong!');
        }
    };



    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <Modal
            centered
            open={addPopupOpen}
            onCancel={addPopupClose}
            footer={false}
        >
            <div className='text-lg modal-title text-center mx-auto p-3 px-6 rounded-3xl font-bold w-2/4'>
                Add new product
            </div>
            <div className='mt-6'>
                <Form
                    name="basic"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout="vertical"
                    validateTrigger='onTrigger'
                >
                    <Form.Item
                        label="Product name"
                        name="productName"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your product name!',
                            },
                        ]}
                    >
                        <Input size='large' placeholder='Enter product name' />
                    </Form.Item>
                    <Form.Item
                        label="Available Qty"
                        name="availableQuantity"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <InputNumber size='large' placeholder='Enter available Qty' className='w-full' />
                    </Form.Item>

                    <Form.Item className='text-center mb-0'>
                        <Button className='bg-black px-8 font-bold add-new-btn' type="primary" htmlType="submit">
                            Add
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </Modal>
    );
}

export default ProductAddPopup;