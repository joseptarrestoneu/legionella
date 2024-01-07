import { Select } from 'antd';

const Filter = ({ data, handleChange, placeholderFilter }) => {
    return (
        <Select
            mode="multiple"
            allowClear
            style={{
                width: '100%',
            }}
            placeholder={placeholderFilter}
            onChange={handleChange}
            options={data}
            filterSort={(optionA, optionB) =>
                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
            }
        />
    )
}

export default Filter