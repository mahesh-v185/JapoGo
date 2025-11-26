// lib/fontawesome.ts
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

// Prevent Font Awesome from dynamically adding CSS (needed for SSR)
config.autoAddCss = false;

// Manually add only the icons you use (tree-shaking ready)
library.add(faXTwitter);
