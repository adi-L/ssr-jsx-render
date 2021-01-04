import Header from "./Header";
import Title from "./Title";
import Navbar from './components/Navbar/Navbar';

 const App = () =>{
    const titles = ["a","b","d"]
    return (
        <Header>
            <Navbar />
            <br/>
            <br/>
            <h1 style={{"lineHeight":"60px"}} className="header center blue-text">Starter Template</h1>
            <div class="row center">
        <h5 class="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
      </div>
        </Header >
    );
}

export default App;
