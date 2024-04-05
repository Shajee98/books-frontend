const SelectInput = (props: {label: string, name: string, options: string[], setFilter: (value: string) => void, filter: string}) => {
    return (
      <div className='flex flex-col gap-1 text-left w-3/4'>
        <label htmlFor={props.name}>{props.label}</label>
        <select onChange={e => props.setFilter(e.target.value)} value={props.filter} className="w-full px-4" {...props} >
            {props.options.map((option) => (<option value={option}>{option}</option>))}
        </select>
        </div>
    );
  };

export default SelectInput