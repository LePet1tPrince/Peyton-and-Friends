import React from 'react';
import about from '../../images/about-pic.jpg';
import BlankSpace from '../BlankSpace';

export default function AboutView() {
  return (
    <div className="fullscreen">
            {/* <Fade duration={2000}> */}


            <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row flex-row align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6 align-contents-center container">
                <img src={about} className="mx-lg-auto img-fluid rounded-3" alt="Bootstrap Themes" width="800" height="600" loading="lazy"/>
                </div>
                <div className="col-lg-6">
                <h1 className="lh-1 mb-3 font-56 bold">About Us</h1>
                <p className="ps-3 fs-5 double-space"> You've heard of mother-daughter companies. We are a monther-daught-granddaughter company. We make great clothes for kids. We should get you a picture that is actually of the 3 of you. I couldn't find one so I have one of the whole fam.</p>
               
               
                
                </div>
            </div>
            <div className="row">
              
            </div>
            </div>
           
             <BlankSpace/>

            {/* </Fade> */}
        
      </div>
  )
}
