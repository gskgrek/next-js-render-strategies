This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build result
<pre>
Route (app)                              Size     First Load JS
┌ ○ /                                    146 B          87.2 kB
├ ○ /_not-found                          871 B          87.9 kB
├ ƒ /api/auth/[...nextauth]              0 B                0 B
├ ○ /auth                                407 B          91.3 kB
├ ○ /auth/dashboard                      146 B          87.2 kB
├ ○ /isr                                 191 B            94 kB
├ ● /isr/[id]                            191 B            94 kB
├   ├ /isr/1
├   ├ /isr/2
├   ├ /isr/3
├   └ [+2 more paths]
├ ○ /pre-render                          146 B          87.2 kB
├ ○ /ssg                                 191 B            94 kB
├ ● /ssg/[id]                            191 B            94 kB
├   ├ /ssg/1
├   ├ /ssg/2
├   ├ /ssg/3
├   └ [+7 more paths]
├ ○ /ssr                                 191 B            94 kB
├ ƒ /ssr/[id]                            191 B            94 kB
├ ○ /stream                              191 B            94 kB
└ ƒ /stream/[id]                         191 B            94 kB
+ First Load JS shared by all            87.1 kB
  ├ chunks/23-e4901e44779ad62f.js        31.5 kB
  ├ chunks/fd9d1056-62aaf4b921c84028.js  53.6 kB
  └ other shared chunks (total)          1.92 kB


ƒ Middleware                             73.9 kB

○  (Static)   prerendered as static content
●  (SSG)      prerendered as static HTML (uses getStaticProps)
ƒ  (Dynamic)  server-rendered on demand
</pre>
