import React, { FC } from 'react'
import { Select, Col } from 'antd'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'
import { allSpeciesSelector } from '../../../../store/characters/selectors'

const { Option } = Select

export const SpeciesList: FC = () => {
  const species = useTypedSelector(allSpeciesSelector)
  return (
    <Col span={6}>
      <Select defaultValue="allSpecies" className="select-dropdown" size="large" onChange={() => null}>
        <Option value="allSpecies">All Species</Option>
        {species.map((specie) => <Option key={specie} value={specie}>{specie}</Option>)}
      </Select>
    </Col>
  )
}
