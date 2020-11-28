
import Joke from "./components/Joke";
import { makeStyles } from '@material-ui/core/styles';
import { Button, Paper } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
    textAlign:'center'
  }

}));

function App() {
  const classes = useStyles();

  const handleReload  =() => {
    window.location.reload() //TODO: for more complex app use refetch and useQuery apollo or use setState hook
  }

  return (
    <div className={classes.root}>
      <Button variant='outlined' onClick={handleReload}>Next random Joke</Button>
      <Paper elevation={2}>
        <Joke />
      </Paper>
      
    </div>
  );
}

export default App;
