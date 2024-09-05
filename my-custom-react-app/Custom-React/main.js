const root = document.getElementById("root");

const element = {
    type:"a",
    props:{
        title:"heading",
        target:"_blank",
        href:"https://www.google.com"
        
    },
    children:"visit google"
}

customRender=(ele,container)=>{
const customElement = document.createElement(ele.type);

for (const prop in ele.props) {
    if(prop=="children") continue;
    customElement.setAttribute(prop,ele.props[prop])
    }
customElement.innerHTML = ele.children;
container.appendChild(customElement)
}

customRender(element,root)