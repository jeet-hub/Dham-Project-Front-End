import React from 'react';

import { Input, Space, Select  } from 'antd';

const { Search } = Input;

// import "../../assets/Styles/MainSearchBar.css"

const onSearch = (value, _e, info) => console.log(info?.source, value);
const HotelSearch = () => (
    <Select className='hotel-search'
    showSearch
    placeholder="Search By Hotels"
    filterOption={(input, option) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
    options={[
      {
        value: '1',
        label: 'Dham1',
      },
      {
        value: '2',
        label: 'Dham2',
      },
      {
        value: '3',
        label: 'Dham3',
      },
    ]}
  />
);
export default HotelSearch;
