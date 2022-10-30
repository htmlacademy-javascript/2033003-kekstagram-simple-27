import {createDataPhotos} from'./picture/picture-data.js';
import {creatingPictureElement} from'./picture/picture-rendering.js';
import {pictureParameters} from'./picture/picture-parameters.js';

import {createPictureFormEventHandlers} from'./picture_form/picture-form-events.js';
import {pictureformParameters} from'./picture_form/picture-form-parameters.js';

import {pictureSettingsParameters} from './picture/picture-settings-parameters.js';
import {createPictureSettings} from './picture/picture-settings.js';

creatingPictureElement(createDataPhotos(),pictureParameters);
createPictureFormEventHandlers(pictureformParameters);
createPictureSettings(pictureSettingsParameters);
