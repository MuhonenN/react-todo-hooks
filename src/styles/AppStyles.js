import { makeStyles } from '@material-ui/styles';
import sizes from '../helpers/sizes';

export default makeStyles({
    App: {
        width: '100%',
        maxWidth: '500px',
        padding: '0 16px',
        boxSizing: 'border-box',
        height: '90vh',
        margin: '5vh auto',
        [sizes.down('md')]: {
            width: '70%'
        },
        [sizes.down('xs')]: {
            width: '90%'
        }
    },
    header: {
        textAlign: 'center',
        
    },
    link: {
        display: 'flex',
        justifyContent: 'center',
        backfaceVisibility: 'hidden',
        color: '#81b3d2',
        fontSize: '0.7rem',
        position: 'relative',
        textDecoration: 'none',
        transition: '0.5s color ease'
    }
});