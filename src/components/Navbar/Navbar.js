const Navbar = () =><nav>
<div className="nav-wrapper">
  <a href="#" className="brand-logo">Logo</a>
  <ul id="nav-mobile" className="right hide-on-med-and-down">
    <li><a onClick={()=>alert()} >Sass</a></li>
    <li onClick={()=>alert()}><a href="">Components</a></li>
    <li><a href="">JavaScript</a></li>
  </ul>
</div> 
</nav>  

export default Navbar