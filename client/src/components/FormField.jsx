import React from 'react';

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => (
  <div>
    <div className="flex items-center gap-2 mb-2 ">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-neutral"
      >
        {labelName}
      </label>
      {isSurpriseMe && (
        <button
          type="button"
          onClick={handleSurpriseMe}
          className="font-semibold text-xs btn btn-outline btn-secondary py-1 px-2 rounded-[5px]"
        >
          Surprise Prompt
        </button>
      )}
    </div>
    <input
      type={type}
      id={name}
      name={name}
      className="bg-neutral border-neutraal-focus text-neutral-content text-sm rounded-lg focus:ring-accent focus:border-accent-focus outline-none block w-full p-3"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      required
    />
  </div>
);

export default FormField;