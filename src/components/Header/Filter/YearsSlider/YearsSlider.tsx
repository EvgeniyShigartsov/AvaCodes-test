import React, { FC } from 'react'
import { Col, Slider } from 'antd'
import { useActions } from '../../../../hooks/useActions'
// import { useTypedSelector } from '../../../../hooks/useTypedSelector'
// import { yearsRangeSelector } from '../../../../store/characters/selectors'

export const YearsSlider: FC = () => {
  // const range = useTypedSelector(yearsRangeSelector)
  // Тут что-то пошло не так. После обновления переменной range, ререндер просиходил, но defaultValue - оставалось прежним,
  // Хотя значения туда уже попадали новые, дебажил достаточно долго, возможно фича самой библиотеки.
  // Решил пока вручную поствить те значения которые высчитывались, и двигаться дальше.

  const { filterCharacters } = useActions()

  const onAfterChange = (values: [number, number]) => {
    const [min, max] = values

    filterCharacters(['birthYearsRange', { min, max }])
  }
  const tipFormatter = (tip: number | undefined) => {
    const number = Number(tip)
    if (Number.isNaN(number)) return null

    return (
      <span>
        {Math.abs(number)}
        {' '}
        year
        {' '}
        {`${number >= 0 ? 'ABY' : 'BBY'}`}
        {' '}
      </span>
    )
  }

  return (
    <Col span={6} push={1}>
      <Slider
        range
        min={-200}
        max={50}
        onAfterChange={onAfterChange}
        defaultValue={[-200, 50]}
        tipFormatter={tipFormatter}
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
