import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { newEmployeeService } from "../services";
import Loader from "../components/Loader/Loader";
import Button from "../components/Button/Button";
import { positionMain } from "./NewEmployeePage.module.css";

const NewEmployeePage = () => {
  const { companyId } = useParams();
  const navigate = useNavigate();
  const { token } = useContext(AuthContext);
  const [position, setPosition] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [response, setResponse] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      // hacer el servicio
      const data = { position };

      await newEmployeeService(data, companyId, token);
      setResponse("Company created");
      setLoading(false);
      navigate(`/companies/${companyId}`);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <main className={`${positionMain}`}>
      <form onSubmit={handleForm}>
        <label htmlFor="position">Position</label>
        <input
          type="text"
          id="position"
          name="position"
          value={position}
          required
          onChange={(e) => setPosition(e.target.value)}
        />
        <Button>Submit</Button>
      </form>
      {response && <p>{response}</p>}
      {error ? <p>{error}</p> : null}
      {loading ? <Loader /> : null}
    </main>
  );
};

export default NewEmployeePage;
