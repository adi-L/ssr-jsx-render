import Navbar from "../../components/Navbar/Navbar"
import Header from "../../Header"


export const Home = () =>{
    return   <Header>
    <Navbar />
    <br/>
    <br/>
    <h1 style={{"lineHeight":"60px"}} className="header center blue-text">Next Survey</h1>
    <div class="row center">
<h5 class="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
</div>
<div class="row center">
<a href="http://materializecss.com/getting-started.html" id="download-button" class="btn-large waves-effect waves-light orange">Get Started</a>
</div>
</Header >
} 