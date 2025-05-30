import { Mail, Send, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Contact = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

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
          <form>
            <input
              type="text"
              placeholder="Your name"
              className="w-full p-2 border rounded mb-3"
              required
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-2 border rounded mb-3"
              required
            />
            <textarea
              placeholder="Your message"
              className="w-full p-2 border rounded mb-3"
              rows="4"
              required
            />
            <button type="submit" className="bg-primary text-white px-4 py-2 rounded flex items-center gap-2">
              Send <Send size={16} />
            </button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Contact;
