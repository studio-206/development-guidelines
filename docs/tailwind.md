---
title: Tailwind CSS
---

# Tailwind CSS

Tailwind is a powerful open source CSS framework that is preferred choice when styling websites and applications.

You can view the documentation for tailwind at [tailwindcss.com](https://tailwindcss.com)

## Extending Tailwind Config

When extending the tailwind config, follow a similar pattern that the default theme follows, for example:

```typescript
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      spacing: {
        "13": "3.25rem",
        "15": "3.75rem",
        "128": "32rem",
        "144": "36rem",
      },
    },
  },
};
```

::: tip NOTE

This will generate classes like `p-13`, `m-15`, and `h-128` in addition to all of Tailwind’s default spacing/sizing utilities.

:::
