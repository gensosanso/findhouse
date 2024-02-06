const WhyChoose = ({ style = "" }) => {
  const whyCooseContent = [
    {
      id: 1,
      icon: "flaticon-high-five",
      title: "Mise en relation Directe",
      descriptions: `Nous certifions les comptes des proprietaires des biens sur notre plateforme afin de vous proposer la meilleure experience.`,
    },
    {
      id: 2,
      icon: "flaticon-home-1",
      title: "Large gamme de propriétés",
      descriptions: `Nous avons dans notre catalogue une large gamme de biens dans differents villes (Douala, Kribi,Yaounde etc..).`,
    },
    {
      id: 3,
      icon: "flaticon-profit",
      title: "Faites des economies",
      descriptions: `Notre plateforme vous propose de faire des economies en vous proposant des biens de qualite et de prix compétitifs.`,
    },
  ];

  return (
    <>
      {whyCooseContent.map((item) => (
        <div className="col-md-6 col-lg-4 col-xl-4" key={item.id}>
          <div className={`why_chose_us ${style}`}>
            <div className="icon">
              <span className={item.icon}></span>
            </div>
            <div className="details">
              <h4>{item.title}</h4>
              <p>{item.descriptions}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default WhyChoose;
