import "./Advertisements.css"


const Advertisements = () => {
    return(
        <div className="backgroundAdvertisements text-white p-1">
            <li className="d-flex flex-md-row flex-sm-column justify-content-between align-items-center my-1">
                <ul className="mx-5 ulAdvertisments">Ad 1</ul>
                <ul className="ulAdvertisments">•</ul>
                <ul className="ulAdvertisments">Ad 2</ul>
                <ul className="ulAdvertisments">•</ul>
                <ul className="mx-5 ulAdvertisments">Envíos gratis</ul>
            </li>
        </div>
    )
}

export default Advertisements;