import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/register.css";
import BaseComponent from "../components/BaseComponent";
import DogItem from "../components/dogItem";
import Api from "../components/api";

const Register = () => {
  const [dogs, setDogs] = useState(null);

  const fetchDogs = async () => {
    setDogs(await Api());
  }

  useEffect(() => {
    fetchDogs();
  }, []);

  return (
    <BaseComponent
      headerContent={
        <div>
          <h1 id="pageTitle">Hundregister</h1>
        </div>
      }
      mainContent={
        <div>
          {!dogs ? (
            <div>
              <p>Loading dogs...</p>
            </div>
          ) : (
            <div className="dogsMap">
              {dogs.map((dog) => {
                return (
                  <div className="dogItem">
                    <Link
                      to={`/DogPage`}
                      state={{ dog: dog }}
                      style={{ textDecoration: "none" }}
                    >
                      <DogItem dog={dog} />
                    </Link>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      }
    />
  );
};

export default Register;
