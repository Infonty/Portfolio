import React from "react";
import  { useRef ,useState} from 'react';
import emailjs from "emailjs-com";
import './text.css'


const Contact = () => {
  const form=useRef();
  const [emailError, setEmailError] = useState('');
  const sendEmail = (e) => {
    e.preventDefault();
    const emailInput = form.current.elements.from_email;

    // Check if emailInput is defined before accessing its value
    if (emailInput && emailInput.value) {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (!emailPattern.test(emailInput.value)) {
        setEmailError('Please enter a valid email address.');
        return;
      }
    }
    setEmailError('');
    // You need to replace the placeholders with your actual email service details
    emailjs.sendForm('service_86g0khf', 'template_avxz3ti', form.current, 'GdBUQXpO9yGzHs5AS')
      .then((result) => {
        console.log(result.text);
        alert("Message sent")
      
      }, (error) => {
        console.log(error.text);
        
      });
      form.current.reset();
   
  };
  return (
    <div name='contact' className=" antialiased bg-[#0a192f] text-gray-300 ">
      <div className="flex pt-[100px]   md:pt-[50px] w-full min-h-screen justify-center items-center">
        <div className="flex  bg-[#0C2D48] pt-[70px] flex-col md:flex-row md:space-x-52 md:space-y-0 md:pt-12 space-y-6 w-full max-w-4xl p-8 rounded-xl shadow-2xl">
          {/* ----contact--information--- */}
          
          <div className="flex   flex-col space-y-8 justify-between">
            <div className="font-bold border-b border-yellow-300 text-4xl tracking-wide">
              <h1>Contact Info</h1>
              </div>
            
             <div className="flex flex-col space-y-8" >

                <div className="inline-flex   space-x-2 items-center ">
                <ion-icon className=' text-xl  scale-110' name="call"/>
                <span>+(91)- 9193446521</span>
                </div>
                <div className="inline-flex hover:text-yellow-500 space-x-2 items-center">
                <ion-icon className=' text-xl scale-110 ' name="mail-open"/>
                <a className="" href="mailto:infonty919344@gmail.com"><span>infonty919344@gmail.com</span></a> 
                </div>
                <div className="inline-flex space-x-2 items-center">
                <ion-icon className=' text-xl scale-110 ' name="pin"/>
                <span>Madhuvan Enclave, Delhi,India</span>
                </div>
             </div>

         
            <div className="flex space-x-4 text-lg pl-[120px] md:pl-[30px]">
            <a className="hover:scale-125 hover:text-yellow-300 " target="_blank" href="https://www.instagram.com/infonty_/"><ion-icon name="logo-instagram"></ion-icon></a>
            <a className="hover:scale-125  hover:text-yellow-300" target="_blank" href="https://www.linkedin.com/in/infonty/"><ion-icon name="logo-linkedin"></ion-icon></a>
            <a className="hover:scale-125  hover:text-yellow-300" target="_blank" href="https://github.com/Infonty"><ion-icon name="logo-github"></ion-icon></a>
            </div>
     </div>
          {/* ----contact---form---- */}
          <div>
            <div className='bg-gray-600 shadow-lg rounded-xl p-8'>
                <form ref={form} action="" className="flex flex-col space-y-4 ">
                  <div>
                    <label className="text-sm text-black font-semibold" htmlFor="">Your Name :</label>
                    <input required maxLength={30} name="from_name" type="text" placeholder="your name " className="mt-2 ring-1 ring-gray-300 w-full rounded-md px-4 focus:ring-2 focus:ring-yellow-400 py-2 outline-none" />
                  </div>
             
                  <div>
                    <label className="text-sm text-black font-semibold" htmlFor="">Email Address :</label>
                    <input required name="from_email"   type="email" placeholder="Email address " className="mt-2 ring-1 ring-gray-300 w-full rounded-md px-4 focus:ring-2 focus:ring-yellow-400 py-2 outline-none" />
                    {emailError && <span className="text-red-500 font-semibold text-sm">{emailError}</span>}
           
                  </div>
                  <div>
                    <label className="text-sm text-black font-semibold" htmlFor="">Message :</label>
                    <textarea required name="message" type='message' rows={4} placeholder="Type your message here." className="mt-2 ring-1 ring-gray-300 w-full rounded-md px-4 focus:ring-2 focus:ring-yellow-400 py-2 outline-none" />
                  </div>
                  <button onClick={sendEmail}  type="submit" className="hover:text-black inline-block self-end bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 bg-[#0a192f] text-white font-bold rounded-lg px-6 py-2 uppercase text-sm">
                        Send Message
                  </button>
                </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
