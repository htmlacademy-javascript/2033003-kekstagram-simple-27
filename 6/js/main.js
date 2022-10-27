import {createDataPhotos} from'./photo-data.js';
import {creatingPhotoElement} from'./photo-rendering.js';
import {pictureParameters} from'./picture-parameters.js';
import {createEventHandlers} from'./picture-form-events.js';
import {pictureformParameters} from'./picture-form-parameters.js';
import {addValidator} from'./validator.js';

creatingPhotoElement(createDataPhotos(),pictureParameters);
createEventHandlers(pictureformParameters);
addValidator(pictureformParameters);
