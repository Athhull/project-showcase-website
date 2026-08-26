/* ==========================================================================
   THE PROJECT ARCHIVE — MAIN JAVASCRIPT SYSTEM
   Includes 50 Student Data Records, Interactive Hero Canvas, Live Search,
   Category Filters, Modal Controller, and Motion Observers.
   ========================================================================== */

// ===============================================
// STUDENT PROJECT DATA
// Replace the placeholder values with the actual
// 50 students' names, titles, and repository links.
// ===============================================
const projects = [
  {
    id: 1,
    rollNo: "01",
    student: "Arjun K",
    title: "Neural Canvas Studio",
    description: "An interactive generative art engine using canvas shaders and algorithmic particle physics to transform voice frequency data into visual art.",
    category: "AI & Interactive",
    github: "https://github.com/arjun-k/neural-canvas",
    live: "https://arjun-k.github.io/neural-canvas/",
    previewTheme: "cyan-nodes",
    tags: ["HTML5", "Canvas API", "Web Audio", "Vanilla JS"],
    featured: true
  },
  {
    id: 2,
    rollNo: "02",
    student: "Athul S",
    title: "Verve Motion Portfolio",
    description: "A high-precision creative studio portfolio featuring smooth web kinetic typography, custom cursor physics, and horizontal scroll choreography.",
    category: "Creative",
    github: "https://github.com/athuls/verve-motion",
    live: "https://athuls.github.io/verve-motion/",
    previewTheme: "purple-mesh",
    tags: ["HTML5", "CSS3 Grid", "IntersectionObserver", "JS Motion"],
    featured: false
  },
  {
    id: 3,
    rollNo: "03",
    student: "Anu P",
    title: "Aetheria OS Web Desktop",
    description: "A browser-based simulated futuristic operating system complete with draggable window management, rich terminal emulator, and web apps.",
    category: "Web",
    github: "https://github.com/anup/aetheria-os",
    live: "https://anup.github.io/aetheria-os/",
    previewTheme: "dark-terminal",
    tags: ["Vanilla JS", "DOM API", "CSS Grid", "LocalStorage"],
    featured: false
  },
  {
    id: 4,
    rollNo: "04",
    student: "Rahul M",
    title: "Chronos Cyberpunk Studio",
    description: "An immersive dark cybernetic showcase featuring procedural neon lights, ambient audio synthesis, and interactive 3D perspective cards.",
    category: "3D & WebGL",
    github: "https://github.com/rahulm/chronos-studio",
    live: "https://rahulm.github.io/chronos-studio/",
    previewTheme: "neon-grid",
    tags: ["Three.js", "WebGL", "CSS 3D", "Audio Synth"],
    featured: false
  },
  {
    id: 5,
    rollNo: "05",
    student: "Sophia Chen",
    title: "Kinetix Soundscape Visualizer",
    description: "Real-time browser audio frequency spectrum analyzer with custom GLSL shaders rendering organic wave topologies.",
    category: "AI & Interactive",
    github: "https://github.com/sophiachen/kinetix-sound",
    live: "https://sophiachen.github.io/kinetix-sound/",
    previewTheme: "wave-lines",
    tags: ["Web Audio API", "Canvas 2D", "JavaScript", "CSS Glass"],
    featured: true
  },
  {
    id: 6,
    rollNo: "06",
    student: "Marcus Vance",
    title: "Hyperion Cybernetics",
    description: "Minimalist landing page for a fictional robotics lab, highlighting interactive scroll-driven wireframe breakdown animations.",
    category: "Experimental",
    github: "https://github.com/marcusvance/hyperion",
    live: "https://marcusvance.github.io/hyperion/",
    previewTheme: "silver-wireframe",
    tags: ["HTML5", "CSS Custom Props", "Scroll Driven", "SVG"],
    featured: false
  },
  {
    id: 7,
    rollNo: "07",
    student: "Divya Nair",
    title: "Quantum Notes & Knowledge Graph",
    description: "A markdown note-taking web app featuring interactive visual force-directed graph node connections built with pure JavaScript.",
    category: "Web",
    github: "https://github.com/divyanair/quantum-notes",
    live: "https://divyanair.github.io/quantum-notes/",
    previewTheme: "force-graph",
    tags: ["JavaScript", "Canvas API", "IndexedDB", "Markdown"],
    featured: true
  },
  {
    id: 8,
    rollNo: "08",
    student: "Liam O'Connor",
    title: "Starlight Planetarium",
    description: "An interactive 3D solar system simulation mapping constellation coordinates with astronomical accuracy in web browsers.",
    category: "3D & WebGL",
    github: "https://github.com/liamoconnor/starlight",
    live: "https://liamoconnor.github.io/starlight/",
    previewTheme: "stars-orbit",
    tags: ["WebGL", "Three.js", "Math GL", "CSS Animations"],
    featured: false
  },
  {
    id: 9,
    rollNo: "09",
    student: "Priya Sharma",
    title: "Echo Minimalist Typography",
    description: "An experimental typographic showcase exploring dynamic variable font axes controlled by mouse positioning and scroll velocity.",
    category: "Creative",
    github: "https://github.com/priyasharma/echo-type",
    live: "https://priyasharma.github.io/echo-type/",
    previewTheme: "typography-bold",
    tags: ["Variable Fonts", "CSS3", "JavaScript", "Layout"],
    featured: false
  },
  {
    id: 10,
    rollNo: "10",
    student: "Alexander Wright",
    title: "Nexus Code Workspace",
    description: "In-browser live HTML/CSS/JS web playground editor with instant visual sandbox previewing and state saving.",
    category: "Web",
    github: "https://github.com/alexwright/nexus-code",
    live: "https://alexwright.github.io/nexus-code/",
    previewTheme: "editor-split",
    tags: ["JavaScript", "Iframe Sandbox", "CSS Flexbox", "Local Storage"],
    featured: false
  },
  {
    id: 11,
    rollNo: "11",
    student: "Meera Krishnan",
    title: "Solstice Architecture Gallery",
    description: "Luxury architectural design studio archive featuring asymmetrical editorial grids and smooth page transition choreography.",
    category: "Creative",
    github: "https://github.com/meerak/solstice-arch",
    live: "https://meerak.github.io/solstice-arch/",
    previewTheme: "gold-editorial",
    tags: ["HTML5", "CSS Grid", "Parallax", "Vanilla JS"],
    featured: false
  },
  {
    id: 12,
    rollNo: "12",
    student: "David Zhang",
    title: "Pulse Synthesizer & Drum Machine",
    description: "A 16-step web audio rhythm sequencer with customizable BPM, filter envelopes, and sound synth presets.",
    category: "AI & Interactive",
    github: "https://github.com/davidzhang/pulse-synth",
    live: "https://davidzhang.github.io/pulse-synth/",
    previewTheme: "matrix-step",
    tags: ["Web Audio API", "JS Sequencer", "CSS Animations", "UI Grid"],
    featured: true
  },
  {
    id: 13,
    rollNo: "13",
    student: "Fatima Al-Hassan",
    title: "Mirage Generative Shaders",
    description: "Mathematical fractal pattern visualizer with real-time parameter tweaking and high-resolution export capabilities.",
    category: "Experimental",
    github: "https://github.com/fatima-alhassan/mirage-fractals",
    live: "https://fatima-alhassan.github.io/mirage-fractals/",
    previewTheme: "fractal-glow",
    tags: ["GLSL", "Canvas 2D", "Math Algorithms", "JavaScript"],
    featured: false
  },
  {
    id: 14,
    rollNo: "14",
    student: "Kiran R",
    title: "Orbit Analytics Dashboard",
    description: "Sleek dark-mode telemetry and web analytics UI prototype featuring interactive SVG chart widgets.",
    category: "Web",
    github: "https://github.com/kiranr/orbit-analytics",
    live: "https://kiranr.github.io/orbit-analytics/",
    previewTheme: "dashboard-charts",
    tags: ["SVG Charts", "CSS Grid", "Vanilla JS", "JSON Data"],
    featured: false
  },
  {
    id: 15,
    rollNo: "15",
    student: "Elena Rostova",
    title: "Vapor Cyber Shop",
    description: "Futuristic digital asset marketplace landing experience with glassmorphism product preview cards.",
    category: "Creative",
    github: "https://github.com/elenarostova/vapor-shop",
    live: "https://elenarostova.github.io/vapor-shop/",
    previewTheme: "glass-cards",
    tags: ["HTML5", "CSS Glassmorphism", "Micro-interactions", "JS"],
    featured: false
  },
  {
    id: 16,
    rollNo: "16",
    student: "Siddharth Verma",
    title: "Aura Habit & Focus Suite",
    description: "Productivity dashboard featuring pomodoro timer, generative ambient background noise generator, and streak tracker.",
    category: "Web",
    github: "https://github.com/siddharthv/aura-focus",
    live: "https://siddharthv.github.io/aura-focus/",
    previewTheme: "ring-timer",
    tags: ["Web Audio", "LocalStorage", "CSS3 Animations", "JS"],
    featured: false
  },
  {
    id: 17,
    rollNo: "17",
    student: "Hannah Schmidt",
    title: "Chroma Color Palette Engine",
    description: "AI-assisted color harmonious palette generator with live previewing on real component mockups.",
    category: "AI & Interactive",
    github: "https://github.com/hannahschmidt/chroma-engine",
    live: "https://hannahschmidt.github.io/chroma-engine/",
    previewTheme: "color-swatches",
    tags: ["Color Math", "DOM Mutation", "Vanilla JS", "CSS Variables"],
    featured: false
  },
  {
    id: 18,
    rollNo: "18",
    student: "Kevin Park",
    title: "Apex Gaming Tournament Hub",
    description: "Esports league platform featuring live match leaderboards, player stats modal overlays, and bracket visualization.",
    category: "Web",
    github: "https://github.com/kevinpark/apex-hub",
    live: "https://kevinpark.github.io/apex-hub/",
    previewTheme: "bracket-lines",
    tags: ["HTML5", "CSS Grid", "JavaScript Filter", "JSON"],
    featured: false
  },
  {
    id: 19,
    rollNo: "19",
    student: "Rohan Gupta",
    title: "Substratum Geological Map",
    description: "Interactive data visualization mapping tectonic fault lines and terrain elevation depth layers.",
    category: "3D & WebGL",
    github: "https://github.com/rohangupta/substratum",
    live: "https://rohangupta.github.io/substratum/",
    previewTheme: "contour-map",
    tags: ["Canvas 2D", "SVG Pathing", "Geo Data", "JS Math"],
    featured: false
  },
  {
    id: 20,
    rollNo: "20",
    student: "Chloe Bennett",
    title: "Lumina Digital Fashion Exhibition",
    description: "3D virtual runway experience presenting experimental digital clothing collections in 360 viewer.",
    category: "3D & WebGL",
    github: "https://github.com/chloebennett/lumina-fashion",
    live: "https://chloebennett.github.io/lumina-fashion/",
    previewTheme: "model-glow",
    tags: ["Three.js", "WebGL", "CSS 3D", "Canvas"],
    featured: true
  },
  {
    id: 21,
    rollNo: "21",
    student: "Nikhil Joshi",
    title: "Flux Algorithmic Trader UI",
    description: "High-frequency crypto and stock charting portal with customizable indicators and dark mode controls.",
    category: "Web",
    github: "https://github.com/nikhiljoshi/flux-trader",
    live: "https://nikhiljoshi.github.io/flux-trader/",
    previewTheme: "candlestick-chart",
    tags: ["Canvas Charts", "JavaScript", "Real-time Mock", "CSS"],
    featured: false
  },
  {
    id: 22,
    rollNo: "22",
    student: "Isabella Silva",
    title: "Botanica Interactive Garden",
    description: "Generative L-system plant growth simulator where user clicks plant seed algorithms into bloom.",
    category: "Experimental",
    github: "https://github.com/isabellasilva/botanica",
    live: "https://isabellasilva.github.io/botanica/",
    previewTheme: "fractal-tree",
    tags: ["Recursive JS", "Canvas API", "Math Algorithms", "CSS"],
    featured: false
  },
  {
    id: 23,
    rollNo: "23",
    student: "Aman T",
    title: "Zenith Space Mission Log",
    description: "Interactive timeline archive tracking Mars rover telemetry and cosmic exploration milestones.",
    category: "Creative",
    github: "https://github.com/amant/zenith-space",
    live: "https://amant.github.io/zenith-space/",
    previewTheme: "space-timeline",
    tags: ["HTML5", "CSS Scroll Snap", "JS Observers", "JSON"],
    featured: false
  },
  {
    id: 24,
    rollNo: "24",
    student: "Zoe Taylor",
    title: "Prism Dynamic Physics Sandbox",
    description: "Browser 2D physics world with gravity controls, rigid body collisions, and rope constraints.",
    category: "Experimental",
    github: "https://github.com/zoetaylor/prism-physics",
    live: "https://zoetaylor.github.io/prism-physics/",
    previewTheme: "physics-balls",
    tags: ["Canvas Physics", "Vector Math", "JS Engine", "CSS"],
    featured: false
  },
  {
    id: 25,
    rollNo: "25",
    student: "Aditya Roy",
    title: "Synthetix Voice Synth Lab",
    description: "Browser text-to-speech visual studio with pitch modulation, robotic vocoder, and audio wave export.",
    category: "AI & Interactive",
    github: "https://github.com/adityaroy/synthetix",
    live: "https://adityaroy.github.io/synthetix/",
    previewTheme: "audio-bars",
    tags: ["Web Speech API", "Web Audio API", "Canvas", "JS"],
    featured: true
  },
  {
    id: 26,
    rollNo: "26",
    student: "Camila Fernandez",
    title: "Nomad Culinary Travel Atlas",
    description: "Curated world gastronomy map showcasing regional recipes and interactive flavor profile charts.",
    category: "Web",
    github: "https://github.com/camila-f/nomad-culinary",
    live: "https://camila-f.github.io/nomad-culinary/",
    previewTheme: "map-pins",
    tags: ["SVG Maps", "CSS Grid", "Filter JS", "Modal UI"],
    featured: false
  },
  {
    id: 27,
    rollNo: "27",
    student: "Vishal P",
    title: "Vortex Particle Gravity Simulator",
    description: "Simulating 10,000 particle n-body gravitational attraction with interactive user particle attractors.",
    category: "3D & WebGL",
    github: "https://github.com/vishalp/vortex-particles",
    live: "https://vishalp.github.io/vortex-particles/",
    previewTheme: "galaxy-vortex",
    tags: ["Canvas 2D", "N-Body Physics", "Performance JS", "WebGL"],
    featured: false
  },
  {
    id: 28,
    rollNo: "28",
    student: "Maya Lin",
    title: "Zen Minimalist Editorial",
    description: "Wabi-sabi inspired digital publication highlighting Japanese spatial typography and quiet micro-animations.",
    category: "Creative",
    github: "https://github.com/mayalin/zen-editorial",
    live: "https://mayalin.github.io/zen-editorial/",
    previewTheme: "kanji-minimal",
    tags: ["HTML5", "CSS Custom Props", "Typography", "JS Smooth"],
    featured: false
  },
  {
    id: 29,
    rollNo: "29",
    student: "Gautam Menon",
    title: "Aura Ambient Sound Generator",
    description: "Relaxing atmospheric soundscape mixer blending rain, white noise, binaural beats, and campfire recordings.",
    category: "AI & Interactive",
    github: "https://github.com/gautammenon/aura-ambient",
    live: "https://gautammenon.github.io/aura-ambient/",
    previewTheme: "sound-circles",
    tags: ["Web Audio API", "JS Sliders", "CSS Glassmorphism"],
    featured: false
  },
  {
    id: 30,
    rollNo: "30",
    student: "Olivia Martinez",
    title: "Metropolis City Infrastructure Dashboard",
    description: "Smart city urban management portal monitoring traffic flow density and energy grid utilization.",
    category: "Web",
    github: "https://github.com/oliviamartinez/metropolis",
    live: "https://oliviamartinez.github.io/metropolis/",
    previewTheme: "grid-nodes",
    tags: ["SVG Data", "Vanilla JS", "CSS Grid Layout", "Charts"],
    featured: false
  },
  {
    id: 31,
    rollNo: "31",
    student: "Tarun K",
    title: "Retrospect Arcade Emulator UI",
    description: "Nostalgic CRT raster scanner interface for retro web arcade games with custom key bindings.",
    category: "Experimental",
    github: "https://github.com/tarunk/retrospect-arcade",
    live: "https://tarunk.github.io/retrospect-arcade/",
    previewTheme: "crt-green",
    tags: ["Canvas API", "CSS CRT Shader", "Web Game Engine"],
    featured: false
  },
  {
    id: 32,
    rollNo: "32",
    student: "Sofia Rossi",
    title: "Savant AI Prompt Studio",
    description: "Creative writing workspace with built-in prompt scaffolding, word frequency analytics, and mind map graph.",
    category: "AI & Interactive",
    github: "https://github.com/sofiarossi/savant-ai",
    live: "https://sofiarossi.github.io/savant-ai/",
    previewTheme: "mind-map",
    tags: ["JavaScript", "Text Metrics", "DOM Manipulation", "CSS"],
    featured: false
  },
  {
    id: 33,
    rollNo: "33",
    student: "Harsh Vardhan",
    title: "Kinesis Gesture Web Control",
    description: "Webcam hand tracking experiments controlling web page elements using browser Computer Vision algorithms.",
    category: "Experimental",
    github: "https://github.com/harshv/kinesis-gesture",
    live: "https://harshv.github.io/kinesis-gesture/",
    previewTheme: "hand-tracking",
    tags: ["Webcam API", "Canvas", "Gesture Math", "JS"],
    featured: true
  },
  {
    id: 34,
    rollNo: "34",
    student: "Emily Watson",
    title: "Enigma Cryptography Sandbox",
    description: "Educational cryptographic cipher tool visualizing RSA, AES, and historical Enigma key machine encryptions.",
    category: "Web",
    github: "https://github.com/emilywatson/enigma-crypto",
    live: "https://emilywatson.github.io/enigma-crypto/",
    previewTheme: "matrix-numbers",
    tags: ["Web Crypto API", "Vanilla JS", "CSS Monospace", "UI"],
    featured: false
  },
  {
    id: 35,
    rollNo: "35",
    student: "Suraj N",
    title: "Aero Flight Tracker Live",
    description: "Interactive global flight altitude radar simulator with flight trajectory animations and airport data.",
    category: "Web",
    github: "https://github.com/surajn/aero-flight",
    live: "https://surajn.github.io/aero-flight/",
    previewTheme: "radar-sweep",
    tags: ["Canvas Radar", "SVG Vectors", "JS Animation", "JSON"],
    featured: false
  },
  {
    id: 36,
    rollNo: "36",
    student: "Lily Dubois",
    title: "Labyrinth Algorithmic Maze Generator",
    description: "Visualizing maze generation algorithms (Prim's, Kruskal's, DFS) alongside A* pathfinding solvers.",
    category: "Experimental",
    github: "https://github.com/lilydubois/labyrinth",
    live: "https://lilydubois.github.io/labyrinth/",
    previewTheme: "maze-solve",
    tags: ["Algorithm Visualizer", "Canvas 2D", "JS Step Logic"],
    featured: false
  },
  {
    id: 37,
    rollNo: "37",
    student: "Varun Nair",
    title: "Hyperdrive Cyberpunk Car Configurator",
    description: "3D automotive customizer enabling users to select paint finishes, neon underglow, and wheel rims.",
    category: "3D & WebGL",
    github: "https://github.com/varunnair/hyperdrive",
    live: "https://varunnair.github.io/hyperdrive/",
    previewTheme: "car-wireframe",
    tags: ["Three.js", "WebGL", "CSS 3D", "JS Controls"],
    featured: false
  },
  {
    id: 38,
    rollNo: "38",
    student: "Mia Kim",
    title: "Verve Kinetic Typography Studio",
    description: "Text effect playground generating customizable motion graphics, glitch distortions, and SVG text paths.",
    category: "Creative",
    github: "https://github.com/miakim/verve-type",
    live: "https://miakim.github.io/verve-type/",
    previewTheme: "glitch-text",
    tags: ["SVG Text", "CSS Keyframes", "JS Generator", "Fonts"],
    featured: true
  },
  {
    id: 39,
    rollNo: "39",
    student: "Akash Deep",
    title: "Neptune Ocean Currents Map",
    description: "Fluid dynamics simulation visualizer representing global sea surface temperatures and ocean currents.",
    category: "3D & WebGL",
    github: "https://github.com/akashdeep/neptune-currents",
    live: "https://akashdeep.github.io/neptune-currents/",
    previewTheme: "ocean-waves",
    tags: ["Canvas Shaders", "Fluid Dynamics", "Math", "JS"],
    featured: false
  },
  {
    id: 40,
    rollNo: "40",
    student: "Lucas Fischer",
    title: "Monolith Concrete Architecture",
    description: "Brutalist web design showcase emphasizing high contrast typography, raw textures, and stark layout grid.",
    category: "Creative",
    github: "https://github.com/lucasfischer/monolith",
    live: "https://lucasfischer.github.io/monolith/",
    previewTheme: "brutalist-block",
    tags: ["CSS Grid", "Typography", "Minimalist Layout", "JS"],
    featured: false
  },
  {
    id: 41,
    rollNo: "41",
    student: "Deepika S",
    title: "Pranayama Breathing Guide",
    description: "Minimalist wellness app offering visual breathing pacing circles, ambient soothing tones, and sessions log.",
    category: "Web",
    github: "https://github.com/deepikas/pranayama",
    live: "https://deepikas.github.io/pranayama/",
    previewTheme: "breath-circle",
    tags: ["CSS Pulsing", "Web Audio API", "Vanilla JS", "UI"],
    featured: false
  },
  {
    id: 42,
    rollNo: "42",
    student: "Ethan Hunt",
    title: "Stealth Cybersecurity Dashboard",
    description: "SOC network security monitoring dashboard prototype displaying live intrusion alert threat maps.",
    category: "Web",
    github: "https://github.com/ethanhunt/stealth-soc",
    live: "https://ethanhunt.github.io/stealth-soc/",
    previewTheme: "threat-map",
    tags: ["SVG Maps", "CSS Dark Mode", "JS Realtime Data"],
    featured: false
  },
  {
    id: 43,
    rollNo: "43",
    student: "Ananya R",
    title: "Celestia Astronomy Calendar 2026",
    description: "Interactive lunar phase calculator, meteor shower calendar, and stargazing visibility forecaster.",
    category: "Creative",
    github: "https://github.com/ananyar/celestia-2026",
    live: "https://ananyar.github.io/celestia-2026/",
    previewTheme: "moon-phases",
    tags: ["Astronomy Math", "Canvas 2D", "CSS Grid", "JS"],
    featured: false
  },
  {
    id: 44,
    rollNo: "44",
    student: "Oliver Taylor",
    title: "Syntron Analog Synth Modeler",
    description: "Modulating square/saw waves in real-time with browser oscillator nodes and delay feedback loops.",
    category: "AI & Interactive",
    github: "https://github.com/olivertaylor/syntron",
    live: "https://olivertaylor.github.io/syntron/",
    previewTheme: "oscilloscope-wave",
    tags: ["Web Audio API", "Oscillator", "Canvas API", "JS"],
    featured: false
  },
  {
    id: 45,
    rollNo: "45",
    student: "Kavya Menon",
    title: "Silk Weaving Pattern Generator",
    description: "Generative textile pattern design tool converting custom numerical seed inputs into intricate fabric geometries.",
    category: "Experimental",
    github: "https://github.com/kavyamenon/silk-patterns",
    live: "https://kavyamenon.github.io/silk-patterns/",
    previewTheme: "textile-weave",
    tags: ["Canvas API", "Symmetry Math", "PNG Export", "JS"],
    featured: false
  },
  {
    id: 46,
    rollNo: "46",
    student: "Benjamin Scott",
    title: "Vortex Particle Collision Rig",
    description: "High-performance WebGL particle system simulating fluid turbulence and vortex dynamics.",
    category: "3D & WebGL",
    github: "https://github.com/benjaminscott/vortex-rig",
    live: "https://benjaminscott.github.io/vortex-rig/",
    previewTheme: "purple-vortex",
    tags: ["WebGL", "GLSL Shaders", "Particle Math", "JS"],
    featured: false
  },
  {
    id: 47,
    rollNo: "47",
    student: "Nisha Patel",
    title: "Augmented Reality Furniture Visualizer",
    description: "WebXR experimental prototype letting users place 3D furniture models inside camera view space.",
    category: "3D & WebGL",
    github: "https://github.com/nishapatel/ar-furniture",
    live: "https://nishapatel.github.io/ar-furniture/",
    previewTheme: "ar-cube",
    tags: ["WebXR", "Three.js", "Camera Stream", "3D"],
    featured: false
  },
  {
    id: 48,
    rollNo: "48",
    student: "Gabriel Costa",
    title: "Chrono Shift Time-Dilation Game",
    description: "2D browser platformer puzzle game where player speed dynamically dictates time flow rate.",
    category: "Experimental",
    github: "https://github.com/gabrielcosta/chrono-shift",
    live: "https://gabrielcosta.github.io/chrono-shift/",
    previewTheme: "platformer-pixel",
    tags: ["Canvas Game Engine", "Physics Engine", "JS Keys"],
    featured: false
  },
  {
    id: 49,
    rollNo: "49",
    student: "Sneha Reddi",
    title: "Aura Color Therapy Studio",
    description: "Chromotherapy application pairing smooth full-screen ambient color gradient flows with acoustic frequency sound waves.",
    category: "Creative",
    github: "https://github.com/snehareddi/aura-color",
    live: "https://snehareddi.github.io/aura-color/",
    previewTheme: "gradient-flow",
    tags: ["CSS Gradients", "Web Audio API", "JS Micro-interactions"],
    featured: false
  },
  {
    id: 50,
    rollNo: "50",
    student: "Zachary King",
    title: "Omni Archive Search Engine UI",
    description: "Ultra-fast indexed browser search interface with fuzzy matching, keyboard shortcuts, and instant command palette.",
    category: "Web",
    github: "https://github.com/zacharyking/omni-archive",
    live: "https://zacharyking.github.io/omni-archive/",
    previewTheme: "command-palette",
    tags: ["Fuzzy Search JS", "Command K Modal", "CSS Glass", "Keyboard Nav"],
    featured: true
  }
];

// ===============================================
// STATE MANAGEMENT & DOM ELEMENTS
// ===============================================
let currentCategory = "All";
let currentSearchQuery = "";
let filteredProjects = [...projects];

const exhibitionGrid = document.getElementById("exhibitionGrid");
const studentIndexList = document.getElementById("studentIndexList");
const searchInput = document.getElementById("searchInput");
const searchClearBtn = document.getElementById("searchClearBtn");
const filterBtns = document.querySelectorAll(".filter-btn");
const filteredCountEl = document.getElementById("filteredCount");
const noResultsEl = document.getElementById("noResults");
const resetSearchBtn = document.getElementById("resetSearchBtn");
const featuredProjectCard = document.getElementById("featuredProjectCard");

// Modal Elements
const projectModal = document.getElementById("projectModal");
const modalBackdrop = document.getElementById("modalBackdrop");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const modalBody = document.getElementById("modalBody");

// Mobile Menu Elements
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileOverlay = document.getElementById("mobileOverlay");
const mobileBackdrop = document.getElementById("mobileBackdrop");
const mobileCloseBtn = document.getElementById("mobileCloseBtn");
const mobileLinks = document.querySelectorAll(".mobile-link");

// Custom Cursor Elements
const customCursor = document.getElementById("customCursor");
const customCursorDot = document.getElementById("customCursorDot");

// ===============================================
// PROCEDURAL SVG GRAPHIC THUMBNAIL GENERATOR
// Renders distinct, sleek vector visual previews for
// every project card without loading external images.
// ===============================================
function createProceduralPreview(theme, id, title) {
  const themes = {
    "cyan-nodes": `
      <defs>
        <radialGradient id="grad-${id}" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#00f0ff" stop-opacity="0.3"/>
          <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="#08080a"/>
      <circle cx="50%" cy="50%" r="40%" fill="url(#grad-${id})"/>
      <path d="M 40,60 L 120,100 L 220,50 L 320,120 L 400,70" stroke="#00f0ff" stroke-width="2" fill="none" stroke-dasharray="4 4" opacity="0.6"/>
      <circle cx="120" cy="100" r="5" fill="#00f0ff"/>
      <circle cx="220" cy="50" r="7" fill="#ffffff"/>
      <circle cx="320" cy="120" r="4" fill="#00f0ff"/>
      <text x="50%" y="85%" text-anchor="middle" fill="#00f0ff" font-family="JetBrains Mono" font-size="12" letter-spacing="2">0${id} // GENERATIVE NODE MATRIX</text>
    `,
    "purple-mesh": `
      <rect width="100%" height="100%" fill="#0b0812"/>
      <path d="M 0 100 Q 150 20 300 100 T 600 100" stroke="#7000ff" stroke-width="3" fill="none" opacity="0.7"/>
      <path d="M 0 130 Q 150 50 300 130 T 600 130" stroke="#3a86ff" stroke-width="2" fill="none" opacity="0.5"/>
      <circle cx="70%" cy="40%" r="60" fill="#7000ff" opacity="0.25" style="filter: blur(20px);"/>
      <text x="50%" y="85%" text-anchor="middle" fill="#7000ff" font-family="JetBrains Mono" font-size="12" letter-spacing="2">0${id} // KINETIC VECTOR MESH</text>
    `,
    "dark-terminal": `
      <rect width="100%" height="100%" fill="#09090b"/>
      <rect x="20" y="20" width="90%" height="75%" rx="8" fill="#121216" stroke="#25252e" stroke-width="1"/>
      <circle cx="40" cy="38" r="4" fill="#ff5f56"/>
      <circle cx="54" cy="38" r="4" fill="#ffbd2e"/>
      <circle cx="68" cy="38" r="4" fill="#27c93f"/>
      <text x="35" y="70" fill="#00ff66" font-family="JetBrains Mono" font-size="11">$ sys.init_aetheria_kernel()</text>
      <text x="35" y="95" fill="#888888" font-family="JetBrains Mono" font-size="11">&gt; Loading modules... [OK]</text>
      <text x="35" y="120" fill="#ffffff" font-family="JetBrains Mono" font-size="11">&gt; 50/50 Subsystems Operational</text>
    `,
    "neon-grid": `
      <rect width="100%" height="100%" fill="#05000a"/>
      <g stroke="rgba(255,0,128,0.2)" stroke-width="1">
        <line x1="0" y1="50" x2="500" y2="50"/>
        <line x1="0" y1="100" x2="500" y2="100"/>
        <line x1="0" y1="150" x2="500" y2="150"/>
        <line x1="100" y1="0" x2="100" y2="300"/>
        <line x1="250" y1="0" x2="250" y2="300"/>
        <line x1="400" y1="0" x2="400" y2="300"/>
      </g>
      <polygon points="250,40 330,160 170,160" fill="none" stroke="#ff007f" stroke-width="2"/>
      <circle cx="250" cy="110" r="15" fill="#00f0ff" opacity="0.8"/>
    `,
    "wave-lines": `
      <rect width="100%" height="100%" fill="#030a10"/>
      <path d="M 10 100 C 80 20, 120 180, 200 100 S 300 20, 400 100" stroke="#00f0ff" stroke-width="3" fill="none"/>
      <path d="M 10 120 C 80 40, 120 200, 200 120 S 300 40, 400 120" stroke="#0088ff" stroke-width="2" fill="none" opacity="0.6"/>
      <text x="50%" y="85%" text-anchor="middle" fill="#00f0ff" font-family="JetBrains Mono" font-size="12">AUDIO SPECTRUM // 48000Hz</text>
    `,
    "silver-wireframe": `
      <rect width="100%" height="100%" fill="#0a0a0c"/>
      <rect x="25%" y="20%" width="50%" height="60%" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-dasharray="6 6"/>
      <circle cx="50%" cy="50%" r="30" fill="none" stroke="#ffffff" stroke-width="2"/>
      <line x1="0" y1="0" x2="100%" y2="100%" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
      <text x="50%" y="88%" text-anchor="middle" fill="#ffffff" font-family="JetBrains Mono" font-size="11">HYPERION STRUCTURAL CAD</text>
    `,
    "force-graph": `
      <rect width="100%" height="100%" fill="#080c0e"/>
      <line x1="80" y1="70" x2="200" y2="120" stroke="#3a86ff" stroke-width="1.5"/>
      <line x1="200" y1="120" x2="320" y2="60" stroke="#3a86ff" stroke-width="1.5"/>
      <line x1="200" y1="120" x2="240" y2="180" stroke="#3a86ff" stroke-width="1.5"/>
      <circle cx="80" cy="70" r="10" fill="#3a86ff"/>
      <circle cx="200" cy="120" r="14" fill="#00f0ff"/>
      <circle cx="320" cy="60" r="8" fill="#ffffff"/>
      <circle cx="240" cy="180" r="12" fill="#7000ff"/>
    `
  };

  const defaultSVG = `
    <rect width="100%" height="100%" fill="#0d0d10"/>
    <grid width="100%" height="100%" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
    <circle cx="50%" cy="45%" r="45" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
    <polygon points="50%,30% 60%,55% 40%,55%" fill="rgba(255,255,255,0.1)" stroke="#ffffff" stroke-width="1"/>
    <text x="50%" y="85%" text-anchor="middle" fill="#888888" font-family="JetBrains Mono" font-size="11" letter-spacing="1">PROJECT ARCHIVE // NO. ${id}</text>
  `;

  const bodyContent = themes[theme] || defaultSVG;

  const svgData = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 250" width="100%" height="100%">
      ${bodyContent}
    </svg>
  `;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgData)}`;
}

// ===============================================
// RENDER EXHIBITION MASONRY GRID
// ===============================================
function renderExhibitionGrid(data) {
  exhibitionGrid.innerHTML = "";

  if (data.length === 0) {
    noResultsEl.style.display = "block";
    exhibitionGrid.style.display = "none";
    filteredCountEl.textContent = "0";
    return;
  }

  noResultsEl.style.display = "none";
  exhibitionGrid.style.display = "grid";
  filteredCountEl.textContent = data.length;

  data.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = `project-card ${item.featured ? "wide-card" : ""}`;
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `View project details for ${item.title} by ${item.student}`);

    const previewSrc = createProceduralPreview(item.previewTheme, item.rollNo, item.title);

    card.innerHTML = `
      <div class="card-preview-wrapper">
        <img src="${previewSrc}" alt="${item.title} visual preview" class="card-preview-img" loading="lazy" />
        <div class="card-badge-top">
          <span class="card-roll-tag">NO. ${item.rollNo}</span>
          <span class="card-category-tag">${item.category}</span>
        </div>
      </div>

      <div class="card-content">
        <div>
          <div class="card-meta">
            <span class="card-student-name">${item.student}</span>
            ${item.featured ? '<span class="mono-text" style="color:var(--accent-cyan); font-size:0.75rem;">★ FEATURED</span>' : ''}
          </div>
          <h3 class="card-title">${item.title}</h3>
          <p class="card-desc">${item.description}</p>
        </div>

        <div class="card-footer">
          <div class="card-links">
            <span class="card-link-btn"><i class="fa-solid fa-code"></i> Code</span>
            <span class="card-link-btn"><i class="fa-solid fa-globe"></i> Live</span>
          </div>
          <div class="card-arrow-icon">
            <i class="fa-solid fa-arrow-up-right"></i>
          </div>
        </div>
      </div>
    `;

    // Click handler to open project detail modal
    card.addEventListener("click", () => openProjectModal(item));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openProjectModal(item);
      }
    });

    exhibitionGrid.appendChild(card);
  });
}

// ===============================================
// RENDER FEATURED PROJECT SHOWCASE
// ===============================================
function renderFeaturedProject() {
  const featured = projects.find(p => p.featured) || projects[0];
  const previewSrc = createProceduralPreview(featured.previewTheme, featured.rollNo, featured.title);

  featuredProjectCard.innerHTML = `
    <div class="featured-preview-container">
      <img src="${previewSrc}" alt="${featured.title} Preview" class="featured-preview-img" />
    </div>

    <div class="featured-info">
      <div>
        <div class="featured-badge-row">
          <span class="featured-tag">FEATURED SHOWCASE</span>
          <span class="featured-roll">ROLL NO. ${featured.rollNo}</span>
        </div>
        <div class="featured-student">${featured.student}</div>
        <h3 class="featured-title">${featured.title}</h3>
        <p class="featured-desc">${featured.description}</p>

        <div class="featured-tech-stack">
          ${featured.tags.map(tag => `<span class="tech-tag">${tag}</span>`).join("")}
        </div>
      </div>

      <div class="featured-actions">
        <button class="btn-primary" id="featuredViewModalBtn">
          <span>Explore Project</span>
          <i class="fa-solid fa-arrow-right"></i>
        </button>
        <a href="${featured.github}" target="_blank" rel="noopener noreferrer" class="btn-secondary">
          <i class="fa-brands fa-github"></i>
          <span>GitHub Repository</span>
        </a>
      </div>
    </div>
  `;

  document.getElementById("featuredViewModalBtn").addEventListener("click", () => {
    openProjectModal(featured);
  });
}

// ===============================================
// RENDER STUDENT INDEX LIST
// ===============================================
function renderStudentIndexList(data) {
  studentIndexList.innerHTML = "";

  data.forEach((item) => {
    const row = document.createElement("div");
    row.className = "index-row";
    row.setAttribute("tabindex", "0");
    row.setAttribute("role", "button");
    row.setAttribute("aria-label", `Open project details for ${item.student}`);

    row.innerHTML = `
      <span class="index-roll">${item.rollNo}</span>
      <span class="index-student">${item.student}</span>
      <span class="index-title">${item.title}</span>
      <span class="index-category">${item.category}</span>
      <span class="index-arrow"><i class="fa-solid fa-arrow-right"></i></span>
    `;

    row.addEventListener("click", () => openProjectModal(item));
    row.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openProjectModal(item);
      }
    });

    studentIndexList.appendChild(row);
  });
}

// ===============================================
// FILTER & SEARCH LOGIC
// ===============================================
function applyFilters() {
  filteredProjects = projects.filter((project) => {
    // Category match
    const matchCategory =
      currentCategory === "All" ||
      (currentCategory === "Featured" && project.featured) ||
      project.category.toLowerCase() === currentCategory.toLowerCase();

    // Search query match
    const q = currentSearchQuery.toLowerCase().trim();
    const matchSearch =
      q === "" ||
      project.student.toLowerCase().includes(q) ||
      project.rollNo.includes(q) ||
      project.title.toLowerCase().includes(q) ||
      project.description.toLowerCase().includes(q) ||
      project.category.toLowerCase().includes(q) ||
      project.tags.some(t => t.toLowerCase().includes(q));

    return matchCategory && matchSearch;
  });

  renderExhibitionGrid(filteredProjects);
}

// Search input handler
searchInput.addEventListener("input", (e) => {
  currentSearchQuery = e.target.value;
  searchClearBtn.style.display = currentSearchQuery.length > 0 ? "block" : "none";
  applyFilters();
});

// Clear search button
searchClearBtn.addEventListener("click", () => {
  searchInput.value = "";
  currentSearchQuery = "";
  searchClearBtn.style.display = "none";
  applyFilters();
  searchInput.focus();
});

// Category filter buttons handler
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => {
      b.classList.remove("active");
      b.setAttribute("aria-selected", "false");
    });
    btn.classList.add("active");
    btn.setAttribute("aria-selected", "true");
    currentCategory = btn.getAttribute("data-category");
    applyFilters();
  });
});

// Reset search button
resetSearchBtn.addEventListener("click", () => {
  searchInput.value = "";
  currentSearchQuery = "";
  searchClearBtn.style.display = "none";
  currentCategory = "All";
  filterBtns.forEach((b) => {
    b.classList.remove("active");
    if (b.getAttribute("data-category") === "All") {
      b.classList.add("active");
    }
  });
  applyFilters();
});

// ===============================================
// PROJECT DETAIL MODAL OVERLAY CONTROLLER
// ===============================================
function openProjectModal(project) {
  const previewSrc = createProceduralPreview(project.previewTheme, project.rollNo, project.title);

  modalBody.innerHTML = `
    <div class="modal-header-meta">
      <span class="modal-roll">ROLL NO. ${project.rollNo}</span>
      <span class="modal-category">${project.category}</span>
    </div>

    <div class="modal-student">${project.student}</div>
    <h2 class="modal-title" id="modalTitle">${project.title}</h2>

    <div class="modal-preview-wrapper">
      <img src="${previewSrc}" alt="${project.title} Preview" class="modal-preview-img" />
    </div>

    <div class="modal-details-grid">
      <div>
        <div class="modal-desc-heading">PROJECT DESCRIPTION</div>
        <p class="modal-desc-text">${project.description}</p>

        <div class="modal-desc-heading" style="margin-top:1.5rem;">TECHNOLOGY STACK</div>
        <div class="modal-tech-list">
          ${project.tags.map(t => `<span class="tech-tag">${t}</span>`).join("")}
        </div>
      </div>

      <div class="modal-actions">
        <a href="${project.live}" target="_blank" rel="noopener noreferrer" class="btn-modal-primary">
          <span>Open Live Website</span>
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
        <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn-modal-secondary">
          <i class="fa-brands fa-github"></i>
          <span>View GitHub Repository</span>
        </a>
      </div>
    </div>
  `;

  projectModal.classList.add("active");
  projectModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeProjectModal() {
  projectModal.classList.remove("active");
  projectModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

modalCloseBtn.addEventListener("click", closeProjectModal);
modalBackdrop.addEventListener("click", closeProjectModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && projectModal.classList.contains("active")) {
    closeProjectModal();
  }
});

// ===============================================
// MOBILE NAVIGATION OVERLAY CONTROLLER
// ===============================================
function toggleMobileMenu(open) {
  if (open) {
    mobileOverlay.classList.add("active");
    mobileOverlay.setAttribute("aria-hidden", "false");
    mobileMenuBtn.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  } else {
    mobileOverlay.classList.remove("active");
    mobileOverlay.setAttribute("aria-hidden", "true");
    mobileMenuBtn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }
}

mobileMenuBtn.addEventListener("click", () => {
  const isOpen = mobileOverlay.classList.contains("active");
  toggleMobileMenu(!isOpen);
});

mobileCloseBtn.addEventListener("click", () => toggleMobileMenu(false));
mobileBackdrop.addEventListener("click", () => toggleMobileMenu(false));

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => toggleMobileMenu(false));
});

// ===============================================
// INTERACTIVE CINEMATIC HERO PARTICLE CANVAS
// ===============================================
function initHeroCanvas() {
  const canvas = document.getElementById("heroCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const numParticles = Math.min(80, Math.floor(width / 18));

  let mouseX = width / 2;
  let mouseY = height / 2;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  for (let i = 0; i < numParticles; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 1,
      alpha: Math.random() * 0.5 + 0.2
    });
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    // Draw ambient glowing light following mouse
    const grad = ctx.createRadialGradient(mouseX, mouseY, 10, mouseX, mouseY, 350);
    grad.addColorStop(0, "rgba(255, 255, 255, 0.04)");
    grad.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    // Draw particle constellation connections
    for (let i = 0; i < particles.length; i++) {
      const p1 = particles[i];

      p1.x += p1.vx;
      p1.y += p1.vy;

      if (p1.x < 0 || p1.x > width) p1.vx *= -1;
      if (p1.y < 0 || p1.y > height) p1.vy *= -1;

      ctx.beginPath();
      ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${p1.alpha})`;
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(255, 255, 255, ${(1 - dist / 120) * 0.12})`;
          ctx.strokeWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }

  draw();
}

// ===============================================
// ANIMATED COUNTING NUMBERS FOR STATISTICS
// ===============================================
function initAnimatedCounters() {
  const statNumbers = document.querySelectorAll(".stat-number");

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = parseInt(entry.target.getAttribute("data-target"), 10);
          const isYear = entry.target.getAttribute("data-format") === "year";
          const duration = 2000;
          const startTimestamp = performance.now();

          function updateCounter(now) {
            const elapsed = now - startTimestamp;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out quad
            const currentVal = Math.floor(progress * (2 - progress) * target);
            entry.target.textContent = isYear ? Math.max(currentVal, 2026) : currentVal;

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              entry.target.textContent = target;
            }
          }

          requestAnimationFrame(updateCounter);
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  statNumbers.forEach((el) => observer.observe(el));
}

// ===============================================
// SCROLL REVEAL OBSERVER
// ===============================================
function initScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.15 }
  );

  revealElements.forEach((el) => observer.observe(el));
}

// ===============================================
// CUSTOM POINTER CURSOR PHYSICS
// ===============================================
function initCustomCursor() {
  if (!customCursor || !customCursorDot) return;

  let mouseX = -100;
  let mouseY = -100;
  let cursorX = -100;
  let cursorY = -100;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    customCursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  });

  function renderCursor() {
    cursorX += (mouseX - cursorX) * 0.15;
    cursorY += (mouseY - cursorY) * 0.15;
    customCursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
    requestAnimationFrame(renderCursor);
  }
  renderCursor();

  // Hover detection for interactive targets
  const interactiveSelector = "a, button, input, .project-card, .index-row, .filter-btn";
  document.addEventListener("mouseover", (e) => {
    if (e.target.closest(interactiveSelector)) {
      document.body.classList.add("hovering");
    }
  });

  document.addEventListener("mouseout", (e) => {
    if (e.target.closest(interactiveSelector)) {
      document.body.classList.remove("hovering");
    }
  });
}

// ===============================================
// INITIALIZATION ON DOM CONTENT LOADED
// ===============================================
document.addEventListener("DOMContentLoaded", () => {
  renderFeaturedProject();
  renderExhibitionGrid(projects);
  renderStudentIndexList(projects);
  initHeroCanvas();
  initAnimatedCounters();
  initScrollReveal();
  initCustomCursor();
});
