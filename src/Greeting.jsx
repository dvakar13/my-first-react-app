function Greeting() {
    // return <h1>&quot;I swear by my pretty floral bonnet, I will end you.&quot;</h1>;
    return (
        <header className="header">
          <nav className="navbar">
            <div className="logo">My Portfolio</div>
            <ul className="nav-links">
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          <div className="header-content">
            <h1>Welcome to My Portfolio</h1>
            <p>Developer. Designer. Creator.</p>
          </div>
        </header>
    
    
    );
}

export default Greeting;