import { Plugin } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";

import { faEnvelope} from "@fortawesome/free-regular-svg-icons";
import {
  faMobileScreen,
  faMobileAndroid,
  faMagnifyingGlass
  
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export const fontAwesomePlugin: Plugin = {
  install(app, options) {
    library.add(
      faEnvelope,
      faMobileScreen,
      faMobileAndroid,
      faMagnifyingGlass
    );
    app.component("font-awesome-icon", FontAwesomeIcon);
  },
};
