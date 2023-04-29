import React from "react";
import Section from "./Section";
import Image from "next/image";
import contactImage from "../public/images/contact.jpg";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

function ContactsSection({ setCurrentSection, items }) {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    // alert(JSON.stringify(data));
    // console.log("submitted", e);

    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  console.log("errors", errors);

  return (
    <Section
      setCurrentSection={setCurrentSection}
      id="Contacts"
      className="min-h-screen  flex flex-col gap-4   "
    >
      <div className="min-h-fit  w-full grow  flex  justify-center items-center ">
        <div className="h-[90%] min-h-fit w-[90%] relative flex flex-col  md:flex-row portrait:flex-col items-center">
          <motion.div
            className="basis-2/5 flex flex-col justify-around items-center"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ amount: 0.6, once: true }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            <Image
              src={contactImage}
              className="aspect-square portrait:w-3/4 object-contain "
            />
          </motion.div>
          <motion.div
            className="basis-3/5 flex flex-col justify-center p-4 gap-2 shadow-xl bg-blue-100 rounded-3xl"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ amount: 0.6, once: true }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            <div>
              <h3 className="text-3xl font-bold">Send me a Message</h3>
              <p>
                Feel free to Contact me by submitting the form below and I will
                get back to you as soon as possible
              </p>
            </div>

            <form
              className="flex flex-col gap-3"
              onSubmit={onSubmit}
              action="https://formsubmit.co/71f2d7f476707f26711bad2dd7bd6b3d"
              target="_blank"
              method="POST"
            >
              <input
                {...register("name", { required: "Name Field is Required" })}
                type="text"
                className="bg-white rounded-lg shadow-md  p-2 focus-within:bg-blue-100 focus:border-primary_dark focus:border-2"
                placeholder="Name"
              />
              {errors.name && (
                <p className="bg-red-300 rounded-lg w-max p-2">
                  {errors.name?.message}
                </p>
              )}
              <input
                {...register("email", {
                  pattern: {
                    value:
                      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                    message: "invalid email adrees",
                  },
                  required: "Email Field is Required",
                })}
                className="bg-white rounded-lg shadow-md  p-2"
                placeholder="Email"
              />
              {errors.email && (
                <p className="bg-red-300 rounded-lg w-max p-2">
                  {errors.email?.message}
                </p>
              )}
              <textarea
                {...register("userMessage", {
                  required: "Message Field is Required",
                  minLength: {
                    value: 5,
                    message: "Dont be shy and write more ",
                  },
                  maxLength: {
                    value: 150,
                    message:
                      "I,m too Lazy for reading such a long message, try summorize it",
                  },
                })}
                rows={4}
                type="text"
                className="bg-white rounded-lg shadow-md p-2"
                placeholder="Your Massage"
              />
              {errors.userMessage && (
                <p className="bg-red-300 rounded-lg w-max p-2">
                  {errors.userMessage?.message}
                </p>
              )}
              <button
                type="submit"
                className="text-white bg-primary_dark self-start p-4 shadow-md rounded-lg"
              >
                Send Me The Massage
              </button>
            </form>
            <div className="self-center">
              <h3 className="text-center">Socials</h3>
              <div className="flex flex-row border-2 border-secondary bg-green-100  rounded-full shadow-md">
                {items.map((item, i) => (
                  <div
                    className="text-3xl hover:bg-secondary rounded-full p-2"
                    key={i}
                  >
                    {item.icon}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div>
        <motion.div
          className="text-center text-sm mb-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.5, once: true }}
          transition={{ delay: 0.3, duration: 0.3 }}
        >
          © Copyright 2023. Designed & Built by Jaber Fathi.
        </motion.div>
        <motion.div
          className="w-screen relative ml-[-50vw] left-[50%] h-3 z-10 bg-gradient-to-l from-primary_light to-secondary"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ amount: 0.5, once: true }}
          transition={{ delay: 0.3, duration: 0.3 }}
        />
      </div>
    </Section>
  );
}

export default ContactsSection;
