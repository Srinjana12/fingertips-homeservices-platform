let autocomplete;
let autocompletepro;

function initAutocompletePro() {
  autocompletepro = new google.maps.places.Autocomplete(
    document.getElementById("address1Pro"),
    {
      componentRestrictions: { country: ["us"] },
      fields: ["address_components", "geometry"],
      types: ["address"],
    }
  );
  autocompletepro.addListener("place_changed", fillInAddressPro);
}

function initAutocomplete() {
  autocomplete = new google.maps.places.Autocomplete(
    document.getElementById("address1"),
    {
      componentRestrictions: { country: ["us"] },
      fields: ["address_components", "geometry"],
      types: ["address"],
    }
  );
  autocomplete.addListener("place_changed", fillInAddress);
}

function fillInAddress() {
  const place = autocomplete.getPlace();
  let address1 = "";
  let postcode = "";
  let city = "";
  let state = "";

  for (const component of place.address_components) {
    const componentType = component.types[0];
    switch (componentType) {
      case "postal_code": {
        postcode = `${component.long_name}${postcode}`;

        break;
      }
      case "street_number": {
        address1 = `${component.long_name} ${address1}`;

        break;
      }
      case "route": {
        address1 += component.short_name;

        break;
      }
      case "locality": {
        city = component.long_name;

        break;
      }
      case "administrative_area_level_1": {
        state = component.short_name;

        break;
      }
      default:
        break;
    }
  }
  document.getElementById("address1").value = address1;
  document.getElementById("zip").value = postcode;
  document.getElementById("city").value = city;
  document.getElementById("state").value = state;
}

function fillInAddressPro() {
  const place = autocompletepro.getPlace();
  let address1pro = "";
  let postcodepro = "";
  let citypro = "";
  let statepro = "";
  for (const component of place.address_components) {
    const componentType = component.types[0];
    switch (componentType) {
      case "postal_code": {
        postcodepro = `${component.long_name}${postcodepro}`;
        break;
      }
      case "street_number": {
        address1pro = `${component.long_name} ${address1pro}`;
        break;
      }
      case "route": {
        address1pro += component.short_name;
        break;
      }
      case "locality": {
        citypro = component.long_name;
        break;
      }
      case "administrative_area_level_1": {
        statepro = component.short_name;
        break;
      }
      default:
        break;
    }
  }
  document.getElementById("address1Pro").value = address1pro;
  document.getElementById("zipPro").value = postcodepro;
  document.getElementById("cityPro").value = citypro;
  document.getElementById("statePro").value = statepro;
}

window.onload = function () {
  initAutocomplete();
  initAutocompletePro();
};
