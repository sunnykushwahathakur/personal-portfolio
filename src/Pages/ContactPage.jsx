"use client"

import { useState } from "react"
import emailjs from "@emailjs/browser"
import connectImg from "../assets/contact-img.svg" // ✅ Image import

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    const serviceID = "service_0fd7lwf"
    const templateID = "template_owd4ye4"
    const userID = "vR0xopt52RObq7dRa"

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(() => {
        setSubmitMessage("Thank you! Your message has been sent successfully.")
        setIsSubmitting(false)
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        })
        setTimeout(() => setSubmitMessage(""), 3000)
      })
      .catch(() => {
        setSubmitMessage("Oops! Something went wrong. Please try again.")
        setIsSubmitting(false)
        setTimeout(() => setSubmitMessage(""), 3000)
      })
  }

  return (
    <div
      id="contactus"
      className="min-h-screen pt-8 sm:pt-12 lg:pt-16 bg-gradient-to-r from-[#962f71] via-[#962f71] to-[#4829ac] relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-[calc(100vh-2rem)] sm:min-h-[calc(100vh-3rem)] lg:min-h-[calc(100vh-4rem)] gap-8 lg:gap-12">
          
          {/* ✅ Image Section */}
          <div className="hidden lg:flex lg:w-1/2 items-center justify-center">
            <div
              className="w-full max-w-lg h-96 lg:h-[500px] rounded-lg"
              style={{
                backgroundImage: `url(${connectImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>

          {/* Form Section */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <div className="w-full max-w-md lg:max-w-lg">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-[650] text-white mb-6 sm:mb-8 lg:mb-12 text-center lg:text-left">
                Get In Touch
              </h1>

              {submitMessage && (
                <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-green-500 bg-opacity-20 border border-green-400 rounded-lg text-green-100 text-center text-sm sm:text-base animate-fade-in">
                  {submitMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    required
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-opacity-10 bg-transparent border-2 border-[#b940b9] border-opacity-30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 focus:border-transparent transition-all backdrop-blur-sm text-sm sm:text-base"
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    required
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-opacity-10 bg-transparent border-2 border-[#b940b9] border-opacity-30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 focus:border-transparent transition-all backdrop-blur-sm text-sm sm:text-base"
                  />
                </div>

                {/* Contact Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    required
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-opacity-10 bg-transparent border-2 border-[#b940b9] border-opacity-30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 focus:border-transparent transition-all backdrop-blur-sm text-sm sm:text-base"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone No."
                    required
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-opacity-10 bg-transparent border-2 border-[#b940b9] border-opacity-30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 focus:border-transparent transition-all backdrop-blur-sm text-sm sm:text-base"
                  />
                </div>

                {/* Message Field */}
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Message"
                  rows={4}
                  required
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-opacity-10 bg-transparent border-2 border-[#b940b9] border-opacity-30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 focus:border-transparent transition-all backdrop-blur-sm resize-none text-sm sm:text-base"
                />

                {/* Submit Button */}
                <div className="text-center pt-2 sm:pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 bg-white text-purple-700 font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-sm sm:text-base"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2 justify-center">
                        <div className="w-4 h-4 border-2 border-purple-700 border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Mobile Image Background */}
      <div
        className="lg:hidden absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url(${connectImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  )
}

export default ContactPage
