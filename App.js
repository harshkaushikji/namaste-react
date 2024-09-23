/**
 * <div id="Parent ">
 *    <div id="child">
 *       <h1>i m h1 tag</h1>
 *       <h2>i m h1 tag</h2>
 *        </div>
 * </div>
 * 
 * 
 * 
 * 
 * 
 * */
// create nested structure in react application
const parent=React.createElement(
    "div",{id: "{parent"},
    React.createElement(
        "div",{id: "child"},
        [React.createElement("h1",{},"I am h1 tag"),
            React.createElement("h2",{},"I am h2 tag")
    ])
);

/*const heading=React.createElement("h1",{id: "headng"},"Hello World from react");
    const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading);  //render method to convert the object in h1 element and render on the root container*/
   
    const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);
