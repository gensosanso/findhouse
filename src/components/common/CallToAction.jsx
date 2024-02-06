import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <div className="row">
      <div className="col-lg-8">
        <div className="start_partner tac-smd">
          <h2>Devenez Partenaire</h2>
          <p>Contactez-nous pour la promotion de vos biens immobiliers</p>
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-4">
        <div className="parner_reg_btn text-right tac-smd">
          <Link to="/contact" className="btn btn-thm2">
           Contactez-nous
          </Link>
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default CallToAction;
