const heading = React.createElement("h1", {id:"heading"}, "Hello World from ReactJS!")

const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Jai Swaminarayan World!"),
    React.createElement("h2", {}, "Just a test h2 tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Jai Swaminarayan World!"),
    React.createElement("h2", {}, "Just a test h2 tag"),
  ]),
]);

root.render(parent)

console.log(parent);