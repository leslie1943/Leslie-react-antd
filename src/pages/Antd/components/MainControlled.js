import { DatePicker, message, Divider } from 'antd'
const { RangePicker } = DatePicker
import moment from 'moment'

class ControlledDatePicker extends React.Component {
  state = { mode: 'time' }

  handleOpenChange = (open) => {
    if (open) {
      this.setState({ mode: 'time' })
    }
  }
  handlePanelChange = (value, mode) => {
    this.setState({ mode })
  }
  render() {
    return (
      <DatePicker
        mode={this.state.mode}
        showTime
        onOpenChange={this.handleOpenChange}
        onPanelChange={this.handlePanelChange}></DatePicker>
    )
  }
}

class ControlledRangePicker extends React.Component {
  state = {
    mode: ['month', 'month'],
    value: []
  }
  handlePanelChange = (value, mode) => {
    this.setState({
      value,
      mode: [
        mode[0] === 'date' ? 'month' : mode[0],
        mode[1] === 'date' ? 'month' : mode[1]
      ]
    })
  }
  render() {
    const { value, mode } = this.state
    return (
      <RangePicker
        placeholder={["Start month", "End month"]}
        format="YYYY-MM"
        value={value}
        mode={mode}
        onPanelChange={this.handlePanelChange}
        renderExtraFooter={() => '我的footer'}
      >
      </RangePicker>
    )
  }
}

class CustomerDate extends React.Component {
  render() {
    return (
      <div>
        <RangePicker
          ranges={{ 'Today': [moment(), moment()], 'This month': [moment().startOf('month'), moment().endOf('month')] }}
        ></RangePicker>
        <Divider></Divider>
        <RangePicker
          showTime
          format="YYYY/MM/DD HH:mm:ss"
          ranges={{ 'Today': [moment(), moment()], 'This month': [moment().startOf('month'), moment().endOf('month')] }}
        ></RangePicker>
      </div>
    )
  }
}

class MainControlled extends React.Component {
  render() {
    return (
      <div>
        <ControlledDatePicker />
        <br /><br />
        <ControlledRangePicker />
        <Divider>自定义</Divider>
        <CustomerDate></CustomerDate>
      </div>
    )
  }
}

export default MainControlled