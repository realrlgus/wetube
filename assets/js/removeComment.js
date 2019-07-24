import axios from "axios";

const removeCommentBtn = document.querySelectorAll(".video__comments-remove");
const commentNumber = document.getElementById("jsCommentNumber");

const removeList = li => {
  li.remove();
  commentNumber.innerHTML = commentNumber.innerHTML * 1 - 1;
};

const removeComment = async (id, list) => {
  const response = await axios({
    url: `/api/${id}/removeComment`,
    method: "POST",
    data: {
      id
    }
  });
  if (response.status === 200) {
    removeList(list);
  }
};

const handleClick = e => {
  removeComment(e.path[0].getAttribute("data"), e.path[1]);
};

function init() {
  removeCommentBtn.forEach(item => {
    item.addEventListener("click", handleClick);
  });
}

if (removeCommentBtn) {
  init();
}
