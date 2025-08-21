import React, { useState } from "react"
import { Send } from "lucide-react"
import { motion } from "framer-motion"
import groupsData from "@data/groups.json"

interface Group {
  id: string
  name: string
}

export default function Join() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    group: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setStatus("success")
      setFormData({ name: "", email: "", group: "", message: "" })
    } catch {
      setStatus("error")
    }
  }

  return (
    <section className="min-h-screen bg-[#F8F9FA] py-16">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-[#202124] text-center"
        >
          Join Our Coding Club
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-lg text-[#5F6368] text-center max-w-2xl mx-auto"
        >
          Become a part of our vibrant community and start your coding journey with us.
        </motion.p>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 max-w-xl mx-auto"
        >
          <div className="bg-white border border-[#E8EAED] rounded-2xl shadow-md p-8">
            <h3 className="text-xl font-semibold text-[#202124] mb-6">
              Membership Form
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#202124] mb-1"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Enter your name"
                  className="w-full border border-[#DADCE0] rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#4285F4] focus:outline-none text-[#202124] placeholder-[#9AA0A6]"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#202124] mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="Enter your email"
                  className="w-full border border-[#DADCE0] rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#4285F4] focus:outline-none text-[#202124] placeholder-[#9AA0A6]"
                  required
                />
              </div>

              {/* Group */}
              <div>
                <label
                  htmlFor="group"
                  className="block text-sm font-medium text-[#202124] mb-1"
                >
                  Preferred Group
                </label>
                <select
                  id="group"
                  value={formData.group}
                  onChange={(e) =>
                    setFormData({ ...formData, group: e.target.value })
                  }
                  className="w-full border border-[#DADCE0] rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#4285F4] focus:outline-none text-[#202124]"
                >
                  <option value="">Select a group</option>
                  {groupsData.map((group: Group) => (
                    <option key={group.id} value={group.id}>
                      {group.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#202124] mb-1"
                >
                  Why do you want to join?
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell us about yourself"
                  className="w-full border border-[#DADCE0] rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#4285F4] focus:outline-none text-[#202124] placeholder-[#9AA0A6]"
                  rows={3}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-[#4285F4] text-white font-medium py-3 px-4 rounded-lg shadow hover:bg-[#3367D6] transition w-full"
              >
                Submit <Send className="h-4 w-4" />
              </button>
            </form>

            {/* Status Messages */}
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 text-green-600"
              >
                ✅ Thank you! We'll get back to you soon.
              </motion.div>
            )}
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 text-red-600"
              >
                ❌ Something went wrong. Please try again.
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
