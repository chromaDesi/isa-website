import { Mail, Send, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from 'emailjs-com';
import {useToast} from "../hooks/use-toast";
import { useState } from "react";


const Contact = ({ isOpen, onClose }) => {
  if (!isOpen) return null;




  const {toast} = useToast()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        });

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm(serviceId, templateId, e.target, publicKey)
        .then((result) => {
            setTimeout(() => {
            toast({
                title: 'Message sent',
                description: 'Thanks for the message, TTYS!',
            });
            setFormData({name: "", email: "", message: ""});
            setIsSubmitting(false);

        }, 600);
        }).catch(() => {
            setTimeout(() => {
                toast({
                    title: 'Error',
                    description: 'Something went wrong, try again',
                })
            }, 600);
        })
    };
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[9999]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white text-black p-8 rounded-xl shadow-lg relative w-[90%] max-w-md"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-black"
            aria-label="Close Modal"
          >
            <X />
          </button>
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Mail /> Contact Us
          </h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-2 border rounded mb-3"
            />
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="youremail@provider.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-2 border rounded mb-3"
            />
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-md border border-input bg-primary focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Hi, I wanted to reach out to discuss..."
            />
            <button type="submit" className="bg-secondary text-white px-4 py-2 rounded flex items-center gap-2" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"} <Send size={16} />
            </button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Contact;
