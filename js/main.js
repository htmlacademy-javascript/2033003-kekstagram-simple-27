import {createDataPhotos} from'./picture/picture-data.js';
import {creatingPictureElement} from'./picture/picture-rendering.js';
import {pictureParameters} from'./picture/picture-parameters.js';

import {createPictureFormEventHandlers} from'./picture_form/picture-form-events.js';
import {pictureformParameters} from'./picture_form/picture-form-parameters.js';


creatingPictureElement(createDataPhotos(),pictureParameters);
createPictureFormEventHandlers(pictureformParameters);
