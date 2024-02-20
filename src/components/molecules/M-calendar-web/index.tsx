import { DateCalendar, DateCalendarProps } from '@mui/x-date-pickers'
import { Dayjs } from 'dayjs'
import { useTheme } from 'tamagui'

interface ExtendedDateCalendarProps extends DateCalendarProps<Dayjs> {}

const M_calendar_web: React.FC<ExtendedDateCalendarProps> = ({ ...rest }) => {
  const theme = useTheme()
  const primaryColor = theme.color.val
  const secondaryColor = theme.color1.val

  return (
    <>
      <DateCalendar
        dayOfWeekFormatter={(_day, weekday) => `${weekday.format('dd')}.`}
        disablePast
        showDaysOutsideCurrentMonth
        {...rest}
        slotProps={{
          day: { sx: { color: primaryColor } },

          calendarHeader: { sx: { color: primaryColor } },
        }}
        sx={{
          svg: { color: primaryColor },
          '.MuiPickersYear-yearButton.Mui-disabled': { color: secondaryColor },
          '& .MuiTypography-caption': { color: primaryColor },
          '& .MuiPickersDay-root.Mui-disabled:not(.Mui-selected)': { color: secondaryColor },
        }}
      />
    </>
  )
}
export { M_calendar_web }
