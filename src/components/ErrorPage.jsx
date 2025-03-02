import { motion } from 'motion/react';
import React from 'react'

const ErrorPage = () => {
    
  return (
    <>
      <div className="flex flex-col  justify-center items-center h-[30rem] mb-30">
              <motion.div
                  initial={{
                      opacity: 0,
                      scale:0.90
                  }}
                  animate={{
                      opacity: 100,
                      scale:1.10
                  }}
                  transition={{
                      duration:0.5
                  }}
                  className='flex flex-col items-center'>
          <h1 className="text-9xl tracking-tight">404</h1>
          <p className="text-4xl uppercase font-mono">page not found</p>
        </motion.div>
      </div>
    </>
  );
}

export default ErrorPage
