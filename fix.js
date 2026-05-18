const fs = require('fs');
let code = fs.readFileSync('components/sections/integrations/IntegrationsContent.tsx', 'utf8');

// I will just replace the top of the file up to `function BulletList`
const new_top = `"use client";\n\nimport { useState, useEffect, useCallback } from "react";\nimport Image from "next/image";\nimport Link from "next/link";\nimport { AnimatePresence, motion } from "framer-motion";\nimport { ArrowRight, Check, ChevronRight, ChevronLeft } from "lucide-react";\nimport Button from "@/components/ui/Button";\nimport Accordion, { type AccordionItem } from "@/components/ui/Accordion";\nimport { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";\nimport SectionWebpImage from "@/components/ui/SectionWebpImage";\nimport SeamlessIntegrations from "@/components/sections/home/Integrations";\nimport CtaSection from "@/components/sections/CtaSection";\nimport { integrationPageImages } from "@/lib/page-section-images";\n\nconst G = ({ children }: { children: React.ReactNode }) => (\n  <span\n    style={{\n      background: "linear-gradient(180deg, #708FF4 0%, #6C60E8 100%)",\n      WebkitBackgroundClip: "text",\n      WebkitTextFillColor: "transparent",\n      backgroundClip: "text",\n    }}\n  >\n    {children}\n  </span>\n);\n\n`;

const bulletListStart = code.indexOf('function BulletList');
code = new_top + code.substring(bulletListStart);

fs.writeFileSync('components/sections/integrations/IntegrationsContent.tsx', code, 'utf8');
