import axios from "axios";

const removeCommentBtn = document.querySelectorAll(".video__comments-remove");
const commentNumber = document.getElementById("jsCommentNumber");

const removeComment = async id => {
  await axios({
    url: `/api/${id}/removeComment`,
    method: "POST",
    data: {
      id
    }
  });
};

const handleClick = e => {
  e.path[1].remove();
  commentNumber.innerHTML = commentNumber.innerHTML * 1 - 1;
  removeComment(e.path[0].getAttribute("data"));
};

function init() {
  removeCommentBtn.forEach(item => {
    item.addEventListener("click", handleClick);
  });
}

if (removeCommentBtn) {
  init();
}
