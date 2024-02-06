import GlobalHeroFilter from "../common/GlobalHeroFilter";

const HeroFilter = () => {
    return (
        <div className="home_content">
            <div className="home-text text-center">
                <h2 className="fz55">Dites Adieu Aux Demarcheurs</h2>
                <p className="fz18 color-white">
                   Negociez directement avec des proprietaires de vos biens.
                </p>
            </div>
            {/* End .home-text */}

            <GlobalHeroFilter />
        </div>
    );
};

export default HeroFilter;
