import { useState } from "react";
import { motion } from "framer-motion";
import GradualText from "../TextAnimations/GradualText";

const MailForm = () => {
  const [mail, setMail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const onMailSend = (e) => {
    e.preventDefault();
    console.log(mail, subject, body);
  };

  return (
    <div className="flex items-center justify-center px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-900 p-6 sm:p-8 rounded-lg shadow-lg max-w-md w-full"
      >
        <h1 className="text-3xl font-semibold text-red-400 text-slate-300 mb-6 text-left">
          {false && <GradualText text={"Send a Mail!"} />}
          Send a Mail!
        </h1>
        <form onSubmit={onMailSend}>
          <div className="relative mb-8">
            <motion.input
              whileFocus={{ scale: 1.05 }}
              type="email"
              id="email"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              className="w-full py-2 px-2 bg-transparent text-white border-b border-gray-700 focus:outline-none focus:border-red-400 peer autofill:bg-transparent"
              placeholder=""
            />
            {!mail && (
              <label
                className="absolute left-0 top-4 text-gray-300 transition-all transform peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:-translate-y-4 peer-focus:left-0 peer-focus:text-xs"
                htmlFor="email"
              >
                Email
              </label>
            )}
          </div>
          <div className="relative mb-8">
            <motion.input
              whileFocus={{ scale: 1.05 }}
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full py-2 px-2 bg-transparent text-white border-b border-gray-700 focus:outline-none focus:border-red-400 peer autofill:bg-transparent"
              placeholder=" "
            />
            {!subject && (
              <label
                className="absolute left-0 top-4 text-gray-300 transition-all transform peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:-translate-y-4 peer-focus:left-0 peer-focus:text-xs"
                htmlFor="subject"
              >
                Subject
              </label>
            )}
          </div>
          <div className="relative mb-8">
            <motion.textarea
              whileFocus={{ scale: 1.05 }}
              id="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="w-full py-2 px-2 bg-transparent text-white border-b border-gray-700 focus:outline-none focus:border-red-400 peer h-12 resize-none autofill:bg-transparent hide-scrollbar"
              placeholder=" "
              style={{ height: "auto" }}
            />
            {!body && (
              <label
                className="absolute left-0 top-4 text-gray-300 transition-all transform peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:-translate-y-4 peer-focus:left-0 peer-focus:text-xs"
                htmlFor="body"
              >
                Message
              </label>
            )}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full p-3 bg-red-400 text-gray-900 rounded-lg font-semibold hover:bg-red-500 focus:outline-none"
          >
            Send
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default MailForm;
