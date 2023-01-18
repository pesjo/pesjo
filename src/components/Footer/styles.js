import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    font: {
        flexGrow: 1,
        color: '#ffffff',
        fontFamily: 'dunbar-tall',
        fontSize: 19,
        marginTop: 15,
    },
    text: {
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        color: '#ffffff',
        fontSize: 20,
        marginLeft: 5,
    },
}));

export default useStyles;

