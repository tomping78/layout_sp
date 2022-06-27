import SearchArea from "./component/SearchArea";
import Breadcrumb from "./component/Breadcrumb";
import { Transfer, Tree } from 'antd';
import React, { useState } from 'react';
import BoardList from './component/BoardList'


const isChecked = (selectedKeys, eventKey) => selectedKeys.includes(eventKey);

const generateTree = (treeNodes = [], checkedKeys = []) =>
  treeNodes.map(({ children, ...props }) => ({
    ...props,
    disabled: checkedKeys.includes(props.key),
    children: generateTree(children, checkedKeys),
  }));

const TreeTransfer = ({ dataSource, targetKeys, ...restProps }) => {
  const transferDataSource = [];

  function flatten(list = []) {
    list.forEach((item) => {
      transferDataSource.push(item);
      flatten(item.children);
    });
  }

  flatten(dataSource);
  return (
    <Transfer
      {...restProps}
      targetKeys={targetKeys}
      dataSource={transferDataSource}
      className="tree-transfer"
      render={(item) => item.title}
      showSelectAll={false}
      style={{marginBottom:20}}
    >
      {({ direction, onItemSelect, selectedKeys }) => {
        if (direction === 'left') {
          const checkedKeys = [...selectedKeys, ...targetKeys];
          return (
            <Tree
              blockNode
              checkable
              checkStrictly
              defaultExpandAll
              checkedKeys={checkedKeys}
              treeData={generateTree(dataSource, targetKeys)}
              onCheck={(_, { node: { key } }) => {
                onItemSelect(key, !isChecked(checkedKeys, key));
              }}
              onSelect={(_, { node: { key } }) => {
                onItemSelect(key, !isChecked(checkedKeys, key));
              }}
            />
          );
        }
      }}
    </Transfer>
  );
};

const treeData = [
  {
    key: '0-0',
    title: '0-0',
  },
  {
    key: '0-1',
    title: '0-1',
    children: [
      {
        key: '0-1-0',
        title: '0-1-0',
      },
      {
        key: '0-1-1',
        title: '0-1-1',
      },
    ],
  },
  {
    key: '0-2',
    title: '0-3',
  },
];


function Board(props) {
  const [targetKeys, setTargetKeys] = useState([]);

  const onChange = (keys) => {
    setTargetKeys(keys);
  };
  return (
    <>
        <SearchArea />
        <div className="ContentArea">
            <Breadcrumb />
            <div className="content_inner">
                <TreeTransfer dataSource={treeData} targetKeys={targetKeys} onChange={onChange} />
                <BoardList />
            </div>
        </div>
    </>
    );
}

export default Board;
