import { yupResolver } from "@hookform/resolvers/yup";
import { Button, TextField } from "@mui/material";
import { Container } from "@mui/system";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { differenceInYears } from "date-fns";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object().shape({
  date: yup
    .string()
    .nullable()
    .test("date", "You must be 18 years or older", function (value) {
      return differenceInYears(new Date(value), new Date()) >= 18;
    })
    .required("Please enter your age"),
});

const DateTimePickerComponent = () => {
  const { handleSubmit, control } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("data", data);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          defaultValue={new Date()}
          name="date"
          control={control}
          render={({ field: { onChange, value }, fieldState: { error } }) => {
            return (
              <DateTimePicker
                renderInput={(props) => (
                  <TextField
                    {...props}
                    helperText={error?.message}
                    error={error}
                  />
                )}
                label="Date Time Picker"
                value={value}
                onChange={onChange}
              />
            );
          }}
        />
        <Button type="submit" variant="outlined">
          submit
        </Button>
      </form>
    </Container>
  );
};

export default DateTimePickerComponent;
