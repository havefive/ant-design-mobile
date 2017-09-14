---
category: Components
type: Data Entry
title: Calendar
---

Used to select a date range.

### Rules
- 

## API

Support WEB.

Properties | Descrition | Type | Default | Required
-----------|------------|------|--------|--------
enterDirection|enter direction |'horizontal' \| 'vertical'| vertical|false
locale|locale|Models.Locale||false
onCancel|on cancel|() => void||false
onConfirm|on confirm|(startDateTime?: Date, endDateTime?: Date) => void||false
pickTime|pick time|boolean| false|false
prefixCls|(web only) prefix class|string| rmc-calendar|false
renderShortcut|replace shortcut. need showShortcut: true|(select: (startDate?: Date, endDate?: Date) => void) => React.ReactNode||false
renderHeader|replace header|() => React.ReactNode||false
showShortcut|show shortcut|boolean| false|false
title|header title|string| {locale.title}|false
type|select type. one: one-day range: date range|'one' \| 'range'| range|false
visible|visiable|boolean| false|false
defaultDate|the default date for show|Date| today|false
getDateExtra|extra info|(date: Date) => Models.ExtraData||false
infinite|infinite scroll|boolean| true|false
infiniteOpt|infinite scroll optimize|boolean| false|false
initalMonths|inital months|number| 6|false
maxDate|max date|Date||false
minDate|min date|Date||false
onSelectHasDisableDate|on select has disable date|(date: Date[]) => void||false
rowSize|row size|'normal' \| 'xl'||false
defaultTimeValue|default time of timePicker|Date||false