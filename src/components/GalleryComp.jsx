import React from 'react'
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import destinations from '../assets/destinations.jpg'
import hero1 from '../assets/hero1.jpg'
import hero2 from '../assets/hero2.jpg'
import hero3 from '../assets/hero3.jpg'
import hero4 from '../assets/hero4.jpg'
import china from '../assets/china.jpg'
import dubai from '../assets/dubai.jpg'
import korea from '../assets/korea.jpg'
import paris from '../assets/paris.jpg'
import turkey from '../assets/turkey.jpg'

const GalleryComp = () => {
    return (
        <div>
            {/* HERO SECTION */}
            <div className="relative w-full h-[200px] md:h-[300px] lg:h-[350px] mb-16">
                <img
                    src={destinations}
                    alt="Destinations"
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/40"></div>

                <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-white text-4xl md:text-6xl font-bold font-serif">
                        Our Gallery
                    </h2>
                </div>
            </div>

            {/* GALLERY SECTION */}
            <div className="App">
                <LightGallery
                    speed={500}
                    plugins={[lgThumbnail, lgZoom]}
                    elementClassNames="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 mb-20 rounded-md"
                >
                    <a href={hero1}>
                        <div className="overflow-hidden rounded-xl h-[250px]">
                            <img
                                src={hero1}
                                alt="img1"
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                            />
                        </div>
                    </a>

                    <a href={hero2}>
                        <div className="overflow-hidden rounded-xl h-[250px]">
                            <img
                                src={hero2}
                                alt="img2"
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                            />
                        </div>
                    </a>

                    <a href={hero3}>
                        <div className="overflow-hidden rounded-xl h-[250px]">
                            <img
                                src={hero3}
                                alt="img3"
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                            />
                        </div>
                    </a>
                    <a href={hero4}>
                        <div className="overflow-hidden rounded-xl h-[250px]">
                            <img
                                src={hero4}
                                alt="img4"
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                            />
                        </div>
                    </a>

                    <a href={china}>
                        <div className="overflow-hidden rounded-xl h-[250px]">
                            <img
                                src={china}
                                alt="img5"
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                            />
                        </div>
                    </a>

                    <a href={dubai}>
                        <div className="overflow-hidden rounded-xl h-[250px]">
                            <img
                                src={dubai}
                                alt="img6"
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                            />
                        </div>
                    </a>
                    <a href={korea}>
                        <div className="overflow-hidden rounded-xl h-[250px]">
                            <img
                                src={korea}
                                alt="img7"
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                            />
                        </div>
                    </a>
                    <a href={paris}>
                        <div className="overflow-hidden rounded-xl h-[250px]">
                            <img
                                src={paris}
                                alt="img8"
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                            />
                        </div>
                    </a>
                    <a href={turkey}>
                        <div className="overflow-hidden rounded-xl h-[250px]">
                            <img
                                src={turkey}
                                alt="img9"
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                            />
                        </div>
                    </a>

                </LightGallery>
            </div>

        </div>



    )
}

export default GalleryComp
