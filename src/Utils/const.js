import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,                
    },
    paper: {        
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
    label: {
        color: red,
        background: red,
    },
    bottomSpacing:{ spacing: 8, }
}));
