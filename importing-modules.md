# Importing Modules

When it comes to importing modules into your next and react applications, we like to keep things consistent.

> There are prettier configs and settings that can do this automatically, but try to follow this pattern if they don't do things correctly.

## Import Order

Ensure that `node_modules` are referenced directly at the top of file:

**Correct ✅**

```typescript
import { twMerge } from "tailwind-merge";
import Link from "next/link";

import Button from "@/components/Button";
import Card from "@/components/Card";
```

**Incorrect ❌**

```typescript
import { twMerge } from "tailwind-merge";

import Button from "@/components/Button";
import Link from "next/link"; // This should be at the top.
import Card from "@/components/Card";
```

## Grouping

Try and keep similar imports grouped together instead of them being scattered in different places.

**Correct ✅**

```typescript
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { ArticleType, AuthorType } from "@sanity/types";

import utilX from "src/utils/utilX";
import utilY from "src/utils/utilY";
import utilZ from "src/utils/utilZ";

import Button from "@/components/Button";
import Card from "@/components/Card";

import { getArticle } from "@/queries/getArticle";
```

**Incorrect ❌**

```typescript
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

// this is GROSS 🤮
import utilX from "src/utils/utilX";
import { getArticle } from "@/queries/getArticle";
import utilY from "src/utils/utilY";
import { ArticleType, AuthorType } from "@sanity/types";

import Button from "@/components/Button";
import utilZ from "src/utils/utilZ";
import Card from "@/components/Card";
```

## Alphabetical Sorting Tip in VS Code.

If you are using `vscode` you can use their sort tool to sort a selection

1. Highlight your selection
   ![Select the lines](/import-modules-sort-1.png)

2. Hit `cmd + shift + p` to bring up the VS Code Command Palette, and begin typing `sort`, select `> sort lines ascending` and hit enter.
   ![sort lines](/import-modules-sort-2.png)

3. Your lines are now correctly sorted (Note: curly brackets `{ var }` **DO** come first.)
   ```typescript
   import { useEffect } from "react";
   import { usePathname } from "next/navigation";
   import Link from "next/link";
   ```
