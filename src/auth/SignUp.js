import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Formik } from "formik";
import OtpVerificationModal from "../modal/OtpVerificationModal";
// import { useDispatch, useSelector } from "react-redux";



const SignUp = ( {}) => {
   
    const [showModal, setShowModal] = useState(false);
    const [phone, setPhone] = useState("");
    const [phoneError, setPhoneError] = useState(false);


    const handlePhoneChange = (e) => {
        const inputPhone = e.target.value;
        setPhone(inputPhone);
        if (!/^[6-9]\d{9}$/.test(inputPhone)) {
            setPhoneError(true);
        } else {
            setPhoneError(false);
            setShowModal(true)
        }
    };
   
    function onHide() {
       
        setShowModal(false);
        clearForm();
       
      }

    function clearForm() {
        setPhone("");
        setPhoneError(true);
    }
    return (

      <div className="container">


      <div className="header">
          <div className = "logo">
             <img src="./logo.png"  />
           </div>
      </div>

      <div className="middle">
      <div className="left-portion">
       <h1 style={{color:"blue"}}>Best Health Insurance Plan</h1>
       <h4 style={{color:"blue"}}> &#x20b9; 5 Lacs Health Cover Starts @ &#x20b9;15/day* </h4>
       <div className="img">
        <img style ={{width:"500px" ,height:"600px"}} src="./imp1.png" />
       </div>
      </div>

        <div className="login_page">
            <div className="form_width">
                <Formik
                    initialValues={{
                        name: "",
                        number: "",
                    }}
                >
                    <Form className="form_box_signup">
                        <h5 className="text-dark">Sign Up</h5>
                        <p className="text-left m-0">Name</p>
                        <Form.Group
                            className="form_group"
                            controlId="formBasicName"
                        >
                            <Form.Control
                                type="name"
                                placeholder="Name"
                                name="name"
                                autoComplete="off"
                            />
                        </Form.Group>
                        <br />
                        <p className="text-left m-0">City</p>
                        <select className="form-select  w-100 mb-4" aria-label="Default select example">
                            <option selected>Please select city</option>
                            <option value="1">Delhi</option>
                            <option value="2">Indore</option>
                            <option value="3">Noida</option>
                            <option value="4">Uttarakhand</option>
                            <option value="5">Bhopal</option>
                        </select>
                        <br />
                        <p className="text-left m-0">Phone Number</p>
                        <Form.Group
                            className="form_group"
                            controlId="formBasicNumber"
                        >
                            <Form.Control
                                type="text"
                                placeholder="Phone number"
                                autoComplete="off"
                                name="number"
                                value={phone}
                                onChange={handlePhoneChange}
                            />
                        </Form.Group>
                        {phoneError && (
                            <div className="float-left text-danger">Please enter a valid phone number starting with 6 to 9</div>
                        )}
                       
                        {/* <div className="btn">
                        <button
                            type="button"
                            style={{color:'white', fontsize : 'bold' ,backgroundColor:'blue' , border:'2px solid black',margin:'10px' , width:'140px',height:'40px' , padding: '10 20px', borderRadius:'20px'}} >
                            Get Quotes
                            </button>  */}
                            <OtpVerificationModal show={showModal}  />

                            <br></br>
                     <label style={{fontFamily:'-moz-initial'}}>
                     we will communicate with you only to suggest you in selecting the right insurance policy.We respect your privacy and we hate spam calls.
                    </label>


                        
                    </Form>
                    
                </Formik>
               
                    
                
                 
              
            </div>

         </div>

        </div>
        <div className="page">
            <img  style = {{width:'120vh',alignItems:'flex-start' , height:'70vh' }} src="./policymall1.png"/>
        </div>
        <div className="partners">
        <img  style = {{width:'100%',height:'500px',borderRadius:'30px' , margintop:'0px' , padding:'10px', }} src="./policymall3.png" />
        </div>
        
        <div className="">
  
            <h3 style={{margin:'40px' , fontWeight:'bold', color:'darkblue' , alignContent:'center'}}>Compare & Choose Best Health Insurance Plans</h3>
            <div className="fonti" style={{fontStyle:'normal' , fontSize:'20px'}}>
               <p >There are so-many health insurance companies, each offering a variety of health plans. When selecting a health insurance
plan, it's crucial to consider your individual needs and priorities. Failure to compare health insurance plans and purchasing
the first policy you come across could result in missing out on important benefits or lower premiums.</p>
  
  <h5 style={{fontWeight:'bolder'}}>Here are some
advantages of comparing health plans to maximize your benefits:</h5>
              </div>
            <div  style = {{backgroundColor:'lavender' , margintop:'200px' , borderRadius:'50px'}} className="line">
                
            <p style={{margin:'30px' ,fontFamily:'-moz-initial'}}><li style={{color:'blue', fontWeight:'bold'}}>Coverage Amount/Sum Insured (SI)</li>Choose a lower premium with higher Coverage/Sum Insured to get suitable medical care in times of
emergencies. Don’t under insure to save on premiums.</p>
                
            </div>
            <div  style = {{backgroundColor:'lavender' , margintop:'200px', borderRadius:'50px'}} className="line">
                
            <p style={{margin:'30px',fontFamily:'-moz-initial'}}><li style={{color:'blue', fontWeight:'bold'}}>Co Pay</li>With Co Pay, the insured agrees to pay a fraction of the total medical cost from his or her own pocket, and the balance will be paid out
of the insurance policy. Choose the benefits of Co Pay and get the best deal that fits your budget and coverage needs. </p>
                
            </div>
            <div  style = {{backgroundColor:'lavender' , margintop:'200px', borderRadius:'50px'}} className="line">
               
            <p style={{margin:'30px',fontFamily:'-moz-initial'}}><li style={{color:'blue', fontWeight:'bold'}}>Network Hospitals</li>
            Choose the plan with a nearby hospital that has well-equipped facilities for cashless treatment.</p>
                
            </div>
            <div  style = {{backgroundColor:'lavender' , margintop:'200px', borderRadius:'50px'}} className="line">
               
            <p style={{margin:'30px',fontFamily:'-moz-initial'}}><li style={{color:'blue', fontWeight:'bold'}}>Pre-existing Cover</li>In every policy, there is a waiting period for Pre-existing disease, Go for lowest waiting period or no waiting period at all</p>
                
            </div>
            <div  style = {{backgroundColor:'lavender' , margintop:'200px', borderRadius:'50px'}} className="line">
                
            <p style={{margin:'30px',fontFamily:'-moz-initial'}}><li style={{color:'blue', fontWeight:'bold'}}>No-Capping</li>Even though a lot of plans fix an upper limit of expenses like in case of room rent or doctor visit, certain plans come with no
capping!</p>
               
            </div>
            <div  style = {{backgroundColor:'lavender' , margintop:'200px', borderRadius:'50px'}} className="line">
              
            <p style={{margin:'30px',fontFamily:'-moz-initial'}}><li style={{color:'blue', fontWeight:'bold'}}>No claim bonus</li>NCB one of the most important health insurance benefit. You can get a 10 to 100 per cent additional sum insured for each policy year without a health insurance claim as a 'No-claim Bonus'.</p>
                
            </div>

            <div  style = {{backgroundColor:'lavender' , margintop:'200px', borderRadius:'50px'}} className="line">
               
            <p style={{margin:'30px',fontFamily:'-moz-initial'}}><li style={{color:'blue', fontWeight:'bold'}}>Critical Illnesses Rider</li>Health insurance plans offer coverage for critical illnesses such as cancer, paralysis, kidney disorders, diabetes, and heart related problems, which can require costly treatment and management.</p>
                
            </div>


            <div  style = {{backgroundColor:'lavender' , margintop:'200px', borderRadius:'50px'}} className="line">
                
            <p style={{margin:'30px',fontFamily:'-moz-initial'}}><li style={{color:'blue', fontWeight:'bold'}}>Restoration of Benefits</li>If you exhausted the full sum insured due to hospitalization, some plans will restore the entire amount within the same policy year at no extra cost.</p>
               
            </div>

            <div  style = {{backgroundColor:'lavender' , margintop:'200px', borderRadius:'50px'}} className="line">
               
            <p style={{margin:'30px',fontFamily:'-moz-initial'}}><li style={{color:'blue', fontWeight:'bold'}}>Additional Riders</li>Buy the best health insurance plan and add additional riders to cover specific risks as per your requirements.</p>
            
            </div>

            <div  style = {{backgroundColor:'lavender' , margintop:'200px', borderRadius:'50px'}} className="line">
                
            <p style={{margin:'30px',fontFamily:'-moz-initial'}}><li style={{color:'blue', fontWeight:'bold'}}>Day Care Procedures</li>Every Insurance company provides some specific plans for day care treatment which did not require 24 hours or more of hospitalization.</p>
                
            </div>

            <div  style = {{backgroundColor:'lavender' , margintop:'200px', borderRadius:'50px'}} className="line">
                
            <p style={{margin:'30px',fontFamily:'-moz-initial'}}><li style={{color:'blue', fontWeight:'bold'}}>OPD Benefits</li>Most of the insurers provide you comprehensive health cover by reimbursing your claims for Out Patient Department (OPD)</p>
                
            </div>

            <div  style = {{backgroundColor:'lavender' , margintop:'200px', borderRadius:'50px'}} className="line">
                
            <p style={{margin:'30px',fontFamily:'-moz-initial'}}><li style={{color:'blue', fontWeight:'bold'}}>Annual Health Check-ups</li>Several insurers provides complimentary annual health check-ups. These check-ups can help detect potential health issues early on and reducing future medical expenses.</p>
                
            </div>

            <div  style = {{backgroundColor:'lavender' , margintop:'200px', borderRadius:'50px'}} className="line">
            
            <p style={{margin:'30px',fontFamily:'-moz-initial'}}><li style={{color:'blue', fontWeight:'bold'}}>Pre And Post Hospitalization</li>Health insurance not only covers post-hospitalization costs, but it also covers pre-hospitalization costs.</p>
                
            </div>


            <div  style = {{backgroundColor:'lavender' , margintop:'200px', borderRadius:'50px'}} className="line">
            <p style={{margin:'30px',fontFamily:'-moz-initial'}}><li style={{color:'blue', fontWeight:'bold'}}>Customer Service</li>Lastly, consider the quality of customer service offered by the insurer, as this can impact your overall experience with the
policy.</p>
            </div>
            
        </div>

        <div style = {{border:'1px'}} className="last">
        <img style={{width:'100%'}} src="./policymall4.png" />

        </div>
    </div>
    );
};
export default SignUp;

