import React from 'react';
import TextMaker from './lorem-ipsum';


const Section = () => {
    return<>
    <h2>Section component</h2>
        <div className="container">
            <div className="row">
                <section className='col-sm-12 col-md-6 order-md-1'>
                    <img 
                        src="../images/building-in-london.jpeg"
                        alt="responsive"
                        className="img-fliud"
                    />
                </section>
                <h3>Intro text</h3>
                <section className='col-sm-12 col-md-6 d-flex align-items-center justify-content-center order-md-2 '>
                    <TextMaker />
                </section>
            </div>
        </div>
    </>
};

export default Section;