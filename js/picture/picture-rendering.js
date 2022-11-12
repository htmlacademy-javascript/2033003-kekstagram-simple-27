function creatingPictureElement(data,params) {
  const pictureContainerElement = document.querySelector (params.containerClass);
  const pictureTemplateElement = document.querySelector (params.templateId).content.querySelector (params.templateClass).cloneNode (true);
  const pictureFragment = document.createDocumentFragment ();

  data.forEach(({url, likes, comments}) => {
    const pictureElementClone = pictureTemplateElement.cloneNode(true);

    pictureElementClone.querySelector (params.urlClass).src = url;
    pictureElementClone.querySelector (params.likesClass).textContent = likes;
    pictureElementClone.querySelector (params.commentsClass).textContent = comments;

    pictureFragment.append (pictureElementClone);
  });
  pictureContainerElement.append(pictureFragment);
}

export { creatingPictureElement };
