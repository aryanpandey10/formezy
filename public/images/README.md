# /public/images

Static image assets for the Formezy marketing site.

## Folder structure

```
public/images/
│
├── blog/               Blog post featured images (16:9 ratio recommended, 1200×675px)
│   ├── healthcare-operations-reducing-errors.jpg
│   ├── eaps-reduce-resource-wastage.jpg
│   └── ...             One file per slug from lib/blog-data.ts
│
├── videos/             Video thumbnail / poster images (16:9, 1280×720px)
│   ├── add-number-field.jpg
│   ├── add-date-box.jpg
│   └── ...
│
├── integrations/       Integration partner logos (square, transparent PNG, 128×128px)
│   ├── google-sheets.png
│   ├── oracle.png
│   ├── sap.png
│   └── ...
│
├── team/               Team / about page portraits (square, 400×400px)
│   └── ...
│
└── og/                 Open Graph / social share images (1200×630px)
    ├── default.jpg
    ├── blog.jpg
    └── ...
```

## Usage in code

```tsx
// next/image — always prefer this over plain <img>
import Image from "next/image";

<Image
  src="/images/blog/healthcare-operations-reducing-errors.jpg"
  alt="Healthcare operations article"
  width={1200}
  height={675}
/>
```

## Swap Unsplash placeholders → real photos

In `lib/blog-data.ts` every blog post has an `image` field pointing to an Unsplash
URL. To use a local file instead:

1. Drop the image into `public/images/blog/` with the same filename as the slug.
2. Update the `image` field in `lib/blog-data.ts`:
   ```ts
   image: "/images/blog/healthcare-operations-reducing-errors.jpg",
   ```

No code changes are needed anywhere else.
