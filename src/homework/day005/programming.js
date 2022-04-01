// 请计算出时钟的时针和分针的角度（两个角度的较小者，四舍五入）。时间以HH:mm的格式传入。

/*
  angle('12:00')
  // 0

  angle('23:30')
  // 165
 */

function angle(time) {
  let hours = Number(time.split(':')[0])
  let minutes = time.split(":")[1]

  hours = hours > 12 ? hours - 12 : hours;

  // NOTE: 计算时针的偏移角度
  let tempHourAngle = Number(hours) * 30 + (Number(minutes) / 60) * 30
  // NOTE: 计算分针的偏移角度
  let tempMinuteAngle = (Number(minutes) / 60) * 360;

  // NOTE: 计算偏移角度的差值
  let diff = Math.round(Math.abs(tempHourAngle - tempMinuteAngle))
  // 取小的角度
  return diff > 180 ? 360 - diff : diff
}
