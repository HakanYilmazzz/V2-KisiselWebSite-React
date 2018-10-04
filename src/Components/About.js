import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Hakan Yılmaz Profil Fotografı" />
         </div>
         <div className="nine columns main-col">
            <h2>Hakkımda</h2>

            <p>{bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>İletisim</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>{street} {city}/{state}, {zip}
						       </span><br />
						   <span>{phone}</span><br />
                     <span><a href="mailto:hakanyilmazzz93@gmail.com">{email}</a></span>
					   </p>
               </div>
               
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
