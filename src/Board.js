import React from "react";
import { Button, Descriptions, Divider, PageHeader, Tag  } from 'antd';
import styled from 'styled-components'

const HeadLink = styled.a`
    color: #52c714;
    &:hover {
        color:red;
    }
`
const SearchArea = styled.div`
    background:#fff;
`
function Board(props) {
  return (
    <>
        <SearchArea>
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
                <Divider />
                <Descriptions size="small" column={3}>
                    <Descriptions.Item label="Created">Lili Qu</Descriptions.Item>
                    <Descriptions.Item label="Association">
                        <HeadLink>421421</HeadLink>
                    </Descriptions.Item>
                    <Descriptions.Item label="Creation Time">2017-01-10</Descriptions.Item>
                    <Descriptions.Item label="Effective Time">2017-10-10</Descriptions.Item>
                    <Descriptions.Item label="Remarks">
                    Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
                    </Descriptions.Item>
                </Descriptions>
            </PageHeader>
        </SearchArea>
    </>
    );
}

export default Board;
