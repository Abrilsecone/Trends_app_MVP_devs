/* eslint-disable react/prop-types */
import { useMemo } from "react";
import { useForm } from "../../../hooks/useForm";
import countryList from "react-select-country-list";
import { CustomTextInput } from "../../customTextInput";
import CustomRadioInput from "../../customRadioInput";
import { SearchCustomSelect } from "../../customSelect";
import { useFields } from "../../../hooks/useFields";
import CustomInputDate from "../../customInputDate";

//esta funcion es un formulario controlado
//para el registro de un usuario nuevo
export default function PersonalRegister({
  handleUserData,
  dataName,
  checkCompletedForms,
  initialInputs,
  data
}) {
  const options = useMemo(() => countryList().getData(), []);
  const initialRefs = {
    email: true,
    name: true,
    birth: true,
    age: true,
    city: true,
    country: true,
  };

  const {
    inputs: contactInputs,
    errors,
    handleInputs,
    handleSelectChange,
  } = useFields(initialInputs, initialRefs, dataName, data);

  useForm(contactInputs, errors, dataName, checkCompletedForms, handleUserData);

  return (
    <div className="containerPersonalRegister">
      <form>
        <h3>Personal Information</h3>
        <CustomTextInput
          label={"Full name:"}
          placeholder={"Write your full name..."}
          type={"text"}
          name={"name"}
          value={contactInputs.name}
          error={errors.name}
          handleInput={handleInputs}
        />
        <CustomTextInput
          label={"Email:"}
          placeholder={"example@mail.com"}
          type={"email"}
          name={"email"}
          value={contactInputs.email}
          error={errors.email}
          handleInput={handleInputs}
          handleKeyDown={handleInputs}
        />
        <CustomInputDate 
          label={"Date of Birth:"}
          name={"birth"}
          value={contactInputs.birth}
          handleInput={handleInputs}
        />
        <CustomTextInput
          label={"Age:"}
          placeholder={"25"}
          type={"text"}
          name={"age"}
          value={contactInputs.age}
          error={errors.age}
          handleInput={handleInputs}
          handleKeyDown={handleInputs}
        />
        <SearchCustomSelect
          value={contactInputs.country}
          label={"Country:"}
          placeholder={"Select your country..."}
          name={"country"}
          handleSelectChange={handleSelectChange}
          error={errors.country}
          options={options}
        />
        <CustomTextInput
          label={"City of residence:"}
          placeholder={"Write where you are from..."}
          type={"text"}
          name={"city"}
          value={contactInputs.city}
          error={errors.city}
          handleInput={handleInputs}
        />
        
        <div onChange={handleInputs}>
          <span htmlFor="support">
            Would you share your experience as a student/professional to support
            others?
          </span>
          <CustomRadioInput
            label={"Yes"}
            name={"support"}
            id={"yesSupport"}
            value={true}
            defaultChecked={true}
          />
          <CustomRadioInput
            name={"support"}
            label={"No"}
            id={"noSupport"}
            value={false}
          />
          {errors.support && <span>{errors.support}</span>}
        </div>
      </form>
    </div>
  );
}
