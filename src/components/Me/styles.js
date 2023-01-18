import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        color: '#ff0000',
        width: '70vw',
        height: '50vw',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    nice: {
        color: '#ffffff',
        fontFamily: 'dunbar-tall',
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 50,
        marginBottom: 0,
        marginTop: 90,
        ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: 40,
            marginTop: 30,
            width: '80vw',
        }
    },
    name: {
        color: '#ffffff',
        fontFamily: 'dunbar-tall',
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 80,
        marginBottom: 20,
        ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: 40,
            marginTop: 30,
            width: '80vw',
        }
    },
    color: {
        color: 'ff0000'
    },
    info: {
        color: '#ffffff',
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 28,
        marginBottom: 90,
        ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: 18,
            width: '80vw',
        }
    },
    img: {
        width: '30%',
        marginLeft: 'auto',
        marginRight: 'auto',
    }
}));

export default useStyles;