# Resonate TypeScript SDK Schedule feature example

This example showcases a Resonate Application Node that runs a "flow" function every minute.

To run the example, first make sure you have the [Resonate Server running locally](https://docs.resonatehq.io/get-started/server-installation).

Running the Resonate Server is optional, though, and only required if you want to test crashing the Application Node.

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

Next, install dependencies:

```shell
npm install
```

Run the example:

```shell
npm run dev
```
