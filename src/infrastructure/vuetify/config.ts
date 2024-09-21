import { createVuetify } from 'vuetify';
import 'vuetify/styles'
import { aliases, mdi } from 'vuetify/iconsets/mdi';

import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

export const vuetifyConfig = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi },
  },
});
