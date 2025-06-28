import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_dfwr7rh',        // Replace with your actual service ID
        'template_h833bxi',       // Replace with your actual template ID
        form.current,
        'EKxzLv-7fumxpDo1b'         // Replace with your actual public key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <section className="bg-[#1a002b] min-h-screen flex justify-center items-center">
      <form ref={form} onSubmit={sendEmail} className="bg-[#1c1c1c] p-8 rounded-lg w-full max-w-xl text-white">
        <h2 className="text-3xl font-bold text-purple-500 mb-4">Let's work together</h2>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <input type="text" name="name" placeholder="Firstname" className="p-2 bg-black rounded" required />
          <input type="text" name="lastname" placeholder="Lastname" className="p-2 bg-black rounded" />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <input type="email" name="email" placeholder="Email address" className="p-2 bg-black rounded" required />
          <input type="text" name="phone" placeholder="Phone number" className="p-2 bg-black rounded" />
        </div>

        <select name="service" className="w-full p-2 bg-black rounded mb-4">
          <option value="">Select a service</option>
          <option value="frontend">Frontend Development</option>
          <option value="backend">Backend Development</option>
          <option value="fullstack">Fullstack Development</option>
        </select>

        <textarea
          name="message"
          placeholder="Type your message here"
          className="w-full p-2 bg-black rounded h-32 mb-4"
          required
        ></textarea>

        <button type="submit" className="bg-purple-600 px-6 py-2 rounded-full hover:bg-purple-700">
          Send message
        </button>
      </form>
    </section>
  );
};

export default Contact;
