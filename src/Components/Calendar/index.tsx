import React from 'react';
import { Calendar as RNCalendar, LocaleConfig } from 'react-native-calendars';
import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons';

import { Container } from './styles';

type Props = {};

LocaleConfig.locales['pt-br'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ],
  monthNamesShort: [
    'JAN',
    'FEV',
    'MAR',
    'ABR',
    'MAI',
    'JUN',
    'JUL',
    'AGO',
    'SET',
    'OUT',
    'NOV',
    'DEZ',
  ],
  dayNames: [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ],
  dayNamesShort: ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'],
  today: 'Hoje',
};

LocaleConfig.defaultLocale = 'pt-br';

function Calendar({}: Props) {
  const theme = useTheme();
  return (
    <RNCalendar
      renderArrow={(direction) => (
        <Feather
          size={24}
          color={theme.Colors.TextPrimary}
          name={direction === 'left' ? 'chevron-left' : 'chevron-right'}
        />
      )}
      headerStyle={{
        backgroundColor: theme.Colors.BgSecondary,
        borderBottomWidth: 0.5,
        borderBottomColor: theme.Colors.TextSecondary,
        paddingBottom: 10,
        marginBottom: 10,
      }}
      theme={{
        textDayHeaderFontFamily: theme.Fonts.FontPrimary500,
        textDayFontFamily: theme.Fonts.FontPrimary400,
        textDayHeaderFontSize: 16,
        monthTextColor: theme.Colors.Header,
        textMonthFontFamily: theme.Fonts.FontSecondary500,
        textMonthFontSize: 20,
        arrowStyle: {
          marginHorizontal: -15,
        },
      }}
      firstDay={1}
      minDate={new Date()}
    />
  );
}

export { Calendar };
