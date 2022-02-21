import Footer from "../components/footer"
import Header from "../components/header"

const New = {
    render() {
        return /*html*/ `
        <div id="header"  class="sticky top-0 w-full z-10 ">
        ${ Header.render()}   
        </div>
        <h2> HELO</h2>
        ${Footer.render()}
        `
    },
    afterRender() {
        Header.afterRender()
    }
}
export default New;