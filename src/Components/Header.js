import React, { Component } from 'react';

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Menüyü göster">Menüyü göster</a>
	      <a className="mobile-btn" href="#home" title="Menüyü sakla">Menüyü sakla</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Anasayfa</a></li>
            <li><a className="smoothscroll" href="#about">Hakkımda</a></li>
	         <li><a className="smoothscroll" href="#resume">Egitim</a></li>
            <li><a className="smoothscroll" href="#portfolio">Projelerim</a></li>
            <li><a className="smoothscroll" href="#testimonials">Özlü Söz</a></li>
            <li><a className="smoothscroll" href="#contact">iletisim</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">{name}</h1>
            <h3>Mobile App Developer - Web Designer <span>{occupation}</span>. {description}.</h3>
            <hr />
            <ul className="social">
               {networks}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#contact"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
