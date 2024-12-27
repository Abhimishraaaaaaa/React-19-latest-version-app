import { FaLongArrowAltRight } from "react-icons/fa";

export const HeroSection = () => {
    return (

        <main className="hero-section main">
            <div className="container grid grid-two-cols">
                <div className="hero-content">
                    <h1 className="heading-xl">Lorem ipsum dolor sit amet .</h1>
                    <p> Atque, vero rerum in quia voluptatibus impedit ipsam quasi architecto quod itaque quidem saepe deleniti est porro consectetur accusamus excepturi tempora reiciendis consectetur adipisicing elit?
                    </p>
                    <button className="btn btn-darken btn-inline bg-white-box">
                        start Exploring <FaLongArrowAltRight />
                    </button>


                </div>
                <div className="hero-image">
                    <img src="/images/world.png" alt="world beauty" className="banner-image" />
                </div>
            </div>

        </main>
    )
}
