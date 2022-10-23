function creatingPhotoElement(data,params) {
  const pictureContainer = document.querySelector (params.containerClass);
  const pictureTemplate = document.querySelector (params.templateId).content.querySelector (params.templateClass).cloneNode (true);
  const pictureFragment = document.createDocumentFragment ();

  data.forEach(({url, likes, comments}) => {
    const pictureElement = pictureTemplate.cloneNode(true);

    pictureElement.querySelector (params.urlClass).url = url;
    pictureElement.querySelector (params.likesClass).textContent = likes;
    pictureElement.querySelector (params.commentsClass).textContent = comments;
    pictureFragment.append (pictureElement);
  });
  pictureContainer.append(pictureFragment);
}

export { creatingPhotoElement };
