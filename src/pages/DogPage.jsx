import { useLocation } from "react-router-dom";
import "../styles/DogPage.css";
import BaseComponent from "../components/BaseComponent";
import DogItem from "../components/dogItem";

const DogPage = () => {
  const { dog } = useLocation().state;
  return (
    <BaseComponent
      headerContent={
        <div>
          <h1 id="pageTitle">{dog.name}'s information</h1>
        </div>
      }
      mainContent={
        <div className="dogSection">
          <div className="informationSection">
            <h1>Information</h1>
            <p1>
              Hunden {dog.name} ägs av {dog.owner.name} {dog.owner.lastName} och
              har följande chip nummer: {dog.chipNumber}. Om du har hittat
              hunden, kom gärna i kontakt med oss eller ring ägaren direkt!.
            </p1>
            {<br />}
            {<br />}
            <a
              href={`tel:${dog.owner.phoneNumber}`}
              class="btn btn-warning"
              role="button"
              data-bs-toggle="button"
            >
              {dog.owner.phoneNumber}
            </a>

            {<br />}
            {<br />}
            <a
              href={`mailto:kontakt@hundcentralen.se?subject=Tips för ${dog.name}`}
              class="btn btn-warning"
              role="button"
              data-bs-toggle="button"
            >
              Mejla oss
            </a>
          </div>
          <div>
            {!dog ? (
              <p>Retrieving your dog...</p>
            ) : (
              <div className="dog">
                <DogItem dog={dog} />
              </div>
            )}
          </div>
        </div>
      }
    />
  );
};

export default DogPage;
