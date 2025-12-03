"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export interface Project {
  title: string;
  location: string;
  type: string;
  description: string;
  image: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-all"
    >
      <Image
        src={project.image}
        width={600}
        height={400}
        alt={project.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-5">
        <p className="text-sm text-blue-600 font-medium">{project.type}</p>
        <h3 className="text-xl font-semibold mt-1">{project.title}</h3>
        <p className="text-gray-500 text-sm">{project.location}</p>

        <p className="text-gray-600 text-sm mt-3">{project.description}</p>
      </div>
    </motion.div>
  );
}
