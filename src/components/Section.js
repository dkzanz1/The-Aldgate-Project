import React from 'react';
import TextMaker from './lorem-ipsum';


const Section = () => {
    return(
    <>
    <div className='jumbotron text-center'>
    <h2>Section component</h2>
    </div>
        <div className="container">
            <div className="row">
              {/* Image on the left, text on the right (medium and larger screens) */}
                <section className='col-md-8  order-md-1 '>
                    <img 
                        src="../images/building-in-london.jpeg"
                        alt="Responsive"
                        className="img-fliud" 
                    />
                </section>
                <section className='col-md-4  order-md-2 '>
                <h3 className='text-center'>Intro text</h3>
                    <TextMaker />
                </section>
            </div>
        </div>
    </>
    );
};

export default Section;