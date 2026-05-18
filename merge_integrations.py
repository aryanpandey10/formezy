import re

with open('temp_original_uncommented.txt', 'r', encoding='utf-8') as f:
    orig = f.read()

with open('temp_new.txt', 'r', encoding='utf-8') as f:
    new_code = f.read()

# Extract parts from orig
g_comp = re.search(r'(const G =.*?;\n\n)', orig, re.DOTALL).group(1)
bullet_list = re.search(r'(function BulletList.*?}\n\n)', orig, re.DOTALL).group(1)
faqs = re.search(r'(const faqs: AccordionItem.*?\];\n)', orig, re.DOTALL).group(1)

connected_section = re.search(r'(const connectedPills =.*?)(?=/\* -+)', orig, re.DOTALL).group(1)
api_section = re.search(r'(const apiBullets =.*?)(?=/\* -+)', orig, re.DOTALL).group(1)
third_party_section = re.search(r'(const thirdPartyBullets =.*?)(?=/\* -+)', orig, re.DOTALL).group(1)
erp_section = re.search(r'(const erpPills =.*?)(?=/\* -+)', orig, re.DOTALL).group(1)
cta_section = re.search(r'(function CtaSectionBlock.*?)(?=/\* -+)', orig, re.DOTALL).group(1)
faq_section = re.search(r'(function FaqSection.*?)(?=/\* -+)', orig, re.DOTALL).group(1)

# Extract parts from new_code
hero_data = re.search(r'(/\* ====.*?function HeroSection\(\) \{.*?\}\n)', new_code, re.DOTALL).group(1)
export_default = re.search(r'(export default function IntegrationsContent.*?\}\n)', new_code, re.DOTALL).group(1)

final_code = f'''"use client";

import {{ useState, useEffect, useCallback }} from "react";
import Image from "next/image";
import Link from "next/link";
import {{ AnimatePresence, motion }} from "framer-motion";
import {{ ArrowRight, Check, ChevronRight, ChevronLeft }} from "lucide-react";
import Button from "@/components/ui/Button";
import Accordion, {{ type AccordionItem }} from "@/components/ui/Accordion";
import {{ fadeUp, staggerContainer, viewportOnce }} from "@/lib/animations";
import SectionWebpImage from "@/components/ui/SectionWebpImage";
import SeamlessIntegrations from "@/components/sections/home/Integrations";
import CtaSection from "@/components/sections/CtaSection";
import {{ integrationPageImages }} from "@/lib/page-section-images";
import {{ cn }} from "@/lib/utils";

{g_comp}
{bullet_list}
/* ---------------------------------------------
   FAQ data
--------------------------------------------- */
{faqs}

{hero_data}

/* ---------------------------------------------
   Section 3 — Built for a Connected Business Environment
--------------------------------------------- */
{connected_section}
/* ---------------------------------------------
   Section 4 — API Integrations
--------------------------------------------- */
{api_section}
/* ---------------------------------------------
   Section 5 — Third-Party Integrations
--------------------------------------------- */
{third_party_section}
/* ---------------------------------------------
   Section 6 — ERP Integrations
--------------------------------------------- */
{erp_section}
/* ---------------------------------------------
   Section 7 — CTA
--------------------------------------------- */
{cta_section}
/* ---------------------------------------------
   Section 8 — FAQ
--------------------------------------------- */
{faq_section}

{export_default}
'''

with open('components/sections/integrations/IntegrationsContent.tsx', 'w', encoding='utf-8') as f:
    f.write(final_code)

print("Done generating IntegrationsContent.tsx")
