import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    // Simple regex for basic email validation
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Validation checks
    if (!form.name) {
      alert("Name is required.");
      setLoading(false);
      return;
    }

    if (!form.email) {
      alert("Email is required.");
      setLoading(false);
      return;
    }

    if (!validateEmail(form.email)) {
      alert("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    emailjs
      .send(
        "service_6avn6rj",
        "template_0w9rp2h",
        {
          from_name: form.name,
          to_name: "Safwen",
          from_email: form.email,
          to_email: "saafi.saf0@gmail.com",
          message: form.message,
        },
        "uFbdPb4hs6DwUEpg-"
      )
      .then(
        (response) => {
          setLoading(false);
          console.log("Email sent successfully:", response);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error("Failed to send email:", error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="xl:mt-12 flex flex-col-reverse xl:flex-row gap-8 overflow-x-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="green-pink-gradient flex-1 p-[1px] rounded-2xl shadow-card"
      >
        <div className="bg-black-100 rounded-2xl p-8 h-full">
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-none h-30"
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-blue-950 hover:scale-110"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="flex-1 flex justify-center items-center"
      >
        <div className="h-[350px] md:h-[550px] xl:h-[650px] xl:w-[500px] flex justify-center items-center">
          <EarthCanvas />
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
