import {ButtonProps} from "@mui/material";
import Button from "@mui/material/Button";
import {styled} from "@mui/material";
type TStyledButton = {
    view:string
}& ButtonProps


export const StyledButton = styled(Button)<TStyledButton>`
background-color: red
`;