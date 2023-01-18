import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    desc: {
        color: '#FF6C00',
        fontFamily: 'dunbar-tall',
        padding: '0.5rem calc((100vw - 910px) / 2)',
        marginLeft: '20px',
        marginRight: '20px',
        fontSize: 40,
        marginBottom: 0,
        marginTop: 70,
        ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: 40,
            marginTop: 30,
        }
    },
    text: {
        color: '#ffffff',
        padding: '0.5rem calc((100vw - 910px) / 2)',
        fontSize: 20,
        marginLeft: '20px',
        marginRight: '20px',
        ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: 18,
        }
    },
    lasttext: {
        color: '#ffffff',
        padding: '0.5rem calc((100vw - 910px) / 2)',
        fontSize: 20,
        marginLeft: '20px',
        marginRight: '20px',
        marginBottom: 70,
        ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: 18,
        }
    },
}));

export default useStyles;