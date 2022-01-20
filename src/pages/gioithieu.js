import Footer from "../components/footer"
import Header from "../components/header"

const New = {
    render() {
        return /*html*/ `
        ${Header.render()}
        <h2> HELO</h2>
        ${Footer.render()}
        `
    }
}
export default New;