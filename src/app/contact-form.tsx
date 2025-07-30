"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Typography,
  Card,
  CardBody,
  Input,
  Textarea,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { EnvelopeIcon, PhoneIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      firstName: formData.get("first-name") || "",
      lastName: formData.get("last-name") || "",
      email: formData.get("email") || "",
      interests: formData.getAll("interests"),
      message: formData.get("message") || "",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (result.success) {
        setSuccess("Your message has been sent! We'll get back to you soon.");
        form.reset();
      } else {
        setError(result.error || "Something went wrong. Please try again later.");
      }
    } catch (err: any) {
      setError("Failed to send. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden px-8 py-20 bg-gradient-to-b from-gray-50 to-white">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-20 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto mb-16 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block overflow-hidden group cursor-pointer">
            <Typography 
              variant="h1" 
              className="mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600
                        inline-block transition-transform duration-300 group-hover:translate-x-2"
            >
              Contact Us
              <span className="block h-0.5 w-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full mt-1"></span>
            </Typography>
          </div>
          <Typography
            variant="lead"
            className="mx-auto w-full lg:w-5/12 !text-gray-600"
          >
            Ready to get started? Feel free to reach out through the contact form,
            and let&apos;s embark on a journey of innovation and success.
          </Typography>
        </motion.div>
      </div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="relative z-10"
      >
        <Card shadow={false} className="container mx-auto bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl overflow-hidden">
          <CardBody className="grid grid-cols-1 lg:grid-cols-7 md:gap-0 p-0">
            <motion.div 
              variants={fadeInUp}
              className="w-full col-span-3 h-full p-8 md:p-12 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cGF0aCBkPSJNMzAgMTVjLTguMjkgMC0xNSA2LjcxLTE1IDE1aDMwYzAtOC4yOS02LjcxLTE1LTE1LTE1eiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==')]"></div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative z-10"
              >
                <Typography variant="h3" className="mb-6 text-white font-bold">
                  Contact Information
                </Typography>
                <Typography className="mb-10 text-gray-300">
                  Fill up the form and our Team will get back to you within 24 hours.
                </Typography>
                
                <motion.div 
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="flex items-center gap-5 mb-6 group"
                >
                  <div className="p-3 bg-blue-600/20 rounded-full text-blue-400 transition-all duration-300 group-hover:bg-blue-600/30">
                    <PhoneIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <Typography variant="h6" className="text-gray-300 text-sm font-medium mb-1">
                      Phone
                    </Typography>
                    <Typography variant="paragraph" className="text-white font-medium">
                      +92 320 2800234
                    </Typography>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="flex items-center gap-5 mb-10 group"
                >
                  <div className="p-3 bg-purple-600/20 rounded-full text-purple-400 transition-all duration-300 group-hover:bg-purple-600/30">
                    <EnvelopeIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <Typography variant="h6" className="text-gray-300 text-sm font-medium mb-1">
                      Email
                    </Typography>
                    <Typography variant="paragraph" className="text-white font-medium">
                      techudev1@gmail.com
                    </Typography>
                  </div>
                </motion.div>
                
                <div className="mt-12">
                  <Typography variant="h6" className="text-gray-300 mb-4 text-sm font-medium">
                    Follow Us
                  </Typography>
                  <div className="flex items-center gap-4 mt-4">
                    {[
                      { 
                        name: 'Facebook', 
                        icon: '/image/facebook.png',
                        url: 'https://www.facebook.com/yourpage'
                      },
                      { 
                        name: 'Instagram', 
                        icon: '/image/instagram.jpg',
                        url: 'https://www.instagram.com/yourprofile'
                      },
                      { 
                        name: 'LinkedIn', 
                        icon: '/image/linkedin.png',
                        url: 'https://www.linkedin.com/in/yourprofile'
                      },
                      { 
                        name: 'Twitter', 
                        icon: '/image/twitter.png',
                        url: 'https://twitter.com/yourhandle'
                      }
                    ].map((social, index) => (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-10 h-10 relative overflow-hidden rounded-full"
                        whileHover={{ y: -3, scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * index }}
                        aria-label={`Visit our ${social.name} page`}
                      >
                        <img 
                          src={social.icon}
                          alt={social.name}
                          className="w-full h-full object-cover"
                        />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
            <motion.div 
              variants={fadeInUp}
              className="w-full mt-8 md:mt-0 md:px-10 col-span-4 h-full p-8 md:p-12"
            >
              <form onSubmit={handleSubmit}>
  {success && (
    <div className="mb-6 text-green-600 font-semibold text-center bg-green-50 border border-green-200 rounded p-2 animate-fade-in">
      {success}
    </div>
  )}
  {error && (
    <div className="mb-6 text-red-600 font-semibold text-center bg-red-50 border border-red-200 rounded p-2 animate-fade-in">
      {error}
    </div>
  )}

                <motion.div 
                  variants={fadeInUp}
                  className="mb-8 grid gap-6 md:grid-cols-2"
                >
                  <div className="relative">
                    <Input
                      color="gray"
                      size="lg"
                      variant="static"
                      label="First Name"
                      name="first-name"
                      placeholder="eg. Lucas"
                      className="!border-b-gray-300 focus:!border-blue-500 !text-gray-700"
                      labelProps={{
                        className: "!text-gray-500 peer-focus:!text-blue-500"
                      }}
                      containerProps={{
                        className: "min-w-full"
                      }}
                    />
                  </div>
                  <div className="relative">
                    <Input
                      color="gray"
                      size="lg"
                      variant="static"
                      label="Last Name"
                      name="last-name"
                      placeholder="eg. Jones"
                      className="!border-b-gray-300 focus:!border-blue-500 !text-gray-700"
                      labelProps={{
                        className: "!text-gray-500 peer-focus:!text-blue-500"
                      }}
                      containerProps={{
                        className: "min-w-full"
                      }}
                    />
                  </div>
                </motion.div>
                
                <motion.div variants={fadeInUp} className="mb-8">
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="eg. lucas@mail.com"
                    className="!border-b-gray-300 focus:!border-blue-500 !text-gray-700"
                    labelProps={{
                      className: "!text-gray-500 peer-focus:!text-blue-500"
                    }}
                    containerProps={{
                      className: "min-w-full"
                    }}
                  />
                </motion.div>
                
                <motion.div variants={fadeInUp} className="mb-8">
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="mb-4 font-medium text-gray-700"
                  >
                    What are you interested in?
                  </Typography>
                  <div className="flex flex-wrap gap-4">
                    {["Web Design", "Development", "SEO", "UI/UX", "Branding"].map((item, index) => (
                      <motion.div 
                        key={item}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * index }}
                        className="relative"
                      >
                        <input
                          type="checkbox"
                          id={`interest-${index}`}
                          name="interests"
                          value={item}
                          className="peer hidden"
                        />
                        <label
                          htmlFor={`interest-${index}`}
                          className="px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-all duration-300
                                    border border-gray-300 text-gray-600 hover:border-blue-500 hover:text-blue-600
                                    peer-checked:bg-blue-50 peer-checked:border-blue-500 peer-checked:text-blue-600"
                        >
                          {item}
                        </label>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                
                <motion.div variants={fadeInUp} className="mb-10">
                  <Textarea
                    color="gray"
                    size="lg"
                    variant="static"
                    label="Your Message"
                    name="message"
                    rows={5}
                    className="!border-b-gray-300 focus:!border-blue-500 !text-gray-700"
                    labelProps={{
                      className: "!text-gray-500 peer-focus:!text-blue-500"
                    }}
                    containerProps={{
                      className: "min-w-full"
                    }}
                  />
                </motion.div>
                
                <motion.div 
                  variants={fadeInUp}
                  className="flex justify-end w-full"
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full md:w-auto"
                  >
                    <Button
                      color="blue"
                      className="w-full md:w-auto px-8 py-3 text-base bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 transition-all duration-300 group flex items-center justify-center"
                      ripple={false}
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <svg
                            className="animate-spin h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8v8z"
                            ></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <>
                          Send Message
                          <ArrowRightIcon
                            className="h-4 w-4 ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1"
                          />
                        </>
                      )}
                    </Button>
                  </motion.div>
                </motion.div>
              </form>
            </motion.div>
          </CardBody>
        </Card>
      </motion.div>
    </section>
  );
};

export default ContactForm;
