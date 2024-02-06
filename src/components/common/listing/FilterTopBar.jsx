

import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addFeatured,
  addStatusType,
} from "../../../features/filter/filterSlice";

const FilterTopBar = () => {
  const { length } = useSelector((state) => state.properties);
  const { statusType, featured } = useSelector((state) => state.filter);
  const [getStatus, setStatus] = useState(statusType);
  const [getFeatured, setFeatured] = useState(featured);

  const dispatch = useDispatch();

  // add status
  useEffect(() => {
    dispatch(addStatusType(getStatus));
  }, [dispatch, getStatus]);

  // add featured
  useEffect(() => {
    dispatch(addFeatured(getFeatured));
  }, [dispatch, getFeatured]);

  // clear filter
  useEffect(() => {
    statusType === "" && setStatus("");
    featured === "" && setFeatured("");
  }, [statusType, setStatus, featured, setFeatured]);

  return (
    <>
      <div className="col-sm-12 col-md-4 col-lg-4 col-xl-5">
        <div className="left_area tac-xsd">
          <p>
            <span className={length === 0 ? "text-danger" : undefined}>
              {length}{" "}
            </span>
            {length !== 0 ? (
              "Resultats"
            ) : (
              <span className="text-danger">Pas de resultats</span>
            )}
          </p>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-12 col-md-8 col-lg-8 col-xl-7">
        <div className="right_area text-end tac-xsd">
          <ul>
            <li className="list-inline-item">
              <span className="stts">Propriete:</span>
              <select
                className="selectpicker show-tick"
                onChange={(e) => setStatus(e.target.value)}
                value={getStatus}
              >
                <option value="">Longevite</option>
                <option value="old">Vieux</option>
                <option value="recent">Recent</option>
              </select>
            </li>
            <li className="list-inline-item">
              <span className="shrtby">Trier par:</span>
              <select
                className="selectpicker show-tick"
                onChange={(e) => setFeatured(e.target.value)}
                value={getFeatured}
              >
                <option value="">Contrat</option>
                <option value="sale">A vendre</option>
                <option value="rent">A louer</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
      {/* End .col */}
    </>
  );
};

export default FilterTopBar;
