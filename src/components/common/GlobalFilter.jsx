

import {
  addKeyword,
  addLocation,
} from "../../features/properties/propertiesSlice";
import PricingRangeSlider from "./PricingRangeSlider";
import CheckBoxFilter from "./CheckBoxFilter";
import GlobalSelectBox from "./GlobalSelectBox";

import { useState } from 'react';
import queryString from 'query-string';

import {useNavigate} from 'react-router-dom';
const GlobalFilter = ({ className = "" }) => {
  const navigate = useNavigate();

  
 
  const [keyword, setKeyword] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [location, setLocation] = useState('');

  const handlePropertyType= (event) => {
    setPropertyType(event.target.value);
  };
  const handleKeyword= (event) => {
    setKeyword(event.target.value);
  };
  const handleLocation= (event) => {
    setLocation(event.target.value);
  };

  const queryParams = queryString.stringify({
    propertyType: propertyType,
    keyword: keyword,
    location: location ,
  });
    
  // submit handler
  const submitHandler = () => {
    const url = `/listing-grid-v1?${queryParams}`;
    navigate(url);
    //navigate("/listing-grid-v1?${queryParams}");
  };

  return (
    <div className={`home1-advnc-search ${className}`}>
      <ul className="h1ads_1st_list mb0">
        <li className="list-inline-item">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Entrez le mot cle..."
              onChange={handleKeyword}
            />
          </div>
        </li>
        {/* End li */}

        <li className="list-inline-item">
          <div className="search_option_two">
            <div className="candidate_revew_select">
              <select className="selectpicker w100 form-select show-tick" value={propertyType} onChange={handlePropertyType}>
                <option value="">Type de propriete</option>
                <option value="apart">Appartement</option>
                <option value="bungalow">Bungalow</option>
                <option value="condo">Condo</option>
                <option value="house">Maison</option>
                <option>Terrain</option>
              </select>
            </div>
          </div>
        </li>
        {/* End li */}

        <li className="list-inline-item">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Localisation"
              onChange={handleLocation}
            />
            <label>
              <span className="flaticon-maps-and-flags"></span>
            </label>
          </div>
        </li>
        {/* End li */}

        <li className="list-inline-item">
          <div className="small_dropdown2">
            <div
              id="prncgs"
              className="btn dd_btn"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              <span>Prix</span>
              <label htmlFor="InputEmail2">
                <span className="fa fa-angle-down"></span>
              </label>
            </div>
            <div className="dd_content2 dropdown-menu">
              <div className="pricing_acontent">
                <PricingRangeSlider />
              </div>
            </div>
          </div>
        </li>
        {/* End li */}

        <li className="custome_fields_520 list-inline-item">
          <div className="navbered">
            <div className="mega-dropdown ">
              <span
                className="dropbtn"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
              >
                Specificite<i className="flaticon-more pl10 flr-520"></i>
              </span>

              <div className="dropdown-content dropdown-menu ">
                <div className="row p15">
                  <div className="col-lg-12">
                    <h4 className="text-thm3 mb-4">Amenities</h4>
                  </div>

                  <CheckBoxFilter />
                </div>
                {/* End .row */}

                <div className="row p15 pt0-xsd">
                  <div className="col-lg-12 col-xl-12">
                    <ul className="apeartment_area_list mb0">
                      <GlobalSelectBox />
                    </ul>
                  </div>
                </div>
                {/* End .row */}
              </div>
              {/* End .dropdown-menu */}
            </div>
          </div>
        </li>
        {/* End li */}

        <li className="list-inline-item">
          <div className="search_option_button">
            <button
              onClick={submitHandler}
              type="submit"
              className="btn btn-thm"
            >
              Rechercher
            </button>
          </div>
        </li>
        {/* End li */}
      </ul>
    </div>
  );
};

export default GlobalFilter;
