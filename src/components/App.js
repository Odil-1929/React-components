import {BrowserRouter, Route, Switch} from "react-router-dom";
import LifeCycleMethods from "./LifeCycleMethods";
import ProductPage from "./ProductPage";
import NavigationBar from "./NavigationBar";
import Trello from "./Trello";
import Wrap from "./Wrap";
import Posts from "./Posts";
import PostView from "./PostView";
import Plugins from "./Plugins";
import {ToastContainer} from "react-toastify";
import Hooks from "./Hooks";
import Flickr from "./Flickr";
import CounterRedux from "./CounterRedux";
import LessonOttizUch from "./LessonReakt2";



function App() {
    return(
        <div>

            <BrowserRouter>

                <ToastContainer/>

                <NavigationBar/>


                <Switch>
                    <Route exact path='/' component={LifeCycleMethods}/>
                    <Route exact path='/products' component={ProductPage}/>
                    <Route exact path='/trello' component={Trello}/>
                    <Route exact path='/counter' component={Wrap}/>
                    <Route exact path='/posts' component={Posts}/>
                    <Route exact path='/posts/:id' component={PostView}/>
                    <Route exact path='/plugins' component={Plugins}/>
                    <Route exact path='/hooks' component={Hooks}/>
                    <Route exact path='/flickr' component={Flickr}/>
                    <Route exact path='/counterRedux' component={CounterRedux}/>
                    <Route exact path='/LessonReakt2' component={LessonOttizUch}/>

                </Switch>


            </BrowserRouter>


        </div>

    );

}

export default App;