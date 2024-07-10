import React from 'react';
import { Input, Space } from 'antd';
const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);
const SrarchAll = () => (
  <Space direction="vertical">
    
    <Search className='mainsearch-bar'
      placeholder="Select a city"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
      style={{ width: '400px'}}
            
    />
    
  </Space>
);
export default SrarchAll;