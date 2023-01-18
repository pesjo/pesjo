import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    font: {
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        color: '#ffffff',
        fontFamily: 'dunbar-tall',
        fontSize: 40,
        ['@media (max-width:910px)']: {
            fontSize: 30,
        }
    },
    text: {
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        color: '#ffffff',
        fontSize: 20,
        ['@media (max-width:910px)']: {
            fontSize: 16,
        }
    },

}));

export default useStyles;