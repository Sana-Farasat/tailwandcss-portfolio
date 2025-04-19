'use client';

import { motion } from "framer-motion";
import Image from "next/image";

function Cli_Projects(){
    return(
        <main>
            <section>
        <div className="text-center text-xl md:text-3xl text-white mt-4">
          <h2 className=" text-xl md:text-3xl sm:text-[40px] font-bold">
            CLI Based Projects Here!!
          </h2>
          <strong>Projects</strong> which i created based on Cli..
        </div>

        <div className=" flex flex-col items-center sm:flex sm:flex-row justify-around mt-4 ">
          <motion.div
            initial={{ opacity: 0, x: -100 }} //Left to Right
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-green-200 shadow-lg h-auto max-w-sm mb-3 mx-2 flex justify-around p-auto rounded-lg text-green-950 transition-transform duration-75 scale-100 hover:scale-105 ease-in-out"
          >
            <p className="p-1 text-sm">
              The Number Guessing Game is a simple yet engaging command-line
              interface (CLI) game that challenges players to guess a randomly
              generated number within a specific range. This project
              demonstrates my skills in programming logic, user interaction, and
              game design.
            </p>
            <Image
              src="/ngg.png"
              alt="Number Guessing Game"
              height={1}
              width={100}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }} //Right to Left
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-red-100 shadow-lg h-auto max-w-sm mb-3 mx-2  flex justify-around p-auto rounded-lg text-red-950 transition-transform duration-75 scale-100 hover:scale-105 ease-in-out"
          >
            <p className="p-1 text-sm">
              The ATM Simulator is a command-line interface (CLI) application
              that replicates the functionality of a real ATM. This project
              allows users to perform basic banking transactions such as
              checking balances, withdrawing cash, and depositing funds,
              demonstrating my skills in application logic and user interaction.
            </p>

            <Image
              src="/atm.png"
              alt="ATM"
              height={0}
              width={120}
              className="rounded-lg"
            />
          </motion.div>
        </div>

        <div className=" flex flex-col items-center sm:flex sm:flex-row justify-around mt-4 ">
          <motion.div
            initial={{ opacity: 0, x: -100 }} //Left to Right
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-200 shadow-lg h-auto max-w-sm mb-3 mx-2 flex justify-around p-auto rounded-lg text-gray-950 transition-transform duration-75 scale-100 hover:scale-105 ease-in-out"
          >
            <p className="p-1 text-sm">
              The CLI Calculator is a command-line interface application that
              performs basic arithmetic operations. This project showcases my
              ability to implement mathematical logic and user interaction in a
              console environment.
            </p>
            <Image
              src="/cal.png"
              alt="Calculator"
              height={0}
              width={120}
              className="rounded-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }} //Right to Left
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-yellow-200 shadow-lg h-auto max-w-sm mb-3 mx-2 flex justify-around p-auto rounded-lg text-yellow-950 transition-transform duration-75 scale-100 hover:scale-105 ease-in-out"
          >
            <p className="p-1 text-sm">
              The CLI Currency Converter is a command-line interface application
              that allows users to convert amounts between different currencies.
              This project highlights my skills in API integration, data
              handling, and user interaction in a console environment.
            </p>

            <Image
              src="/curr.png"
              alt="Currency Convertor"
              height={0}
              width={120}
              className="rounded-lg"
            />
          </motion.div>
        </div>
      </section>
        </main>
    )
}

export default Cli_Projects;