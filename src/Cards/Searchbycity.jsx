import React from 'react';

import { Input, Space, Select  } from 'antd';

const { Search } = Input;

// import "../../assets/Styles/MainSearchBar.css"

const onSearch = (value, _e, info) => console.log(info?.source, value);
const Searchbycity = () => (
    <Select className='hotel-search'
    showSearch
    placeholder="Select a City"
    filterOption={(input, option) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
    options={[
      {
        value: '1',
        label: 'Delhi',
      },
      {
        value: '2',
        label: 'Varansi',
      },
      {
        value: '3',
        label: 'Ayodya',
      },
    ]}
  />
);
export default Searchbycity;
