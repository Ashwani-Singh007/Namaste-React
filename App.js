const parent = React.createElement("div", {id: "parent"}, 
    [React.createElement("div", {id: "child1"}, [
        React.createElement("h1", {id: "heading1"}, "It's a heading tag 1"),
        React.createElement("h2", {id: "heading2"}, "It's a heading tag 2")
    ]),
    React.createElement("div", {id: "child2"}, [
        React.createElement("h1", {id: "heading1"}, "It's a heading tag 1"),
        React.createElement("h2", {id: "heading2"}, "It's a heading tag 2")
    ])]
);

console.log(parent); // create an object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);


