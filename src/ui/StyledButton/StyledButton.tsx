import {StyledButton} from "~/ui/StyledButton/StyledButton.styles.ts";
import {ButtonProps} from "@mui/material";



type TStyledButton = {
    view:string
}& ButtonProps

export const MStyledButton = ({view, ...props}:TStyledButton) =>{

    return <StyledButton view={view} {...props}/>
}