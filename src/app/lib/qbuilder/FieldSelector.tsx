import { FieldSelectorProps } from "react-querybuilder";

export const FieldSelector = (props: FieldSelectorProps) => {
  const { options, value, handleOnChange } = props;

  let iKey = 0;
  const groups = new Set<string>();
  options.forEach((opt: any) => groups.add(opt.group));

  return (
      <select key={`field.${iKey++}`} value={value} onChange={e => handleOnChange(e.target.value)}>
        {Array.from(groups.values()).map(g => (
          <optgroup key={`${g}.${iKey++}`} label={g}>
            {options.filter((opt: any) => opt.group === g)
            .map((opt: any) => (
              <option key={`${opt.label}.${iKey++}`} value={opt.name}>{opt.label}</option>
            ))
            }
          </optgroup>
        ))}
      </select>
  );
}