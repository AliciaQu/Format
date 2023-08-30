/* Main Left */

const main = document.querySelector("main");
const main_container = main.querySelector(".container")

const left = main_container.querySelector(".main-left")
const left_profile = left.querySelector(".profile")
export const left_profile_name = left_profile.querySelector("h2")
export const left_profile_at = left_profile.querySelector("p")
export const left_profile_img = left_profile.querySelector("img")

/* Main middle highline */
const middle = document.querySelector(".main-middle")
const middle_highline = middle.querySelector(".highline")
export const middle_highline_description = middle_highline.querySelectorAll(".description")
export const middle_highline_description_img = middle_highline.querySelectorAll(".description img")
export const middle_highline_description_p = middle_highline.querySelectorAll(".description p")


/* Main middle cards */

export const create_news = () => {
    const doms = {
        info: document.createElement('div'),
        info_profile:  document.createElement('div'),
        info_picture: document.createElement('div'),
        info_control: document.createElement('div'),
        info_comment:  document.createElement('div'),
    }
    doms.info.classList.add('info')
    doms.info_profile.classList.add('info-profile')
    doms.info_picture.classList.add('info-picture')
    doms.info_control.classList.add('info-control')
    doms.info_comment.classList.add('info-comment')

    doms.info.appendChild(doms.info_profile)
    doms.info.appendChild(doms.info_picture)
    doms.info.appendChild(doms.info_control)
    doms.info.appendChild(doms.info_comment)
    return doms 
}

export const create_picture_structure = (picture_dom, info) => {
    const picture = document.createElement('img')
    picture.setAttribute('width', '100%')
    picture_dom.appendChild(picture)
    picture.src = info.img_src

}