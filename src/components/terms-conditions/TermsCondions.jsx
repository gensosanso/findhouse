import { Link } from "react-router-dom";

const TermsCondions = () => {
  const termsContent = [
    {
      id: 1,
      title: "Politique de confidentialite",
      text1: "En acceptant les conditions d’utilisation de ce site, vous acceptez que FindHouse utilise vos données personnelles pour les finalités suivantes :",
      text1ex: `Nous collectons les informations que vous nous fournissez volontairement lors de la création de votre compte utilisateur, 
      de la publication de contenu ou de la communication avec notre équipe de support. Ces informations peuvent inclure votre nom, votre
       adresse e-mail, votre numéro de téléphone, votre adresse postale, ainsi que d'autres informations pertinentes.
       Nous pouvons également collecter automatiquement certaines informations lorsque vous utilisez notre plateforme, telles que 
       votre adresse IP, votre type de navigateur, votre fournisseur d'accès à Internet, les pages que vous consultez, ainsi que des informations sur
        votre utilisation de notre plateforme.
      `,
      text2: `1. Collecte d'Informations `,
      text2ex: `Nous utilisons les informations collectées pour:
      Fournir, maintenir et améliorer notre plateforme, ainsi que les services connexes.
      Faciliter la mise en relation entre les propriétaires et les utilisateurs intéressés par des biens immobiliers.
      Vous contacter pour répondre à vos demandes, fournir un support technique ou vous informer des mises à jour de notre plateforme.
      Personnaliser votre expérience utilisateur et vous fournir des recommandations basées sur vos préférences.
      Analyser les tendances d'utilisation et les comportements des utilisateurs pour améliorer nos services et notre plateforme.`,
      text3: `2. Utilisation des Informations `,
      text3ex: ` Nous ne vendons, ne louons ni ne partageons vos informations personnelles avec des tiers, sauf dans les cas suivants :
      :Avec votre consentement préalable.
      Lorsque cela est nécessaire pour fournir nos services, par exemple, pour faciliter la mise en relation entre les propriétaires et les utilisateurs.
      Lorsque cela est requis par la loi, une réglementation ou une ordonnance judiciaire.
      Dans le cadre d'une fusion, d'une acquisition ou d'une vente de la totalité ou d'une partie de nos actifs, auquel cas vos informations personnelles 
      peuvent être transférées à l'entité acquéreuse.`,
      text4: `3. Partage des Informations :`,
      text4ex: `Nous prenons des mesures de sécurité appropriées pour protéger vos informations personnelles contre tout accès non autorisé, toute divulgation, altération ou destruction.`,
      text5: `4. Protection des Informations :`,
      text5ex: `Nous prenons des mesures de sécurité appropriées pour protéger vos informations personnelles contre tout accès non autorisé, toute divulgation, altération ou destruction.`,
      text6: `5. Vos Choix et Droits :`,
      text6ex: ` Vous pouvez accéder, mettre à jour ou supprimer vos informations personnelles en vous connectant à votre compte utilisateur ou en nous contactant à [adresse e-mail de contact]. Veuillez noter que nous pouvons conserver certaines informations conformément à nos obligations légales ou pour des raisons légitimes.`,
      text7: `6. Liens vers des Sites Tiers :`,
      text7ex: `Notre plateforme peut contenir des liens vers des sites tiers. Cette politique de confidentialité ne s'applique pas à ces sites tiers, et nous ne sommes pas responsables de leurs pratiques en matière de confidentialité. Nous vous encourageons à consulter les politiques de confidentialité 
      de ces sites tiers avant de fournir vos informations personnelles.`,
      text8: `7. Modifications de la Politique de Confidentialité`,
      text8ex: `Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment, sans préavis. Les modifications seront effectives dès leur publication sur notre plateforme. Nous vous encourageons à consulter régulièrement cette politique de confidentialité pour prendre connaissance de toute modification.`,
    },
    {
      id: 2,
      title: "Nos Termes et Conditions d’Utilisation",
      textsum: "Veuillez lire attentivement ces termes et conditions  avant de créer un compte partenaire sur la plateforme. Ces Conditions régissent votre utilisation de notre plateforme en tant que partenaire et définissent les droits et obligations entre vous Partenaire et FindHouse. En créant un compte partenaire, vous acceptez ces Conditions dans leur intégralité.En acceptant les conditions d utilisation de ce site, vous acceptez que FindHouse utilise vos données personnelles pour les finalités suivantes :",
      text1: "1. Création de Compte Partenaire",
      text1ex: `Pour devenir un partenaire sur notre plateforme, vous devrez créer un compte partenaire. Lors de la création
      de votre compte, vous devrez fournir des informations précises, à jour et complètes, conformément à notre processus de
      Know Your Customer (KYC). Ce processus de KYC est mis en place pour garantir la traçabilité des utilisateurs et la conformité aux réglementations en vigueur.
      Vous acceptez de nous fournir tous les documents et informations nécessaires lors de la phase de KYC, tels que des pièces d'identité valides, des informations
       de contact et des informations sur votre activité professionnelle.
       Nous nous réservons le droit de refuser la création d'un compte partenaire si les informations fournies lors du processus de KYC sont incomplètes, inexactes ou ne respectent pas nos critères de conformité.
      `,
      text2: `2. Responsabilités du Partenaire `,
      text2ex: `En tant que partenaire, vous êtes responsable de l'exactitude des informations fournies lors de la création de votre compte, ainsi que de toutes les activités réalisées sous votre compte.
      Vous acceptez d'utiliser notre plateforme de manière légale et éthique, en respectant toutes les lois et réglementations applicables.`,
      text3: `3. Utilisation de la Plateforme.`,
      text3ex: `En tant que partenaire, vous acceptez d'utiliser notre plateforme conformément aux règles et politiques établies par [nom de la startup]. Cela inclut le respect des politiques de publication de contenu, des règles de tarification et d'autres lignes directrices pertinentes.
       Vous acceptez de ne pas utiliser notre plateforme à des fins frauduleuses, illégales ou nuisibles. Vous ne devez pas collecter, stocker ou utiliser les informations personnelles des utilisateurs sans leur consentement.`,
      text4: `4. Propriété Intellectuelle:`,
      text4ex: `Tout le contenu présent sur notre plateforme, y compris les textes, images, logos, marques de commerce et autres éléments, sont protégés par les lois sur la propriété intellectuelle. Vous vous engagez à respecter tous les droits de propriété intellectuelle de FindHouse.`,
      text5: `5. Limitation de Responsabilité :`,
      text5ex: `Nous ne serons pas responsables des dommages directs, indirects, consécutifs ou spéciaux résultant de l'utilisation de notre plateforme en tant que partenaire.`,
      text6: `6. Modifications des Conditions :`,
      text6ex: ` Nous nous réservons le droit de modifier ces Conditions à tout moment, sans préavis. Les modifications seront effectives dès leur publication sur notre plateforme. Nous vous encourageons à consulter régulièrement ces Conditions pour prendre connaissance de toute modification.`,
      
      text7: `En créant un compte partenaire sur notre plateforme, vous acceptez d'être lié par ces Termes et Conditions. Si vous n'acceptez pas ces Conditions, veuillez ne pas créer de compte partenaire.

      Si vous avez des questions concernant ces Termes et Conditions, veuillez nous contacter à henriettegogo@gmail.com.
      Dernière mise à jour : 3 fevrier 2024.`,
      
    },
  ];

  const navigationList = [
    { id: 1, routeLink: "#", name: "Welcome Text" },
    { id: 2, routeLink: "#", name: "Our Terms" },
    { id: 3, routeLink: "#", name: "Conditions" },
    { id: 4, routeLink: "#", name: "Your Privacy" },
    { id: 5, routeLink: "#", name: "Informations We Collect" },
  ];

  return (
    <div className="row">
      <div className="col-lg-8 col-xl-8">
        <div className="terms_condition_grid">
          {termsContent.map((item) => (
            <div className="grids mb30" key={item.id}>
              <h4>{item.title}</h4>
              <p className="mb20">{item.text1}</p>
              <p className="mb20">{item.text1ex}</p>
              <p>{item.text2}</p>
              <p>{item.text2ex}</p>
              <p>{item.text3}</p>
              <p>{item.text3ex}</p>
              <p>{item.text4}</p>
              <p>{item.text4ex}</p>
              <p>{item.text5}</p>
              <p>{item.text5ex}</p>
              <p>{item.text6}</p>
              <p>{item.text6ex}</p>
              <p>{item.text7}</p>
              <p>{item.text7ex}</p>
              
            </div>
          ))}
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-4 col-xl-4">
        <div className="terms_condition_widget">
          <h4 className="title">Navigation</h4>
          <div className="widget_list">
            <ul className="list_details">
              {navigationList.map((list) => (
                <li key={list.id}>
                  <Link to={list.routeLink}>
                    <i className="fa fa-caret-right mr10"></i>
                    {list.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsCondions;
