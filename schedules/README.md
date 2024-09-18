# Resonate TypeScript SDK Schedule feature example

First make sure you have the Resonate Server running locally.
This is optional, though.
If you don't want to use the Resonate Server, change the following code in `index.ts` from:

```typescript
// Initialize a Resonate application.
const resonate = new Resonate({
  url: "http://localhost:8001",
});
```

to:

```typescript
// Initialize a Resonate application.
const resonate = new Resonate();
```

Install dependencies:

```
npm install
```

Run the example:

```
npm run dev
```
