import React from "react";
import Card from "./Cards";
import contacts from '../contacts';
import Avatar from "./Avatar";

function App() {
  return (
    <div>
      <h1 className="heading">Ismerősök</h1>
      <Avatar img="https://scontent.fbud6-4.fna.fbcdn.net/v/t39.30808-6/217345019_2168017310004916_2229293593352826180_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=174925&_nc_ohc=yicHwFawAuwAX-Ujp-U&_nc_ht=scontent.fbud6-4.fna&oh=00_AT-HKyk2ej5d_s3ijxfMarOwWLvQ9CAxZHzQ7pAxSrqO2w&oe=61FB08B6" />
      {contacts.map(contact =>
      (<Card
        key={contact.id}
        name={contact.name}
        img={contact.imgURL}
        tel={contact.phone}
        email={contact.email} />)
      )}
    </div>
  );
}



export default App;
