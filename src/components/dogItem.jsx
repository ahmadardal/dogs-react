import "../styles/dogCard.css";
const DogItem = ({ dog }) => {
  return (
    <div className="dogCard">
      <img alt="Beautiful dog" src={dog.img} />

      <div className="dogInfo">
        <div id="infoLeft">
          <p>Namn: {dog.name}</p>
          <p>Ålder: {dog.age}</p>
          <p>Kön: {dog.sex}</p>
        </div>
        <div id="infoRight">
          <p>Ras: {dog.breed}</p>
          <p>Ägare: {dog.owner.name}</p>
        </div>
      </div>
    </div>
  );
};

export default DogItem;
