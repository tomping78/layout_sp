import React from 'react';
import { Button, Row, Col, Form, Input, Divider, PageHeader, Tag  } from 'antd';
import styled from 'styled-components'

const SearchAr = styled.div`
    background:#fff;
    box-shadow:0px 8px 5px rgb(77, 77, 77, .1);
    z-index:55;
`

function SearchArea(props) {
    return (
        <SearchAr>
            <PageHeader
            className="site-page-header"
            title="Title"
            tags={<Tag color="red">Running</Tag>}
            subTitle="This is a subtitle"
            extra={[
                <Button key="3">Operation</Button>,
                <Button key="2">Operation</Button>,
                <Button key="1" type="primary">
                Primary
                </Button>,
            ]}
            >
                <Divider style={{marginTop:'10px'}} />
                <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                autoComplete="off"
                >
                    <Row gutter={[16, 0]}>
                        <Col span={6} >
                            <Form.Item
                                label="Subject"
                                name="subject"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={6} >
                            <Form.Item
                                label="Office"
                                name="office"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={6} >
                            <Form.Item
                                label="Data"
                                name="data"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={6} >
                            <Form.Item
                                label="Component"
                                name="component"
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </PageHeader>
        </SearchAr>
    );
}

export default SearchArea;