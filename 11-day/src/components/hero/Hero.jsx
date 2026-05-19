import { motion } from "framer-motion"

const Hero = () => {
  return (

    <section className="
    min-h-[90vh]
    flex items-center justify-center
    px-6
    ">

      <div className="text-center max-w-4xl">

        <motion.h1
          initial={{ opacity:0, y:50 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:0.8 }}
          className="
          text-6xl md:text-8xl
          font-black
          leading-tight
          "
        >

          Write Your

          <span className="
          block
          bg-gradient-to-r
          from-blue-400
          to-cyan-400
          text-transparent
          bg-clip-text
          ">
            Ideas.
          </span>

        </motion.h1>

        <motion.p
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          transition={{ delay:0.4 }}
          className="
          text-slate-400
          text-lg
          mt-6
          "
        >
          Modern blogging platform with beautiful UI.
        </motion.p>

      </div>

    </section>
  )
}

export default Hero