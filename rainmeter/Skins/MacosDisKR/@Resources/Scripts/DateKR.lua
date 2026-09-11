function Initialize()
  weekdays = {"일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"}
end

function Update()
  local t = os.date('*t')
  return string.format('%d월 %d일 %s', t.month, t.day, weekdays[t.wday])
end
