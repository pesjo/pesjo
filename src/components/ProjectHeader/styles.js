import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    name: {
        color: '#FF6C00',
        fontFamily: 'dunbar-tall',
        padding: '0.5rem calc((100vw - 910px) / 2)',
        marginLeft: '20px',
        marginRight: '20px',
        fontSize: 40,
        marginBottom: 0,
        marginTop: 30,
        ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: 40,
            marginTop: 30,
        }
    },
    desc: {
        color: '#ffffff',
        padding: '0.5rem calc((100vw - 910px) / 2)',
        fontSize: 25,
        marginLeft: '20px',
        marginRight: '20px',
        ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: 18,
        }
    },
    tools: {
        color: '#ffffff',
        padding: '0.5rem calc((100vw - 910px) / 2)',
        fontSize: 16,
        marginLeft: '20px',
        marginRight: '20px',
        ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: 18,
        }
    },
    info: {
        color: '#ffffff',
        padding: '0.5rem calc((100vw - 910px) / 2)',
        fontSize: 20,
        marginLeft: '20px',
        marginRight: '20px',
        marginBottom: 90,
        ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: 18,
        }
    },
}));

export default useStyles;