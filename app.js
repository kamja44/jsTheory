const wrapper = document.querySelector(".wrapper");

const addWelcome = () => {
  // const div = document.createElement("div");
  // const h1 = document.createElement("h1");
  // h1.innerText = "Hello";
  // h1.className = "sexyTitle";
  // div.append(h1);
  // wrapper.append(div);

  // 위의 코드와 동일한 결과(html fragments)
  const div = `
  <div class="hello">
    <h1 class="title">Hello</h1>
  </div>
  `;
  wrapper.innerHTML = div;
};

setTimeout(addWelcome, 2000);
console.log(`

  Hi


`);
