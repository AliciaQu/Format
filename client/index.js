import "./index.css";

import { highline, profile, cards } from "@/js/database";

import {
  left_profile_name,
  left_profile_at,
  left_profile_img,
  middle_highline_description,
  middle_highline_description_img,
  middle_highline_description_p,
  create_news,
  create_picture_structure,
  create_profile_structure,
  create_control_structure,
  create_comment_structure
} from "@/js/common.js";

//main left

left_profile_name.textContent = profile.name;
left_profile_at.textContent = profile.at;
left_profile_img.src = profile.img_src;

//main middle

middle_highline_description_p.forEach((ele, i) => {
  ele.textContent = highline.description[i];
});

// background image
middle_highline_description.forEach((ele, i) => {
  ele.style.backgroundImage = `url("./images/highline/highline_${i + 1}.jpeg")`;
});
//profile
middle_highline_description_img.forEach((ele, i) => {
  ele.src = `./images/profile/profile_${i + 1}.png`;
});

//middle form
const middle = document.querySelector(".main-middle")
const middle_form = middle.querySelector("form");
const middle_form_input_text = middle_form.querySelector("#create-post");
//name
middle_form_input_text.placeholder = `What's on your mind, ${profile.name}`;

//Cards

const cardsDom = document.querySelector(".card")

cards.forEach((element) => {
 const doms = create_news();
 cardsDom.appendChild(doms.info)
 create_picture_structure(doms.info_picture, element.picture)
 create_profile_structure(doms.info_profile, element.profile)
 create_control_structure(doms.info_control, element.control);
 create_comment_structure(doms.info_comment, element.comment);
})