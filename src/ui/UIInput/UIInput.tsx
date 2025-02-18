import { TextField } from "@mui/material";
import style from './UIInput.module.css';

const UIInput: React.FC<React.ComponentProps<typeof TextField>> = (props) => {
  return <TextField className={style.input} variant="outlined" {...props} />;
};

export default UIInput;
