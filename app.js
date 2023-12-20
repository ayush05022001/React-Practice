const parent=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"}),[React.createElement("h1",{},"Heading"),React.createElement("h2",{},"Heading")]);



const heading=React.createElement("h1" ,{id:"heading"},"Hello world!");

    const root=ReactDOM.createRoot(document.getElementById("root"));

    root.render(heading);
    root.render(parent);