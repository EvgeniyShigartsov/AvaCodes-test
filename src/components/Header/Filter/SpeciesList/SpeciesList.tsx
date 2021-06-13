import React, { FC } from 'react'
import { Select, Col } from 'antd'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'
import { allSpeciesSelector } from '../../../../store/characters/selectors'
import { useActions } from '../../../../hooks/useActions'

const { Option } = Select

export const SpeciesList: FC = () => {
  const speciesList = useTypedSelector(allSpeciesSelector)
  const { filterCharacters } = useActions()

  const onSpeciesChange = (species: string) => {
    const value = species === 'allSpecies' ? null : species

    filterCharacters(['species', value])
  }

  return (
    <Col span={6}>
      <Select
        defaultValue="allSpecies"
        className="select-dropdown"
        size="large"
        onChange={onSpeciesChange}
      >
        <Option value="allSpecies">All Species</Option>
        {speciesList.map((specie) => <Option key={specie} value={specie}>{specie}</Option>)}
      </Select>
    </Col>
  )
}
