async function getUserData() {
  let response = await fetch('https://api.example.com/user');
  let data = await response.json();
  console.log(data);
}

getUserData();s



test('API check', async ({ page }) => {
  // Listener
  page.on('response', res => console.log("Got response:", res.url()));

  // Async + Promise
  await page.goto('https://example.com');
  const title = await page.title();
  console.log(title);
});