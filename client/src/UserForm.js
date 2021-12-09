import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router';


const UserForm = () => {


  const handleSubmit = async (e) => {
    // this prevents a reload
    e.preventDefault();
    console.log({ name: name, location: location, move: move, poketype: poketype });
    const pokemon = { name: name, location: location, move: move, poketype: poketype };

    if (params.id) {
      // update logic here
      try {
        let response = await axios.put(`/api/pokemons/${params.id}`, pokemon);
        console.log(response.data);
        // need update UI (update response.data in items)
        navigate("/");
      } catch (err) {
        alert(`${err.response.data.errors}`);
        console.log(err);
        console.log(err.response);
        console.log(err.response.data.errors);
      }
    } else {
      // creaete logic here
      // axios call here
      // save to database DONE
      try {
        let response = await axios.post("/api/pokemons", pokemon);
        navigate("/");
        // need update  (add response.data to items)
      } catch (err) {
        alert("err occured");
        console.log(err);
        console.log(err.response);
      }
    }
  };
  return (
    <div>
      <h1>{params.id ? "Edit" : "New"} Pokemon </h1>
      <form onSubmit={handleSubmit}>
        <p>Name</p>
        <input value={name} onChange={(e) => setNew_first_name(e.target.value)} />
        <p>Location</p>
        <input value={location} onChange={(e) => setNew_last_name(e.target.value)} />
        <p>Move</p>
        <input value={move} onChange={(e) => setNew_age(e.target.value)} />
        <p>Type</p>
        <input value={poketype} onChange={(e) => setType(e.target.value)} />
        <p>Type</p>
        <input value={poketype} onChange={(e) => setNew_gender(e.target.value)} />
        <button>{params.id ? "Update" : "Create"} </button>
      </form>
    </div>
  );
};


export default UserForm;