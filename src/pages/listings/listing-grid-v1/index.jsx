
import GridV1 from "@/components/listing-grid/grid-v1";

import MetaComponent from "@/components/common/MetaComponent";
import { useParams } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addFeatured,
  addStatusType,
} from "../../../features/filter/filterSlice";
import {
  addAmenities,
  addAreaMax,
  addAreaMin,
  addBathrooms,
  addBedrooms,
  addGarages,
  addKeyword,
  addLocation,
  addPrice,
  addPropertyType,
  addStatus,
  addYearBuilt,
  resetAmenities,
} from "../../../features/properties/propertiesSlice";
import PricingRangeSlider from "../../../components/common/PricingRangeSlider";
import { v4 as uuidv4 } from "uuid";





const metadata = {
  title: 'Simple Listing – Grid V1 || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const ListingGridPage1 = () => {
 // const params = useParams();
  // const {propertyType } = useParams();
  // console.log("juki",propertyType);
  const locate = useLocation();
  const params = queryString.parse(locate.search);
  console.log("juki1",params.keyword); // Affiche la valeur du paramètre "keyword"
  console.log("juki2",params.location); // Affiche la valeur du paramètre "location"
  console.log("juki3",params.propertyType); // Affiche la valeur du paramètre "propertyType"
  const {
    keyword,
    location,
    status,
    propertyType,
    bathrooms,
    bedrooms,
    garages,
    yearBuilt,
    area,
    amenities,
  } = useSelector((state) => state.properties);

  // input state
  const [getKeyword, setKeyword] = useState(params.keyword);
  const [getLocation, setLocation] = useState(params.location);
  const [getStatus, setStatus] = useState(status);
  const [getPropertiesType, setPropertiesType] = useState(params.propertyType);
  const [getBathroom, setBathroom] = useState(bathrooms);
  const [getBedroom, setBedroom] = useState(bedrooms);
  const [getGarages, setGarages] = useState(garages);
  const [getBuiltYear, setBuiltYear] = useState(yearBuilt);
  const [getAreaMin, setAreaMin] = useState(area.min);
  const [getAreaMax, setAreaMax] = useState(area.max);
  console.log("pilon",propertyType);
  console.log("kilo",keyword);

  const [getAdvanced, setAdvanced] = useState([
    { id: uuidv4(), name: "Air Conditioning" },
    { id: uuidv4(), name: "Barbeque" },
    { id: uuidv4(), name: "Gym" },
    { id: uuidv4(), name: "Microwave" },
    { id: uuidv4(), name: "TV Cable" },
    { id: uuidv4(), name: "Lawn" },
    { id: uuidv4(), name: "Refrigerator" },
    { id: uuidv4(), name: "Swimming Pool" },
    { id: uuidv4(), name: "WiFi" },
    { id: uuidv4(), name: "Sauna" },
    { id: uuidv4(), name: "Dryer" },
    { id: uuidv4(), name: "Washer" },
    { id: uuidv4(), name: "Laundry" },
    { id: uuidv4(), name: "Outdoor Shower" },
    { id: uuidv4(), name: "Window Coverings" },
  ]);

  const dispath = useDispatch();
  // keyword
  useEffect(() => {
    dispath(addKeyword(getKeyword));
  }, [dispath, getKeyword]);

  // location
  useEffect(() => {
    dispath(addLocation(getLocation));
  }, [dispath, getLocation]);

  // status
  useEffect(() => {
    dispath(addStatus(getStatus));
  }, [dispath, getStatus]);

  // properties type
  useEffect(() => {
    dispath(addPropertyType(getPropertiesType));
  }, [dispath, getPropertiesType]);

  // bathroom
  useEffect(() => {
    dispath(addBathrooms(getBathroom));
  }, [dispath, getBathroom]);

  // bedroom
  useEffect(() => {
    dispath(addBedrooms(getBedroom));
  }, [dispath, getBedroom]);

  // garages
  useEffect(() => {
    dispath(addGarages(getGarages));
  }, [dispath, getGarages]);

  // built years
  useEffect(() => {
    dispath(addYearBuilt(getBuiltYear));
  }, [dispath, getBuiltYear]);

  // area min
  useEffect(() => {
    dispath(dispath(addAreaMin(getAreaMin)));
  }, [dispath, getAreaMin]);

  // area max
  useEffect(() => {
    dispath(dispath(addAreaMax(getAreaMax)));
  }, [dispath, getAreaMax]);

  // clear filter
  // const urlHandler = () => {
  //   urlFilters();
  // };

  
 
 
  
  // clear advanced
 
  return (
    <>
    <MetaComponent meta={metadata} />
      <GridV1 />
    </>
  );
};

export default ListingGridPage1
