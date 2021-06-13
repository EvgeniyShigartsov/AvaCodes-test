import React, { FC } from 'react'
import { Col, Slider } from 'antd'
// import { useTypedSelector } from '../../../../hooks/useTypedSelector'
// import { yearsRangeSelector } from '../../../../store/characters/selectors'

export const YearsSlider: FC = () => {
  // const range = useTypedSelector(yearsRangeSelector)

  // Тут что-то пошло не так. После обновления переменной range, ререндер просиходил, но defaultValue - оставалось прежним,
  // Хотя значения туда уже попадали новые, дебажил достаточно долго, возможно фича самой библиотеки.
  // Решил пока вручную поствить те значения которые высчитывались, и двигаться дальше.

  const onAfterChange = (...rest: any) => null

  return (
    <Col span={6} push={1}>
      <Slider
        min={-896}
        max={29}
        onAfterChange={onAfterChange}
        defaultValue={[-896, 29]}
        range
        className="slider"
      />
      {/* <Slider
        range
        min={range.BBYmin}
        max={range.ABYmax}
        onAfterChange={onAfterChange}
        defaultValue={[range.BBYmin, range.ABYmax]}
        className="slider"
      /> */}
    </Col>
  )
}
