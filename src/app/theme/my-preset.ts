import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#EFF4FF',
      100: '#DCE7FF',
      200: '#BFD3FF',
      300: '#91B4FF',
      400: '#5F8FFF',
      500: '#155DFC',
      600: '#155DFC',
      700: '#1249D6',
      800: '#103DB0',
      900: '#0D328C',
      950: '#09235F'
    }
  }
});

export default MyPreset;
