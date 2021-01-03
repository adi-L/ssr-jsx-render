import Header from "./Header";
import Title from "./Title";
import Navbar from './components/Navbar/Navbar';

 const App = () =>{
    const titles = ["a","b","d"]
    return (
        <Header>
            <Navbar />
            {
                titles.map(s=>{
                    return <Title>{s}</Title>
                })
            }
        <button onClick={()=>alert(1)} data-foo="asdasd" >click</button>
        </Header >
    );
}
    
export default App;
