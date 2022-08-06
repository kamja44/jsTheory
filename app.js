const styled = (aElement) => {
  const el = document.createElement(aElement);
  return (args) => {
    const styles = args[0];
    el.style = styles;
    return el;
  };
};

// styled 함수를 호출하자마자 styled 함수를 한번 더 호출
const title = styled("h1")`
  background-color: red;
  color: blue;
`;

const subtitle = styled("span")`
  color: green;
`;

title.innerText = `We just Cloned`;
subtitle.innerText = `Styled Components`;

document.body.append(title, subtitle);

console.log(title);
