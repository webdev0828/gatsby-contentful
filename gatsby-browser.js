/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import jQuery from 'jquery'
import './src/styles/style.css'
import './src/styles/font.css'
import './src/styles/bootstrap.min.css'
import './src/styles/custom.css'

const addScript = url => {
    const script = document.createElement("script")
    script.src = url
    script.async = true
    document.body.appendChild(script)
}

export const onClientEntry = () => {
    window.onload = () => {
        addScript("https://use.fontawesome.com/a917165082.js")
        addScript("https://code.jquery.com/jquery-3.5.1.slim.min.js")
        addScript("https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js")
        addScript("https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js")
    }

    window.onscroll = () => {
        if (jQuery("#mainNav").length > 0) {
            console.log(jQuery("#mainNav"))
            if (jQuery("#mainNav").offset().top > 100) {
                jQuery("#mainNav").addClass("navbar-shrink");
            } else {
                jQuery("#mainNav").removeClass("navbar-shrink");
            }
        }
    }
}
