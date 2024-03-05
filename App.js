let ele = React.createElement(
    "h1",
    {id:"heading"},
    "Hello World from React js"
);

let ele2 = React.createElement("div",{},React.createElement("div",{},React.createElement("h1",{},"Nested Structure")));

let ele3 = React.createElement("div",{},React.createElement("div",{},[React.createElement("h1",{},"Nested Structure"),React.createElement("h2",{},"Nested Structure 2 ")]));
let rootele = ReactDOM.createRoot(document.getElementById('root'));

rootele.render(ele3);
console.log(ele3)
