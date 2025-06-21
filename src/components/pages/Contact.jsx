import React from 'react';

const Contact = () => {
  return (
   <section
  id="contact"
  className="min-h-screen w-full bg-gradient-to-b from-[#0a0a0a] to-[#1a002b] text-center text-white px-4 py-20"
>
  <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
  <p className="text-gray-300 mb-6">Let’s build something amazing together.</p>
  <a
    href="mailto:anuradha@example.com"
    className="bg-purple-600 px-6 py-2 rounded-full hover:bg-purple-700 transition"
  >
    Email Me
  </a>
</section>
  );
};

export default Contact;
