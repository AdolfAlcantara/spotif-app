import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Search from '../components/Search';
import LibraryComponent from '../components/Library/Library';
import TopBar from '../components/TopBar';

const AppRouter = () =>{

    return(
    <BrowserRouter>
        <TopBar/>
        <Switch>
            <Route path="/" exact={true} component={Search}/>
            <Route path="/library" component={LibraryComponent}/>
        </Switch>
    </BrowserRouter>)
}

export default AppRouter;