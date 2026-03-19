# Required Assets for Your Portfolio

To make your portfolio look professional, you should add these images to your `/public/` folder.

## 1. Profile & Identity
- `favicon.ico`: The small icon that appears in the browser tab (16x16 or 32x32).
- `profile.jpg`: Your main profile picture used on the Home and Contact pages.
- `logo.png`: (Optional) If you want a custom logo instead of text.

## 2. Section Illustrations
If you want to replace the current placeholder illustrations, add these:
- `experience.svg`: Illustration for the Experience page.
- `projects_image.svg`: Illustration for the Projects page.
- `blogs_image.svg`: Illustration for the Articles/Blogs page.
- `address_image.svg`: Illustration for the Contact/Address section.

## 3. Project Screenshots
For each project in `src/portfolio.ts`, you should add a high-quality screenshot:
- `contrails-project.jpg`
- `commonlit-project.jpg`
- (And any others you add)

## 4. Organization Logos
To make your Experience and Education sections look better, add logos for:
- `siemens-logo.png`
- `fau-logo.png`
- `fraunhofer-logo.png`
- `deepvertise-logo.png`
- `core9-logo.png`

---

### How to use them:
1. Place the files in the `/public/` folder.
2. Update the paths in `src/portfolio.ts`. For example:
   `logo_path: "/siemens-logo.png"`
