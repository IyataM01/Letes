import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';

var testimonialData = [
    {
        id: 1,
        
        description: "With Letes Insurance, I feel secure knowing my family is protected. Their life insurance policies are affordable and provide the coverage we need. I'm grateful for their reliable service",
        Name: "Michael ",
        proffession: "Real Estate Agent",
    },

    {
        id: 2,
        
        description: "I trust Letes Insurance with all my insurance needs. They've consistently provided reliable coverage and exceptional customer service. I wouldn't go anywhere else.",
        Name: "Emily ",
        proffession: "Nurse",
    },

    {
        id: 3,
        
        description: "Filing a claim with Letes Insurance was surprisingly hassle-free. They were prompt in their response and kept me informed throughout the entire process. I'm very satisfied with their service.",
        Name: "David ",
        proffession: "Accountant",
    },

    {
        id: 4,
        
        description: "The team at Letes Insurance is always friendly and professional. They took the time to understand my needs and provided a tailored policy that fits my budget. Thank you for the exceptional service!.",
        Name: "Angela ",
        proffession: "Small Business Owner",
    },

    {
        id: 5,
        
        description: "I was impressed by how quickly Letes Insurance handled my car accident claim. They made the process easy and stress-free. I feel secure knowing I'm covered by them",
        Name: "Robert ",
        proffession: "Software Engineer",
    },

    {
        id: 6,
        
        description: "I've been a policyholder with Letes Insurance for over five years now, and their coverage options are fantastic. They offer great rates and the peace of mind that comes with knowing you're fully protected",
        Name: "Jessica ",
        proffession: "Teacher",
    },

    
]
export default function AppTestimonial(){


    return(

        <section className='testimonial' id='Testimonial'>
    <container>

    <div className='section-tittle'>
            <h3>Clients Testimonial</h3>
            <p className='test'>Your Trusted Partner In Comprehensive and Affordable Insurance Solutions </p>
        </div>

        <Carousel controls={false}>

        {testimonialData.map(testimony =>{

        return(

            <Carousel.Item>
        
            <blockquote>
              <p>{testimony.description}</p>
      
      
              <cite>
              <span>{testimony.Name}</span>
              <span>{testimony.proffession}</span>
              </cite>
      
            </blockquote>
      
            </Carousel.Item>
        )
        
        
        })
        
        }
        
     
    </Carousel>
    </container>
    </section>

    );

}