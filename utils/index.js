export const reRender = async(component, domElement) => {
    if (component) {
        document.querySelector(domElement).innerHTML = await component.reRender();
        if (component.afterRender) component.afterRender();
    }
}