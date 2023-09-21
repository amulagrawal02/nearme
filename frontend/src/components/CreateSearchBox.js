import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
let autoComplete;
var addressDetails = [];

function CreateSearchBox({ parentCallback }) {
  const [query, setQuery] = useState("");
  const autoCompleteRef = useRef(null);

  // this function is used to use external script file in react js
  const loadScript = (url, callback) => {
    let script = document.createElement("script");
    script.type = "text/javascript";

    if (script.readyState) {
      script.onreadystatechange = function () {
        if (
          script.readyState === "loaded" ||
          script.readyState === "complete"
        ) {
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {
      script.onload = () => callback();
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  };
  function handleScriptLoad(updateQuery, autoCompleteRef) {
    autoComplete = new window.google.maps.places.Autocomplete(
      autoCompleteRef.current
    );
    autoComplete.setFields(["address_components", "formatted_address"]);
    autoComplete.addListener("place_changed", () =>
      handlePlaceSelect(updateQuery)
    );
  }

  async function handlePlaceSelect(updateQuery) {
    addressDetails = [];
    const addressObject = autoComplete.getPlace();
    const query = addressObject.formatted_address;
    updateQuery(query);
    let address = addressObject.formatted_address;
    console.log(addressObject);
    const data = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyAzogbygwIeTfziEdYDzKgCdv5z9TtJueY`
    );
    addressDetails.push(data.data.results[0].geometry.location);
    addressDetails.push(address);
    parentCallback(addressDetails);
    console.log(data.data.results[0].geometry.location);
  }

  useEffect(() => {
    loadScript(
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyAzogbygwIeTfziEdYDzKgCdv5z9TtJueY&libraries=places",
      () => handleScriptLoad(setQuery, autoCompleteRef)
    );
  }, []);
  return (
    <div className="search-location-input">
      <input
        ref={autoCompleteRef}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Your Address..."
        value={query}
        id="search_bx"
        style={{ width: "15rem", height: "2rem" }}
      />
    </div>
  );
}
export default CreateSearchBox;
