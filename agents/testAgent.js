// agents/testAgent.js
import appContext from "../context/appContext.json" assert { type: "json" };
import { llm } from "../llm/llmClient.js";

export async function decideNextStep(state) {
  const prompt = `
You are a QA automation agent.

Current state:
${JSON.stringify(state, null, 2)}

Application context:
${JSON.stringify(appContext, null, 2)}

Decide the next testing action.
Respond ONLY in JSON.

Example:
{
  "action": "click",
  "selector": "text=Checkout"
}
`;

  const response = await llm.invoke(prompt);
  return JSON.parse(response.content);
}
