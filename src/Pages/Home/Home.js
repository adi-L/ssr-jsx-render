import Navbar from "../../components/Navbar/Navbar"
import Header from "../../Header"

const nextApp = "Next Survey";
export const Home = () =>{
    return   <Header>
    <Navbar />
    <br/>
    <br/>
    <h1 style={{"lineHeight":"60px"}} className="header center blue-text">{nextApp}</h1>
    <div class="row center">
<h5 class="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
</div>
<div class="row center">
<a onClick={()=>alert()} id="download-button" class="btn-large waves-effect waves-light orange">Get Started</a>
</div>
</Header >
} 