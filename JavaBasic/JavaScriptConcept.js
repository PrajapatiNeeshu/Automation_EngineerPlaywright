
/*
🎯 Interview me bolne ka structured answer
1️⃣ Closure is a function bundled with its lexical scope
2️⃣ It allows data hiding
3️⃣ Used in function factories
4️⃣ Used in POM & helper utilities
Function + its outer variable memory = Closure
*/
/*
💥 Real execution memory concept
JS outer function ka Lexical Environment store karta hai
aur inner function ke saath attach kar deta hai.
Isliye variable destroy nahi hota.
*/
/*
console.log("Start");
setTimeout(() => {
  console.log("Timer");
}, 2000);
console.log("End");
*/
/*
📊 setTimeout vs setInterval
Feature	setTimeout	setInterval
Run	once	repeatedly
Use case	delay	polling / repeat
Stop	clearTimeout	clearInterval
*/

/*
1️⃣ Call Stack  → jaha code execute hota hai
2️⃣ Web API     → timer / setTimeout yaha jata hai
3️⃣ Callback Queue → setTimeout ka function wait karta hai
4️⃣ Microtask Queue → Promise callbacks
5️⃣ Event Loop  → sabko manage karta hai
*/

console.log("Start");
setTimeout(() => {
  console.log("Timer");
}, 2000);
console.log("End");
/*

Execution story
Step 1 → Call stack
Start print

Step 2 → setTimeout mila

Timer JS nahi chalata
👉 Web API ko de diya

⏳ 2 sec wait (Web API)

Step 3 → Next line
End print

Step 4 → 2 sec baad

Callback queue me:

console.log("Timer")

Step 5 → Event loop check

Call stack empty? ✅
To queue ka function push

Timer print

🎯 Final output
Start
End
Timer

*/
//🔥 Promise vs setTimeout

console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");


/*

Execution story
Step 1 → Call stack
Start print

Step 2 → setTimeout mila

Timer JS nahi chalata
👉 Web API ko de diya

⏳ 0 sec wait (Web API)

Step 3 → Promise.resolve() mila

Promise JS nahi chalata
👉 Microtask queue me daal diya

Step 4 → Next line
End print

Step 5 → Event loop check

Call stack empty? ✅
To microtask queue se function push

Promise print

Step 6 → Event loop check again

Call stack empty? ✅
To callback queue se function push

Timeout print

🎯 Final output
Start
End
Promise
Timeout
📊 Microtask vs Macrotask
Queue	Kaun aata hai
Microtask	Promise, queueMicrotask
Macrotask	setTimeout, setInterval
*/


const arr21 = [10, 20, 30, 40];

const result = arr21.slice(1, 3);

console.log(result); // [20, 30]
console.log(arr21);    // [10, 20, 30, 40] ✅ unchanged
const locators = await page.locator('.item').all();
const firstTwo = locators.slice(0, 2);
arr.splice(start, deleteCount, newItems)
const arr12 = [10, 20, 30, 40];
arr12.splice(1, 2);
console.log(arr);
// [10, 40]
const arr = [10, 20, 30, 40];
arr.splice(1, 2);
console.log(arr);
// [10, 40]
//slice → copy
//splice → change original
const name = "Neeraj QA";
const result1 = name.split(" ");

console.log(result);
// ["Neeraj", "QA"]

//🎯 Interview ready answer

/*Event delegation is attaching a single event listener to a parent element to handle events on its child elements using event bubbling.
In test automation it helps to handle dynamic DOM, improve performance and use stable parent locators.

*/


/*

🧠 Flaky element kya hota hai?

Flaky = kabhi pass ✅ kabhi fail ❌

🎯 Reason:

element late load hota hai

DOM re-render (React / Angular)
animation
API slow
stale locator
multiple matching elements
❌ Galat approach (jo flakiness create karta hai)
await page.click('#login');
Agar element ready nahi hai → fail ❌
✅ Playwright ka golden rule
Playwright auto-wait already karta hai 😎
Isliye hard wait use nahi karna
❌
await page.waitForTimeout(5000);
🔥 1️⃣ Use proper locators (MOST IMPORTANT)
await page.getByRole('button', { name: 'Login' }).click();



✔ stable
✔ visible text based
✔ dynamic DOM safe

🔥 2️⃣ Auto-waiting use karo (default feature)
Playwright wait karta hai until:

✔ visible
✔ enabled
✔ stable
✔ attached

So simply:

await page.locator('#login').click();


enough hota hai.

🔥 3️⃣ Explicit wait for state (jab zaroori ho)
Element visible hone ka wait
await expect(page.locator('#login')).toBeVisible();
Network ke baad element
await page.waitForLoadState('networkidle');
🔥 4️⃣ Re-rendered element handle
React me DOM change hota hai.
❌ store locator in variable and reuse after navigation
✔ Always fresh locator
await page.locator('#login').click();
🔥 5️⃣ Multiple element issue
await page.locator('.item').first().click();
or
await page.locator('.item').nth(2).click();
🔥 6️⃣ Retry mechanism (assertion level)
await expect(page.locator('#status')).toHaveText('Success');
Ye automatically retry karta hai until timeout 😎
🔥 7️⃣ API sync ke saath wait
await Promise.all([
  page.waitForResponse(resp => resp.url().includes('/login') && resp.status() === 200),
  page.click('#login')
]);
✔ perfect sync
✔ no flaky
🔥 8️⃣ Animation issue
await page.locator('#btn').click({ trial: true });
or
await page.waitForTimeout(300); // only if unavoidable
🔥 9️⃣ Force click (last option)
await page.locator('#btn').click({ force: true });
⚠ use only when overlay issue.
🔥 🔟 Stable locator strategy (Event delegation concept use 😎)
Dynamic list:
await page.locator('#menu').getByText('Item 1').click();
Parent stable → child dynamic.
🧪 Real flaky → stable example
❌ Flaky
await page.click('.submit');
✅ Stable
const submitBtn = page.getByRole('button', { name: 'Submit' });
await expect(submitBtn).toBeEnabled();
await submitBtn.click();
🎯 Interview me bolne ka structured answer
To handle flaky elements in Playwright:
Use stable locators
Use auto-waiting
Avoid hard waits
Wait for network/API response
Use assertion retries
Handle re-rendered elements
Use proper element state checks
⭐ Real framework best practice
Reusable function:
async function safeClick(locator) {
  await expect(locator).toBeVisible();
  await expect(locator).toBeEnabled();
  await locator.click();
}
🚀 Next level (bol de to bana du)
Main tujhe:
✅ React / Angular specific flaky handling
✅ Loader / spinner handling utility
✅ Generic waitForApiAndClick helper
✅ POM based stable action wrapper
🎯 Interview me bolne ka structured answer
To handle flaky elements in Playwright:
Use stable locators
Use auto-waiting
Avoid hard waits
Wait for network/API response
Use assertion retries
Handle re-rendered elements
Use proper element state checks
*/

/*
const items = await page.locator('.item').all();

for (let i = 0; i < items.length; i++) {
  console.log(await items[i].textContent());
}
*/
/*


const links = await page.locator('a').all();

for (const link of links) {
  console.log(await link.getAttribute('href'));
}

🧠 3️⃣ for...in loop
👉 Object keys deta hai
const user = {
  name: "Neeraj",
  age: 25
};

for (const key in user) {
  console.log(key);
}
*/
const user = {
  name: "Neeraj",
  age: 25
};

for (const key in user) {
  console.log(key);
}
/*
📊 1 LOOK DIFFERENCE TABLE
Loop	Kis par use	Kya deta hai	Best use case
for	array	index control	custom logic
for...of	iterable	values	locator list
for...in	object	keys	JSON validation */


/*


✅ 1. Locator list iteration
for (const item of await page.locator('.product').all()) {
  console.log(await item.textContent());
}
*/


for (const key in responseBody) {
  console.log(key, responseBody[key]);
}


/*
✅ 2. JSON response validation
for (const key in responseBody) {
  console.log(key, responseBody[key]);
}

🚀 Best practice in automation
Arrays / locators → use for...of ✅
Objects / JSON → use for...in ✅
Index logic → use for ✅
*/

const rows = await page.locator('table tr').all();

for (const row of rows) {
  const cols = await row.locator('td').all();

  for (const col of cols) {
    console.log(await col.textContent());
  }
}
//unique item filter used 


const unique = [...new Set(arr)];

console.log(unique);



const unique1 = arr.filter((item, index) => {
  return arr.indexOf(item) === index;
});

console.log(unique1);


const unique2 = arr.reduce((acc, curr) => {

  if (!acc.includes(curr)) {
    acc.push(curr);
  }

  return acc;

}, []);

console.log(unique2);

const unique21 = [];
let arr212 = [10, 20, 30, 20, 40, 10];
arr212.forEach(item => {
  if (!unique21.includes(item)) {
    unique21.push(item);
  }
});


console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");
/*


Step by step
Call stack
Start
End

Microtask queue
Promise

Macrotask queue
Timeout

Final Output
Start
End
Promise
Timeout

🎯 Rule
Sync → Microtask → Macrotask

🔥 Tera interview question
Promise.resolve().then(() => console.log(1));
console.log(2);

Output
2
1


Kyun?
console.log(2) → sync
Promise → microtask → baad me
🧠 Browser Event Loop (simplified)
1. Execute sync code
2. Run all microtasks
3. Render UI
4. Run one macrotask
5. Repeat
🧠 Node.js Event Loop Phases (INTERVIEW GOLD 🔥)
Order:
1️⃣ Timers
2️⃣ Pending callbacks
3️⃣ Idle / prepare
4️⃣ Poll
5️⃣ Check
6️⃣ Close callbacks
📌 1. Timers phase
setTimeout / setInterval run
📌 2. Pending callbacks
I/O related callbacks
📌 3. Poll phase
new I/O events
most time yaha spend hota
📌 4. Check phase
setImmediate run hota
📌 5. Close callbacks
socket close etc.
😵 Starvation kya hota hai?
Jab microtasks continuously add hote rahe:
function loop() {
  Promise.resolve().then(loop);
}
loop();
Macrotask kabhi run hi nahi karega 😬
➡ UI freeze
➡ timers delay
⚠ Long task problem
Agar sync code heavy:
while(true){}
Event loop block ❌
➡ No click
➡ No timeout
➡ No API response
🤖 Playwright me relation
Playwright async kyun hai?
await page.click()
Ye:
Promise return karta
Event loop handle karta
Non-blocking test execution
API wait example
await Promise.all([
  page.waitForResponse(res => res.url().includes('/api')),
  page.click('#btn')
]);

➡ event loop sync maintain karta
🎯 Real life analogy 😄
Restaurant:
👨‍🍳 = Call stack
📋 = Queues
🧑‍💼 = Event loop
VIP orders → microtask
Normal orders → macrotask
📊 One look priority chart
1️⃣ Sync
2️⃣ Microtask (Promises)
3️⃣ Macrotask (setTimeout)
🧠 Interview ke direct answers
❓ Phases of event loop (Node)
Timers → Pending → Idle → Poll → Check → Close
❓ Why Promise runs before setTimeout?
Because microtask queue has higher priority.
❓ Starvation?
Continuous microtasks block macrotasks & rendering.
⭐ Ek line me pura system
JS runs sync code → then microtasks → then one macrotask → repeat
*/



