const joinButton = document.querySelector('#join-button');
const profileImageButton = document.querySelector('#profile-image-button');
const images = document.querySelectorAll('.row img');

function selectAvatarImage(selectedImage){
    images.forEach((image) => {
       if(image != selectedImage){
           image.setAttribute('class', 'avatarImg');
       } else {
           image.setAttribute('class', 'selectedImage');
       }
    })
}

function setDataValue(selectedImage){
  if(!selectedImage.getAttribute('data-value')) {
      removeItem(selectedImage);
      let imgName = selectedImage.getAttribute('src').split('/').pop().split('.')[0];
      selectedImage.setAttribute('data-value', imgName);
      console.log('set attribute:', selectedImage.getAttribute('data-value'));
  }
}

function removeItem(selectedImage){
  images.forEach((image, i) => {
     if(images[i] != selectedImage){
       image.removeAttribute('data-value');
     }
  })
}

function getSelectedAvatar() {
  images.forEach((image, i) => {
    if(image.getAttribute('data-value')){
       saveAvatar(image.getAttribute('src'))
    }
  })
}

function saveProfile(data){
    localStorage.setItem('user-session', JSON.stringify(data));
}

function saveAvatar(image){
  if(localStorage.getItem('user-session')){
      var userProfile = JSON.parse(localStorage.getItem('user-session'));
      userProfile['avatar'] = image;
      localStorage.setItem('user-session', JSON.stringify(userProfile));
  }
}

images.forEach((image, i) => {
  image.addEventListener('click', (e) => {
     selectAvatarImage(e.currentTarget);
     setDataValue(e.currentTarget);
  })
})


if(joinButton != null) {
    joinButton.addEventListener('click', (e) => {
      let data = {
        handle: document.querySelector('#handle').value,
        country: document.querySelector('#country').value,
        language: document.querySelector('#language').value
      }
      saveProfile(data);
    });
}

if(profileImageButton != null) {
    profileImageButton.addEventListener('click', (e) => {
        getSelectedAvatar();
    });
}
