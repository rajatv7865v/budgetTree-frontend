import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { CustomInputChangeFuncInterface } from "../CustomInput";

interface PropTypes {
  name?: string;
  value: string;
  handleValueChange: (args: CustomInputChangeFuncInterface) => any;
  label?: string;
  placeholder?: string;
  options: string[];
}

const CustomDropDown = ({
  name,
  value,
  options,
  handleValueChange,
  label,
  placeholder,
}: PropTypes) => {
  const _onChange = (event: SelectChangeEvent<string>) => {
    const { name, value } = event.target;
    handleValueChange({ name, value });
  };
  return (
    <>
      <FormControl variant='standard' fullWidth>
        <InputLabel id='demo-simple-select-standard-label'>{label}</InputLabel>
        <Select
          labelId='demo-simple-select-standard-label'
          id='demo-simple-select-standard'
          value={value}
          onChange={_onChange}
          label={label}
          name={name}
          className='border-2 p-1 rounded focus:outline-blue-700 border-black'
        >
          {options.map(({ label, value }: any) => {
            return <MenuItem value={value}>{label}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </>
  );
};

export default CustomDropDown;
