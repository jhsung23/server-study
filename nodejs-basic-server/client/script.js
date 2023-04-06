const postContents = document.getElementById('post-contents');
const postButton = document.getElementById('post-button');
const postResult = document.getElementById('post-result');

function postHandler() {
  fetch('http://localhost:4999', {
    method: 'POST',
    body: JSON.stringify(postContents.value),
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => updateDOM(data));
}

function updateDOM(res) {
  postResult.textContent = `다음 내용이 등록됨 : ${res}`;
  postContents.value = '';
}

postButton.addEventListener('click', postHandler);
