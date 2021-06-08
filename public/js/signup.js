async function signupFormHandler(event) {
  event.preventDefault();

  console.log("Signup Started")
  const username = document.querySelector("#name-signup")
      .value.trim();
      const email = document.querySelector("#email-signup")
      .value.trim();
  const password = document.querySelector("#password-signup")
      .value.trim();
console.log("signup")
  if (username && password) {
      const response = await fetch("/api/users", {
          method: "post",
          body: JSON.stringify({
              username,
              password,
              email
          }),
          headers: {
              "Content-Type": "application/json"
          },
      });
      if (response.ok) {
          console.log("success");
          document.location.replace("/");
      }
      else {
          alert(response.statusText);
      }
  }
}

document.querySelector("#signup-form")
  .addEventListener("submit", signupFormHandler);