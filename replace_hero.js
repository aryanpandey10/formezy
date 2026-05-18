const fs = require('fs');

let orig = fs.readFileSync('components/sections/integrations/IntegrationsContent.tsx', 'utf8');
let new_hero_text = fs.readFileSync('new_hero_clean.txt', 'utf8');

// The new_hero_text has:
// /* ==================== INTEGRATIONS CAROUSEL DATA ==================== */
// const integrationsData = ...
// function HeroSection() { ... }
// up to: /* "?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?
// So I will just extract it:

const match = new_hero_text.match(/(\/\* ==================== INTEGRATIONS CAROUSEL DATA.*?function HeroSection\(\) \{.*?\n\})\s*\n\/\*/s);
let hero_replacement = "";
if (match) {
    hero_replacement = match[1];
} else {
    // try to split
    const start = new_hero_text.indexOf('/* ==================== INTEGRATIONS CAROUSEL DATA');
    const end = new_hero_text.indexOf('Rest of your components');
    if (start !== -1 && end !== -1) {
        let sub = new_hero_text.substring(start, end);
        hero_replacement = sub.substring(0, sub.lastIndexOf('}') + 1);
    }
}

// Ensure cn is imported
if (!orig.includes('import { cn }')) {
    orig = orig.replace('import { fadeUp', 'import { cn } from "@/lib/utils";\nimport { fadeUp');
}
// Add import { useState, useEffect, useCallback } if not present
if (!orig.includes('import { useState')) {
    orig = orig.replace('import { fadeUp', 'import { useState, useEffect, useCallback } from "react";\nimport { fadeUp');
}

// Replace the old HeroSection
const old_hero_start = orig.indexOf('function HeroSection() {');
const next_section = orig.indexOf('/* ---------------------------------------------\n   Section 2');
if (old_hero_start !== -1 && next_section !== -1) {
    const old_hero = orig.substring(old_hero_start, next_section);
    orig = orig.replace(old_hero, hero_replacement + '\n\n');
}

// Add the new export default function
const export_default_start = orig.indexOf('export default function IntegrationsContent()');
const new_export_start = new_hero_text.indexOf('export default function IntegrationsContent()');
if (export_default_start !== -1 && new_export_start !== -1) {
    const old_export = orig.substring(export_default_start);
    const new_export = new_hero_text.substring(new_export_start).trim();
    orig = orig.replace(old_export, new_export);
}

fs.writeFileSync('components/sections/integrations/IntegrationsContent.tsx', orig, 'utf8');
console.log('Hero section replaced successfully!');
