import { extendTheme } from '@chakra-ui/react';
import { cores } from './cores';

const toastTextOptions = {
  fontFamily: 'Nunito',
  textVerticalAlign: 'center',
  fontSize: 14,
};

export const customTheme = extendTheme({
  components: {
    Alert: {
      variants: {
        sucesso: P => {
          return {
            container: {
              ...P.theme.components.Alert.variants.solid(P).container,
              ...toastTextOptions,
              backgroundColor: cores.juneBud,
              color: cores.skobeloff,
              fontWeight: 'semibold',
            },
            icon: { color: cores.skobeloff },
          };
        },
        erro: P => {
          return {
            container: {
              ...P.theme.components.Alert.variants.solid(P).container,
              ...toastTextOptions,
              backgroundColor: cores.outrageousOrange,
              color: 'white',
              fontWeight: 'medium',
            },
            icon: { color: 'white' },
          };
        },
      },
    },
  },
});
