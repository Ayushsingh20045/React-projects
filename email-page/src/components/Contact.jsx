import React,{useRef} from "react";
import emailjs from '@emailjs/browser'
import { toast } from "react-toastify";

const Contact = () => {

const form =useRef()

const sendEmail = (e) =>{
    e.preventDefault();

    emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        
        
    ).then(
       ()=>{
        toast.success("Message sent successfully !")
        form.current.reset();
       }
    ,(error)=>{
        console.log("email error",error.text)
        toast.error("Failed to send message. Please try again.")
    }
);
};

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Contact Me
        </h2>

        <form  ref={form}  onSubmit={sendEmail} className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              className="mt-1 block w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              className="mt-1 block w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your email"
              required
            />
          </div>

      
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              className="mt-1 block w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your message..."
              required
            ></textarea>
          </div>

          <div className="text-right">
            <button
              type="submit"
              className="inline-block bg-blue-600 text-white font-medium px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
