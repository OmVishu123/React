function customRender(reactElement, mainContainer){
    // not so effective
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)
    // mainContainer.appendChild(domElement)


    //more effective
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children' ) continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    
    mainContainer.appendChild(domElement)
}

const reactElement = {
    type:'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click to visit google'
}

const reactElement2 = {
    type: 'table',
    props:{
        border:'2px solid black',
        padding: '5px',
        margin: '5px'
    },
    children: '<tr><td>1</td><td>2</td></tr><tr><td>3</td><td>4</td></tr>'
}
const mainContainer = document.getElementById("root")
// inject reactElement to mainContainer
customRender(reactElement, mainContainer)
customRender(reactElement2,mainContainer)
