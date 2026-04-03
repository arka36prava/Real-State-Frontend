import { motion } from "framer-motion";

const ImageReveal = ({ src, alt, delay = 0, height = "h-[300px]" }) => {
  return (
    <div className={`relative overflow-hidden ${height}`}>
      
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />

      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "100%" }}
        transition={{ duration: 1.2, delay, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-full h-full bg-white"
      />
    </div>
  );
};

export default ImageReveal;