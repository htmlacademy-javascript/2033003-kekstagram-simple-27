function creatingPictureElement(data,params) {
  const pictureContainerElement = document.querySelector (params.containerClass);
  const pictureTemplateElement = document.querySelector (params.templateId).content.querySelector (params.templateClass).cloneNode (true);
  const pictureFragment = document.createDocumentFragment ();

  data.forEach(({url, likes, comments}) => {
    const pictureCloneElement = pictureTemplateElement.cloneNode(true);

    pictureCloneElement.querySelector (params.urlClass).src = url;
    pictureCloneElement.querySelector (params.likesClass).textContent = likes;
    pictureCloneElement.querySelector (params.commentsClass).textContent = comments;

    pictureFragment.append (pictureCloneElement);
  });
  pictureContainerElement.append(pictureFragment);
}

export { creatingPictureElement };
