import withDateProps from './withDateProps'

describe('withDateProps plugin', () => {
  it('return with corret date, isCurrentDate false, isCurrentMonth true', () => {
    // Given
    const dateCell = { value: new Date(2020, 11, 17) }
    const baseDate = new Date(2020, 11, 13)
    const cursorDate = new Date(2020, 11, 17)

    // When
    const result = withDateProps(baseDate, cursorDate)(dateCell)

    // Then
    expect(result).toEqual({
      value: dateCell.value,
      date: 17,
      isCurrentDate: false,
      isCurrentMonth: true,
    })
  })

  it('return with corret date, isCurrentDate false, isCurrentMonth false', () => {
    // Given
    const dateCell = { value: new Date(2020, 11, 17) }
    const baseDate = new Date(2020, 11, 13)
    const cursorDate = new Date(2020, 10, 17)

    // When
    const result = withDateProps(baseDate, cursorDate)(dateCell)

    // Then
    expect(result).toEqual({
      value: dateCell.value,
      date: 17,
      isCurrentDate: false,
      isCurrentMonth: false,
    })
  })

  it('return with corret date, isCurrentDate true, isCurrentMonth true', () => {
    // Given
    const dateCell = { value: new Date(2020, 11, 17) }
    const baseDate = new Date(2020, 11, 17)
    const cursorDate = new Date(2020, 11, 17)

    // When
    const result = withDateProps(baseDate, cursorDate)(dateCell)

    // Then
    expect(result).toEqual({
      value: dateCell.value,
      date: 17,
      isCurrentDate: true,
      isCurrentMonth: true,
    })
  })
})
