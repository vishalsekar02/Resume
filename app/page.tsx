"use client";

import { motion } from "framer-motion";

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 p-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.section
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold">Vishal Sekar</h1>
          <p className="text-lg text-gray-600">Senior Software Tester / Quality Engineer Analyst</p>
        </motion.section>

        {/* Profile Summary */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-2xl font-semibold mb-3">Professional Summary</h2>
          <p className="text-gray-700 leading-relaxed">
            Experienced QA Engineer with expertise in manual and automated testing,
            CI/CD integration, and cross-functional collaboration. Skilled in 
            delivering high-quality software solutions across diverse industries.
          </p>
        </motion.section>

        {/* Skills */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-2xl font-semibold mb-3">Skills</h2>
          <ul className="grid grid-cols-2 gap-2 text-gray-700">
            <li>Manual & Automated Testing</li>
            <li>CI/CD (Jenkins, Git)</li>
            <li>Eggplant Automation</li>
            <li>Agile & Scrum</li>
            <li>SQL & API Testing</li>
            <li>Defect Management (Jira, QC)</li>
          </ul>
        </motion.section>

        {/* Experience */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-2xl font-semibold mb-3">Experience</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold">QA Analyst – XYZ Corp</h3>
              <p className="text-sm text-gray-500">2019 – Present</p>
              <p className="text-gray-700">
                Led QA efforts for enterprise apps, developed automated regression 
                scripts using Eggplant, and integrated pipelines with Git & Jenkins.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Test Engineer – ABC Ltd</h3>
              <p className="text-sm text-gray-500">2016 – 2019</p>
              <p className="text-gray-700">
                Performed functional and regression testing, collaborated with 
                developers and PMs, and ensured product release quality.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Contact */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <h2 className="text-2xl font-semibold mb-2">Contact</h2>
          <p className="text-gray-700">📧 vishal@example.com | 🔗 linkedin.com/in/vishalsekar</p>
        </motion.section>
      </div>
    </main>
  );
}
