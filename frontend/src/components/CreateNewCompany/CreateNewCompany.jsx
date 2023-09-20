import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { createCompanyService } from "../../services";


const CreateNewCompany = () => {
  const { token } = useContext(AuthContext);
  
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [bio, setBio] = useState("");
  const [photo, setPhoto] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleForm = async (e) => {
    e.preventDefault();
    setError("");
    setResponse("");
    try {
      setLoading(true);
      const data = new FormData(e.target);
      await createCompanyService(data, token);
      setResponse("Company created");
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };
  return (
    <>
      <form className="userProfile" onSubmit={handleForm}>
        <fieldset>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            id="name"
            required
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="country">country</label>
          <input
            type="text"
            name="country"
            value={country}
            id="country"
            required
            onChange={(e) => setCountry(e.target.value)}
          />
          <label htmlFor="city">city</label>
          <input
            type="text"
            name="city"
            value={city}
            id="city"
            required
            onChange={(e) => setCity(e.target.value)}
          />

          <label htmlFor="bio">Bio</label>
          <input
            type="text"
            name="bio"
            value={bio}
            id="bio"
            required
            onChange={(e) => setBio(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="photo">Photo</label>
          <input
            type="file"
            name="photo"
            id="photo"
            accept={"image/*"}
            onChange={(e) => setPhoto(e.target.files[0])}
          />
          {photo ? (
            <figure>
              <img
                src={URL.createObjectURL(photo)}
                style={{ width: "100px" }}
                alt="Preview"
              />
            </figure>
          ) : null}
        </fieldset>
        <button>Submit</button>
      </form>
      {response && <p>{response}</p>}
      {error ? <p>{error}</p> : null}
      {loading ? <p>loading...</p> : null}
    </>
  );
};

export default CreateNewCompany;
