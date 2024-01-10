import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

type BlueFormProps = {
  selectedDate: Date | null
  onChangeDate: (date: Date | null) => void
}

export function BlueForm({ selectedDate, onChangeDate }: BlueFormProps) {

  return (
    <DatePicker
      showIcon
      selected={selectedDate}
      onChange={(date) => onChangeDate(date)}
    />
  );
}

export default BlueForm
