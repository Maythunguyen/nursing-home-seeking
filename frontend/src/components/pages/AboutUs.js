import React from 'react';
import Footer from '../Footer';


const AboutUs = props => {
  return (
    <>
        <div className='about-us'>
          <div className='about-us-title'>
            <h1>Empowering Your Care Journey,<br/> One Click and Search at a Time</h1>
            <p>We provide a user-friendly platform tailored specifically for individual support roles. We understand the unique demands of this sector, and our goal is to make the job search experience as seamless as possible</p>
          </div>
          <div className='about-us-pic'>
            <img alt="img-one" src="https://images.unsplash.com/photo-1664575599618-8f6bd76fc670?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"/>
            <img alt="img-two" src="https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2785&q=80"/>
          </div>
          <div className='all-about-us'>
            <div class="card vision">
              <h2>Our Vision</h2>
              <p>Our vision is to empower individuals by connecting them with fulfilling careers in individual support. We believe that every person deserves access to high-quality care, and every healthcare professional deserves a rewarding and supportive work environment. Through our platform, we strive to create a community where both job seekers and recruiters thrive</p>
            </div>

            <div class="card role">
                <h2>Our Role in Your Journey</h2>
                <p>We serve as the compass in your job search journey. Our advanced search features enable you to pinpoint the ideal nursing homes or home care services near your location or preferred address. We curate listings based on your criteria, ensuring you have access to the opportunities that matter most to you.</p>
                <p>Together, we're building a stronger, more compassionate healthcare community.</p>
            </div>

            <div class="card utilize_community">
                <h2>Connecting</h2>
                <p>Our Community Page is the heart of our platform. It's where recruiters and candidates come together to forge meaningful professional relationships. Whether you're a healthcare professional looking for the perfect role or a recruiter seeking top talent, our Community Page is designed to facilitate connections and foster collaborations.</p>
                <p>Join our community and embark on a journey towards a fulfilling and rewarding career in individual support. </p>
            </div>

            <div class="card utilize_highlight">
                <h2>Top Nursing Homes</h2>
                <p>Explore our highlight section featuring the most sought-after nursing homes by candidates. These institutions have not only met the highest industry standards but have also been highly rated by professionals who found their dream roles through our platform. Discover the best opportunities that await you.</p>
            </div>

          </div>

        </div>
        <Footer/>
        </>

   
  )
}


export default AboutUs