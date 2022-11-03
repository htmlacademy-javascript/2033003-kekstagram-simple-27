import {createDataPhotos} from'./picture/picture-data.js';
import {creatingPictureElement} from'./picture/picture-rendering.js';
import {pictureParameters} from'./picture/picture-parameters.js';

import './picture_form/picture-form.js';
import './picture/picture-scale.js';
import './picture/picture-effect.js';

creatingPictureElement(createDataPhotos(),pictureParameters);
