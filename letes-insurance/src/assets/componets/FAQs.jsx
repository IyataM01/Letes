
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




var FaqsData = [


    {
        id: 1,
        Question: "What is insurance?",
        Answer: "Insurance is a contract in which an individual or entity receives financial protection or reimbursement against losses from an insurance company. The company pools clients' risks to make payments more affordable for the insured.",
        
       
    },


    {
        id: 2,
        Question: "How does Letes insurance work? ",
        Answer: "When you purchase an insurance policy, you pay premiums to the insurance company. In return, the company agrees to cover certain losses, damages, or liabilities as specified in the policy. If you experience a covered event, you file a claim, and the insurer pays for the losses according to the policy terms",
        
       
    },

    

    {
        id: 3,
        Question: "What types of insurance are available? ",
        Answer: "Common types include health insurance, life insurance, auto insurance, homeowners/renters insurance, disability insurance, travel insurance, pet insurance, liability insurance, and business insurance.",
        
       
    },

    {
        id: 4,
        Question: "What is an exclusion in an insurance policy? ",
        Answer: "An exclusion is a provision within an insurance policy that eliminates coverage for certain risks, events, or conditions. It's important to read and understand the exclusions in your policy to know what is not covered.",
        
       
    },
    

    {
        id: 5,
        Question: "Can my insurance policy be canceled? ",
        Answer: "Yes, an insurance policy can be canceled by either the insurer or the insured. Common reasons for cancellation include non-payment of premiums, fraud, or significant changes in risk. Policies also have renewal terms, and either party can choose not to renew the policy at the end of a term.",
        
       
    },
]
var FaqsData2 = [

    {
        id: 6,
        Question: "What factors affect my insurance premiums? ",
        Answer: "Factors that can affect your premiums include your age, gender, location, health, driving record, type of coverage, deductible amount, and the insurance company's assessment of your risk level.",
        
       
    },

    {
        id: 7,
        Question: "How do I file an insurance claim? ",
        Answer: "To file an insurance claim, contact your insurance company as soon as possible after the event occurs. Provide all necessary documentation, such as proof of loss, photos, receipts, and any other required information. Follow the insurer's instructions for submitting the claim.",
        
       
    },

    {
        id: 8,
        Question: "What is a no-claims bonus? ",
        Answer: "A no-claims bonus is a discount on insurance premiums awarded to policyholders who have not made any claims during a specified period. It rewards safe behavior and encourages policyholders to avoid filing minor claims.",
        
       
    },

    {
        id: 9,
        Question: "How does bundling insurance policies work? ",
        Answer: "Bundling insurance policies means purchasing multiple types of insurance (such as home and auto) from the same insurer. Insurers often offer discounts for bundling, which can save you money on premiums.",
        
       
    },

    {
        id: 10,
        Question: "What is an insurance policy limit? ",
        Answer: "A policy limit is the maximum amount an insurance company will pay for a covered loss. There are often separate limits for different types of coverage within a policy, such as bodily injury and property damage in an auto insurance policy.",
        
       
    },
]


export default function Appfaqs(){


    return(

<section className='faq'>

<div className='section-tittle' id="FAQs">
            <h3>Frequently Asked Questions</h3>
            <p>Letes insurance is a financial safety net designed to provide peace of mind and security for individuals and their loved ones. It is a contract between an insurer and the policyholder, where the insurer promises to pay a designated beneficiary a sum of money upon the death of the insured person or after a set period </p>
        </div>


        <Container>
        <Row>
            
        <Col md={6}>
        
        {FaqsData.map(faq => {

return(

    
    <Accordion  key={faq.id}>
    <Accordion.Item eventKey="0">
    <Accordion.Header>{faq.Question}</Accordion.Header>
      <Accordion.Body>
        {faq.Answer}
      </Accordion.Body>
    </Accordion.Item>
    
  </Accordion>


)})}
        
        </Col>

        <Col md={6}> 
        
        {FaqsData2.map(faq2 => {

return(

    <Accordion  key={faq2.id}>
    <Accordion.Item eventKey="0">
    <Accordion.Header>{faq2.Question}</Accordion.Header>
      <Accordion.Body>
        {faq2.Answer}
      </Accordion.Body>
    </Accordion.Item>
    
  </Accordion>


)})}
        
        </Col>

        </Row>
        


        </Container>


</section>

    );

}