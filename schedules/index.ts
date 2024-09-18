// @@@SNIPSTART examples-ts-schedule-flow-function-example
import { Resonate, Context } from "@resonatehq/sdk";
import { register } from "module";

// flow is the top-level function that awaits on step1 and step 2
export async function flow(ctx: Context) {
  console.log("Starting the flow");
  // Call function 2
  await ctx.run(step1);
  // Call function 3
  await ctx.run(step2);
  return;
}
// step1 function
async function step1() {
  console.log("Executing step 1");
  // ...
  return;
}
// step2 function
async function step2() {
  console.log("Executing step 2");
  // ...
  return;
}

// Initialize a Resonate application.
const resonate = new Resonate({
  url: "http://localhost:8001",
});

// Schedule the execution of "flow" for every minute
// highlight-next-line
const sched = await resonate.schedule("flow-schedule", "* * * * *", flow);
console.log(sched);

// Start the Resonate application
resonate.start(5000);
console.log("Running");
// @@@SNIPEND
