const fs = require('fs');

let orig = fs.readFileSync('temp_original_uncommented.txt', 'utf8').replace(/\0/g, '');
let new_code = fs.readFileSync('temp_new.txt', 'utf8').replace(/\0/g, '');

const g_comp = orig.match(/(const G =.*?;)\s*\n\s*\n/s)[1];
const bullet_list = orig.match(/(function BulletList.*?})\s*\n\s*\n/s)[1];
const faqs = orig.match(/(const faqs: AccordionItem.*?\];)\s*\n/s)[1];

const connected_section = orig.match(/(const connectedPills =.*?)(?=\/\*)/s)[1];
const api_section = orig.match(/(const apiBullets =.*?)(?=\/\*)/s)[1];
const third_party_section = orig.match(/(const thirdPartyBullets =.*?)(?=\/\*)/s)[1];
const erp_section = orig.match(/(const erpPills =.*?)(?=\/\*)/s)[1];
const cta_section = orig.match(/(function CtaSectionBlock.*?)(?=\/\*)/s)[1];
const faq_section = orig.match(/(function FaqSection.*?}?)(?=\/\*|$)/s)[1];

const hero_data_end = new_code.indexOf('Rest of your components');
let hero_data = new_code.substring(0, hero_data_end);
hero_data = hero_data.substring(0, hero_data.lastIndexOf('}') + 1) + '\n';

const export_default = new_code.substring(new_code.indexOf('export default function IntegrationsContent'));

const final_code = `"use client";\n\nimport { useState, useEffect, useCallback } from "react";\nimport Image from "next/image";\nimport Link from "next/link";\nimport { AnimatePresence, motion } from "framer-motion";\nimport { ArrowRight, Check, ChevronRight, ChevronLeft } from "lucide-react";\nimport Button from "@/components/ui/Button";\nimport Accordion, { type AccordionItem } from "@/components/ui/Accordion";\nimport { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";\nimport SectionWebpImage from "@/components/ui/SectionWebpImage";\nimport SeamlessIntegrations from "@/components/sections/home/Integrations";\nimport CtaSection from "@/components/sections/CtaSection";\nimport { integrationPageImages } from "@/lib/page-section-images";\nimport { cn } from "@/lib/utils";\n\n${g_comp}\n\n${bullet_list}\n\n/* ---------------------------------------------\n   FAQ data\n--------------------------------------------- */\n${faqs}\n\n${hero_data}\n\n/* ---------------------------------------------\n   Section 3 — Built for a Connected Business Environment\n--------------------------------------------- */\n${connected_section}\n/* ---------------------------------------------\n   Section 4 — API Integrations\n--------------------------------------------- */\n${api_section}\n/* ---------------------------------------------\n   Section 5 — Third-Party Integrations\n--------------------------------------------- */\n${third_party_section}\n/* ---------------------------------------------\n   Section 6 — ERP Integrations\n--------------------------------------------- */\n${erp_section}\n/* ---------------------------------------------\n   Section 7 — CTA\n--------------------------------------------- */\n${cta_section}\n/* ---------------------------------------------\n   Section 8 — FAQ\n--------------------------------------------- */\n${faq_section}\n\n${export_default}`;

fs.writeFileSync('components/sections/integrations/IntegrationsContent.tsx', final_code, 'utf8');
console.log('Merged successfully!');
