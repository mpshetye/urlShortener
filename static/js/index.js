const form = document.querySelector("form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const fullURL = form.fullURL.value;
  console.log(fullURL);
  let bodyData = { fullURL };
  try {
    const res = await fetch("/shorten", {
      method: "POST",
      body: JSON.stringify(bodyData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    console.log(data.errorMessage);
    if (data.errorMessage) {
      console.log(data.errorMessage);
    }
    if (data.msg) {
      location.assign("/");
    }
  } catch (err) {
    console.log(err);
  }
});
