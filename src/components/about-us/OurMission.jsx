
import PopupVideo from "../common/PopupVideo";

const OurMission = () => {
  const missionContent = [
    {
      id: 1,
      icon: "flaticon-user",
      number: "80,123",
      meta: "Customers to date",
    },
    {
      id: 2,
      icon: "flaticon-home",
      number: "$74 Billion",
      meta: "In home sales",
    },
    {
      id: 3,
      icon: "flaticon-transfer",
      number: "$468 Million",
      meta: "In Savings",
    },
  ];

  return (
    <>
      <div className="col-lg-8 col-xl-7">
        <div className="about_content">
          <p className="large">
          Notre objectif est de faciliter la mise en relation directe
           des propriétaires et des utilisateurs, en éliminant les 
           intermédiaires coûteux et en rétablissant la confiance entre 
           ces deux parties.
          </p>
          <p>
          Nous avons constaté un problème majeur dans le système actuel :
           les intermédiaires qui se font passer pour des propriétaires. Ces 
           acteurs trompeurs non seulement imposent des commissions exorbitantes
            aux utilisateurs, mais ils entravent également la facilité de vente 
            des biens et brisent la confiance entre les propriétaires et les 
            utilisateurs.
          </p>
          <p>
          Pour résoudre ce problème, nous avons développé un système de compte 
          certifié propriétaire qui permet aux propriétaires d'afficher 
          directement leurs coordonnées dans les caractéristiques de leur bien. 
          Grâce à cette approche transparente, les utilisateurs peuvent contacter
           directement les propriétaires, sans avoir à passer par des intermédiaires
            malveillants.
          </p>
          <p>
          Notre plateforme met l'accent sur la simplicité, l'efficacité et la transparence.
           Nous offrons aux propriétaires une solution fiable pour mettre en valeur leurs biens
          et attirer les utilisateurs intéressés. Parallèlement, nous permettons aux utilisateurs 
          de trouver facilement et rapidement les biens qui correspondent à leurs besoins, 
          en évitant les frais inutiles et en établissant une relation de confiance avec les propriétaires.
          </p>
          <p>
          Chez nous, nous croyons en l'importance de créer une communauté d'utilisateurs
           et de propriétaires qui interagissent directement, sans barrières 
           artificielles et coûteuses. Nous sommes déterminés à changer la donne et à 
           rendre la recherche et la mise en vente de biens plus transparentes, 
           équitables et accessibles à tous.
          </p>

          <ul className="ab_counting">
            {missionContent.map((item) => (
              <li className="list-inline-item" key={item.id}>
                <div className="about_counting">
                  <div className="icon">
                    <span className={`${item.icon}`}></span>
                  </div>
                  <div className="details">
                    <h3>{item.number}</h3>
                    <p>{item.meta}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          {/* End .ab_counting */}
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-4 col-xl-5">
        <div className="about_thumb">
          <img
            className="img-fluid w100 cover"
            src="/assets/images/about/1.jpg"
            alt="1.jpg"
          />
          <PopupVideo />
        </div>
      </div>
    </>
  );
};

export default OurMission;
